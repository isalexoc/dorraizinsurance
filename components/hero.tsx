"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 order-1"
          >

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Award className="w-4 h-4" />
                <span>{t.hero.badge}</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-green-600 block text-2xl sm:text-3xl lg:text-5xl mb-2">
                  {t.hero.name}
                </span>
                {t.hero.title}
                <span className="text-green-600 block">{t.hero.subtitle}</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {t.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t.hero.cta1}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">20+</div>
                <div className="text-sm text-gray-600">
                  {t.hero.stats.states}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">3000+</div>
                <div className="text-sm text-gray-600">
                  {t.hero.stats.clients}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">
                  {t.hero.stats.satisfaction}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2"
          >
            <div className="relative max-w-md mx-auto">
              <Image
                src="https://res.cloudinary.com/isaacdev/image/upload/f_auto,q_auto,w_500,h_600,c_fill,g_face/daniel_k2t4sy.png"
                alt="Daniel Orraiz - Agente de Seguros Profesional"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                priority
              />

              {/* Logo positioned next to the image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6"
              >
                <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                  <Image
                    src="https://res.cloudinary.com/isaacdev/image/upload/v1760672584/dil_zr0iuu.png"
                    alt="Dorraiz Insurance Logo"
                    width={100}
                    height={40}
                    className="w-20 lg:w-24 h-auto object-contain"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-6 top-20 hidden lg:block"
              >
                <Card className="p-4 bg-white shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-8 h-8 text-green-600" />
                    <div>
                      <div className="font-semibold text-sm">
                        ACA Certificado
                      </div>
                      <div className="text-xs text-gray-600">
                        Cobertura Experta
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-6 bottom-20 hidden lg:block"
              >
                <Card className="p-4 bg-white shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8 text-green-600" />
                    <div>
                      <div className="font-semibold text-sm">
                        Especialista Medicare
                      </div>
                      <div className="text-xs text-gray-600">
                        Todos los Planes
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Mobile Badges */}
              <div className="lg:hidden mt-6 grid grid-cols-2 gap-3">
                <Card className="p-3 bg-white shadow-md">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-xs">
                        ACA Certificado
                      </div>
                      <div className="text-xs text-gray-600">
                        Cobertura Experta
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="p-3 bg-white shadow-md">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-xs">
                        Especialista Medicare
                      </div>
                      <div className="text-xs text-gray-600">
                        Todos los Planes
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
