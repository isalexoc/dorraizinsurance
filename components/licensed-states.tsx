"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Shield, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export function LicensedStates() {
  const { language } = useLanguage();
  const t = translations[language];

  const licensedStates = [
    { code: "FL", name: language === "es" ? "Florida" : "Florida" },
    { code: "AL", name: language === "es" ? "Alabama" : "Alabama" },
    { code: "AZ", name: language === "es" ? "Arizona" : "Arizona" },
    { code: "CA", name: language === "es" ? "California" : "California" },
    { code: "GA", name: language === "es" ? "Georgia" : "Georgia" },
    { code: "IL", name: language === "es" ? "Illinois" : "Illinois" },
    { code: "KY", name: language === "es" ? "Kentucky" : "Kentucky" },
    { code: "MO", name: language === "es" ? "Missouri" : "Missouri" },
    { code: "MS", name: language === "es" ? "Mississippi" : "Mississippi" },
    { code: "NC", name: language === "es" ? "Carolina del Norte" : "North Carolina" },
    { code: "NM", name: language === "es" ? "Nuevo México" : "New Mexico" },
    { code: "NY", name: language === "es" ? "Nueva York" : "New York" },
    { code: "PA", name: language === "es" ? "Pensilvania" : "Pennsylvania" },
    { code: "SC", name: language === "es" ? "Carolina del Sur" : "South Carolina" },
    { code: "TN", name: language === "es" ? "Tennessee" : "Tennessee" },
    { code: "TX", name: language === "es" ? "Texas" : "Texas" },
    { code: "UT", name: language === "es" ? "Utah" : "Utah" },
    { code: "VA", name: language === "es" ? "Virginia" : "Virginia" },
    { code: "WA", name: language === "es" ? "Washington" : "Washington" },
    { code: "WI", name: language === "es" ? "Wisconsin" : "Wisconsin" },
  ];

  const licenseTypes = [
    {
      icon: Heart,
      title: language === "es" ? "Seguro de Salud" : "Health Insurance",
      description: language === "es" ? "Licencia ACA y Medicare" : "ACA & Medicare License",
    },
    {
      icon: Shield,
      title: language === "es" ? "Seguro de Vida" : "Life Insurance",
      description: language === "es" ? "Cobertura de vida completa" : "Complete life coverage",
    },
  ];

  return (
    <section id="licensed-states" className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              {language === "es" ? "Estados con Licencia" : "Licensed States"}
            </h2>
          </div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "es"
              ? "Daniel Orraiz está licenciado para ofrecer seguros de salud y vida en los siguientes estados de Estados Unidos."
              : "Daniel Orraiz is licensed to offer health and life insurance in the following US states."}
          </p>
        </motion.div>

        {/* License Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12 lg:mb-16 max-w-4xl mx-auto"
        >
          {licenseTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* States Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 text-center mb-8">
              {language === "es" ? "20 Estados con Licencia" : "20 Licensed States"}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {licensedStates.map((state, index) => (
                <motion.div
                  key={state.code}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-3 sm:p-4 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-lg sm:text-xl font-bold text-green-600 mb-1">
                    {state.code}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 font-medium">
                    {state.name}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 pt-6 border-t border-gray-200"
            >
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  {language === "es"
                    ? "Cobertura nacional con licencias activas en salud y vida"
                    : "National coverage with active health and life licenses"}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:9563021451"
                    className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    {language === "es" ? "Llamar (956) 302-1451" : "Call (956) 302-1451"}
                  </a>
                  <a
                    href="mailto:info@dorraizinsurance.com"
                    className="bg-white text-green-600 border border-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    {language === "es" ? "Enviar Email" : "Send Email"}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
