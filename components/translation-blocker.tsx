"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, X, AlertCircle } from "lucide-react";

export function TranslationBlocker() {
  const [showNotification, setShowNotification] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null);
  const [hasShownNotification, setHasShownNotification] = useState(false);
  const [autoHideTimeout, setAutoHideTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Remove Google Translate elements if they appear
    const removeGoogleTranslate = () => {
      const elements = [
        '.goog-te-banner-frame',
        '.goog-te-gadget',
        '.goog-te-combo',
        '#google_translate_element',
        '.skiptranslate'
      ];
      
      elements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
        });
      });
    };

    // Detect if Google Translate is being used
    const detectTranslation = () => {
      // Don't show notification if it's already been shown and dismissed
      if (hasShownNotification) return;

      // Check for Google Translate indicators
      const isTranslated = document.documentElement.classList.contains('translated-ltr') ||
                          document.documentElement.classList.contains('translated-rtl') ||
                          document.querySelector('.goog-te-banner-frame') !== null ||
                          document.querySelector('.skiptranslate') !== null;

      if (isTranslated && !showNotification) {
        // Detect the target language
        const langAttr = document.documentElement.getAttribute('lang');
        const detectedLang = langAttr && langAttr !== 'es' ? langAttr : 'English';
        
        setDetectedLanguage(detectedLang);
        setShowNotification(true);
        setHasShownNotification(true);
        
        // Auto-hide after 8 seconds
        const timeout = setTimeout(() => {
          setShowNotification(false);
        }, 8000);
        setAutoHideTimeout(timeout);
      }
    };

    // Run immediately and on DOM changes
    removeGoogleTranslate();
    detectTranslation();
    
    // Set up mutation observer to catch dynamically added elements
    const observer = new MutationObserver(() => {
      removeGoogleTranslate();
      detectTranslation();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'lang']
    });

    // Watch for changes to document element classes
    const docObserver = new MutationObserver(() => {
      detectTranslation();
    });

    docObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'lang']
    });

    // Prevent right-click context menu translation options
    const preventContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest('.goog-te-banner-frame, .goog-te-gadget')) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener('contextmenu', preventContextMenu);

    // Cleanup
    return () => {
      observer.disconnect();
      docObserver.disconnect();
      document.removeEventListener('contextmenu', preventContextMenu);
      if (autoHideTimeout) {
        clearTimeout(autoHideTimeout);
      }
    };
  }, [hasShownNotification, showNotification, autoHideTimeout]);

  const handleClose = () => {
    setShowNotification(false);
    if (autoHideTimeout) {
      clearTimeout(autoHideTimeout);
      setAutoHideTimeout(null);
    }
  };

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] max-w-md mx-4"
        >
          <div className="bg-white border border-gray-200 rounded-xl shadow-2xl p-4 relative">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>

            {/* Content */}
            <div className="flex items-start space-x-3 pr-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  🌐 Use Our Language Toggle
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  We detected you're using browser translation. For the best experience with our professional bilingual content, please use our language toggle in the header instead.
                </p>
                
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">
                    Look for the language toggle in the top navigation
                  </span>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 8, ease: "linear" }}
                className="h-full bg-green-500"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
