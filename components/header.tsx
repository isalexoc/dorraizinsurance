"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  const navItems = [
    { name: t.nav.home, href: isHomePage ? "#home" : "/#home" },
    { name: t.nav.services, href: isHomePage ? "#services" : "/#services" },
    { name: t.nav.about, href: isHomePage ? "#about" : "/#about" },
    { name: t.nav.coverage, href: isHomePage ? "#coverage" : "/#coverage" },
    { name: t.nav.contact, href: isHomePage ? "contact" : "/contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    // If we're not on home page and it's a hash link, navigate to home first
    if (!isHomePage && href.startsWith("#")) {
      window.location.href = "/" + href;
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Always links to home */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/isaacdev/image/upload/f_auto,q_auto,w_40,h_40,c_fill,g_auto/logo_daniel_wwzhir.png"
                alt="Dorraiz Insurance Logo"
                width={40}
                height={40}
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900">Dorraiz</span>
              <span className="text-xs text-green-600 font-medium">
                INSURANCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Tablet Language Toggle */}
          <div className="hidden md:flex lg:hidden items-center">
            <LanguageToggle />
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>{t.header.phone}</span>
            </div>
            <LanguageToggle />
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700">
                {t.header.cta}
              </Button>
            </Link>
          </div>

          {/* Mobile Header Actions */}
          <div className="flex items-center space-x-2 md:hidden">
            <LanguageToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-green-600 transition-colors font-medium py-2"
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{t.header.phone}</span>
                      </div>
                      <LanguageToggle />
                    </div>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => {
                        setIsOpen(false);

                        window.location.href = "/contact";
                      }}
                    >
                      {t.header.cta}
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </motion.header>
  );
}
