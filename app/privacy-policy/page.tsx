"use client";

import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  /** ─────────────  CONTENIDO MULTILENGUAJE  ───────────── */
  const content = {
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 20 de junio de 2025",
      backToHome: "Volver al Inicio",
      sections: {
        /* 1 */
        introduction: {
          title: "1. Introducción",
          content:
            "En Dorraiz Insurance, nos comprometemos a proteger su privacidad y la confidencialidad de su información personal. Esta Política de Privacidad describe cómo recopilamos, utilizamos, compartimos y protegemos su información cuando utiliza nuestros servicios de seguros o visita nuestro sitio web.",
        },

        /* 2 */
        informationCollected: {
          title: "2. Tipos de Información Personal Recopilada",
          content: "Recopilamos los siguientes tipos de información personal:",
          items: [
            "Información de identificación personal: Nombre completo, fecha de nacimiento, número de seguro social",
            "Información de contacto: Dirección postal, correo electrónico, números de teléfono",
            "Información demográfica: Edad, género, estado civil, dependientes",
            "Información financiera: Ingresos, empleo, historial crediticio (cuando aplique)",
            "Información de salud: Historial médico y condiciones preexistentes (para seguros de salud)",
            "Información del navegador: Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia",
            "Datos de ubicación: Ubicación geográfica para determinar elegibilidad de planes",
            "Registros de comunicación: Llamadas, SMS y correos electrónicos",
            "Preferencias: Preferencias de comunicación y coberturas de interés",
          ],
        },

        /* 3 */
        howWeUse: {
          title: "3. Cómo Utilizamos Su Información",
          content:
            "Utilizamos su información personal para los siguientes fines:",
          items: [
            "Proporcionar cotizaciones de seguros personalizadas y precisas",
            "Procesar solicitudes y administrar su cobertura",
            "Comunicarnos sobre pólizas, renovaciones y cambios",
            "Brindar atención al cliente y soporte técnico",
            "Cumplir con obligaciones legales y regulatorias",
            "Mejorar nuestros servicios y desarrollar nuevos productos",
            "Realizar análisis de mercado e investigación",
            "Prevenir fraudes y garantizar la seguridad",
            "Personalizar su experiencia en el sitio web",
            "Enviar comunicaciones de marketing (solo con su consentimiento)",
          ],
        },

        /* 4 */
        sharingPractices: {
          title: "4. Prácticas de Compartir Información",
          content:
            "Podemos compartir su información personal en las siguientes circunstancias:",
          items: [
            "Con aseguradoras: Para obtener cotizaciones y procesar pólizas",
            "Con proveedores de servicios: Procesamiento de pagos, servicios de TI, etc.",
            "Con autoridades regulatorias: Cuando lo exija la ley",
            "Con asesores legales y contables",
            "En caso de transferencia empresarial",
            "Para proteger derechos legales",
            "Con su consentimiento explícito",
          ],
        },

        /* 5 */
        smsPolicy: {
          title: "5. Términos y Condiciones de SMS",
          content:
            "La inscripción móvil, el consentimiento SMS y los números de teléfono recopilados para fines de comunicación SMS no se compartirán con terceros o afiliados para fines de marketing.",
          items: [
            "1. Comunicación de Consentimiento SMS: La información (números de teléfono) obtenida como parte del proceso de consentimiento SMS no se compartirá con terceros para fines de marketing.",
            "2. Tipos de Comunicaciones SMS: Si ha dado su consentimiento para recibir mensajes de texto de Dorraiz Insurance, puede recibir mensajes relacionados con lo siguiente: Atención al cliente, Notificaciones de cuenta, Alerta de fraude. Ejemplo: \"Hola, este es un recordatorio amigable de su próxima cita con el Dr. [Nombre] en [Ubicación] el [Fecha] a las [Hora]. Puede responder STOP para cancelar los mensajes SMS de Dorraiz Insurance en cualquier momento.\"",
            "3. Frecuencia de Mensajes: La frecuencia de mensajes puede variar dependiendo del tipo de comunicación. Por ejemplo, puede recibir hasta 2 mensajes SMS por semana relacionados con sus citas.",
            "4. Tarifas Potenciales para Mensajería SMS: Tenga en cuenta que pueden aplicarse tarifas estándar de mensajes y datos, dependiendo del plan de precios de su operador. Estas tarifas pueden variar si el mensaje se envía nacional o internacionalmente.",
            "5. Método de Inscripción: Puede inscribirse para recibir mensajes SMS de Dorraiz Insurance de las siguientes maneras: Al enviar un formulario en línea.",
            "6. Método de Cancelación: Puede cancelar la recepción de mensajes SMS en cualquier momento. Para hacerlo, simplemente responda \"STOP\" a cualquier mensaje SMS que reciba. Alternativamente, puede contactarnos directamente para solicitar la eliminación de nuestra lista de mensajería.",
            "7. Ayuda: Si está experimentando algún problema, puede responder con la palabra clave HELP. O puede obtener ayuda directamente de nosotros en https://www.dorraizinsurance.com/contact. Opciones Adicionales: Si no desea recibir mensajes SMS, puede elegir no marcar la casilla de consentimiento SMS en nuestros formularios.",
            "8. Divulgaciones Estándar de Mensajería: Pueden aplicarse tarifas de mensajes y datos. Puede cancelar en cualquier momento enviando \"STOP\". Para asistencia, envíe \"HELP\" o visite nuestras páginas de Política de Privacidad y Términos y Condiciones. La frecuencia de mensajes puede variar.",
          ],
        },

        /* 6 */
        dataSecurity: {
          title: "6. Seguridad de Datos",
          content:
            "Implementamos medidas técnicas, administrativas y físicas para proteger su información contra acceso no autorizado, alteración o divulgación.",
        },

        /* 7 */
        yourRights: {
          title: "7. Sus Derechos",
          content: "Usted tiene derecho a:",
          items: [
            "Acceder a su información personal",
            "Solicitar correcciones",
            "Solicitar eliminación (sujeto a obligaciones legales)",
            "Optar por no recibir marketing",
            "Solicitar una copia de esta política",
          ],
        },

        /* 8 */
        contact: {
          title: "8. Información de Contacto",
          content: "Si tiene preguntas sobre esta Política de Privacidad:",
          details: [
            "Email: info@dorraizinsurance.com",
            "Tel: (956) 302-1451 / (407) 785-9073",
            "Agente: Daniel Orraiz, Licenciado en 20+ Estados",
          ],
        },
      },
    },

    /* ─────────────  ENGLISH VERSION ───────────── */
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: June 20, 2025",
      backToHome: "Back to Home",
      sections: {
        /* 1 */
        introduction: {
          title: "1. Introduction",
          content:
            "At Dorraiz Insurance we are committed to protecting your privacy. This policy explains how we collect, use, share, and safeguard your information when you use our services or visit our website.",
        },

        /* 2 */
        informationCollected: {
          title: "2. Types of Personal Information Collected",
          content: "We collect the following types of personal information:",
          items: [
            "Personal identification: Full name, date of birth, SSN",
            "Contact: Mailing address, email, phone numbers",
            "Demographics: Age, gender, marital status, dependents",
            "Financial: Income, employment details, credit history (if applicable)",
            "Health: Medical history, pre-existing conditions (for health insurance)",
            "Browser data: IP address, pages visited, time spent",
            "Location data: Geographic location to determine plan eligibility",
            "Communication logs: Calls, texts, emails",
            "Preferences: Communication preferences, coverage interests",
          ],
        },

        /* 3 */
        howWeUse: {
          title: "3. How We Use Your Information",
          content: "We use your personal information to:",
          items: [
            "Provide accurate insurance quotes",
            "Process policy applications and manage coverage",
            "Communicate about policies, renewals, and changes",
            "Offer customer service and technical support",
            "Meet legal and regulatory obligations",
            "Improve our services and develop new products",
            "Conduct market analysis and research",
            "Prevent fraud and ensure security",
            "Personalize your website experience",
            "Send marketing communications (with consent)",
          ],
        },

        /* 4 */
        sharingPractices: {
          title: "4. Information Sharing Practices",
          content:
            "We may share your personal information under these circumstances:",
          items: [
            "With insurers to obtain quotes and issue policies",
            "With service providers (payment processing, IT)",
            "With regulators when required by law",
            "With legal and accounting professionals",
            "In a business transfer or sale",
            "To protect legal rights",
            "With your explicit consent",
          ],
        },

        /* 5 */
        smsPolicy: {
          title: "5. SMS Terms & Conditions",
          content:
            "Mobile Opt in, SMS Consent, and phone numbers collected for SMS communication purposes will not be shared with any third party or affiliates for marketing purposes.",
          items: [
            "1. SMS Consent Communication: The information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.",
            "2. Types of SMS Communications: If you have consented to receive text messages from Dorraiz Insurance, you may receive messages related to the following: Customer care, Account Notifications, Fraud alert. Example: \"Hello, this is a friendly reminder of your upcoming appointment with Dr. [Name] at [Location] on [Date] at [Time]. You can reply STOP to opt out of SMS messaging from Dorraiz Insurance at any time.\"",
            "3. Message Frequency: Message frequency may vary depending on the type of communication. For example, you may receive up to 2 SMS messages per week related to your appointments.",
            "4. Potential Fees for SMS Messaging: Please note that standard message and data rates may apply, depending on your carrier's pricing plan. These fees may vary if the message is sent domestically or internationally.",
            "5. Opt-In Method: You may opt in to receive SMS messages from Dorraiz Insurance in the following ways: By submitting an online form.",
            "6. Opt-Out Method: You can opt out of receiving SMS messages at any time. To do so, simply reply \"STOP\" to any SMS message you receive. Alternatively, you can contact us directly to request removal from our messaging list.",
            "7. Help: If you are experiencing any issues, you can reply with the keyword HELP. Or, you can get help directly from us at https://www.dorraizinsurance.com/contact. Additional Options: If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms.",
            "8. Standard Messaging Disclosures: Message and data rates may apply. You can opt out at any time by texting \"STOP.\" For assistance, text \"HELP\" or visit our Privacy Policy and Terms and Conditions pages. Message frequency may vary.",
          ],
        },

        /* 6 */
        dataSecurity: {
          title: "6. Data Security",
          content:
            "We use technical, administrative, and physical safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction.",
        },

        /* 7 */
        yourRights: {
          title: "7. Your Rights",
          content: "You have the right to:",
          items: [
            "Access the personal information we hold",
            "Request corrections to inaccurate data",
            "Request deletion (subject to legal obligations)",
            "Opt-out of marketing communications",
            "Request a copy of this privacy policy",
          ],
        },

        /* 8 */
        contact: {
          title: "8. Contact Information",
          content: "If you have questions about this Privacy Policy:",
          details: [
            "Email: dorraizinsurance@gmail.com",
            "Phone: (956) 302-1451 / (407) 785-9073",
            "Agent: Daniel Orraiz, Licensed in 20+ States",
          ],
        },
      },
    },
  };

  const t = content[language];

  /** ─────────────  RENDER  ───────────── */
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backToHome}
            </Link>
          </div>

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {t.title}
            </h1>
            <p className="text-gray-600">{t.lastUpdated}</p>
          </div>

          {/* Sections */}
          <div className="prose prose-lg max-w-none">
            {Object.values(t.sections).map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {section.content}
                </p>

                {"items" in section && Array.isArray(section.items) && (
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {"details" in section && Array.isArray(section.details) && (
                  <ul className="list-none space-y-2 mb-4">
                    {section.details.map((det, i) => (
                      <li key={i} className="text-gray-700 font-medium">
                        {det}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              {language === "es"
                ? "¿Preguntas sobre su Privacidad?"
                : "Questions About Your Privacy?"}
            </h3>
            <p className="text-green-700 mb-4">
              {language === "es"
                ? "Si tiene alguna pregunta sobre cómo manejamos su información personal, no dude en contactarnos."
                : "If you have any questions about how we handle your personal information, please contact us."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9563021451"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
              >
                {language === "es" ? "Llamar Ahora" : "Call Now"}
              </a>
              <a
                href="mailto:info@dorraizinsurance.com"
                className="bg-white text-green-600 border border-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors text-center"
              >
                {language === "es" ? "Enviar Email" : "Send Email"}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
