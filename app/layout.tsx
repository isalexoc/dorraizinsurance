import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import CrispChat from "@/components/crisp-chat";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TranslationBlocker } from "@/components/translation-blocker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dorraiz Insurance - Su Agente de Seguros de Confianza",
  description:
    "Especializado en seguros ACA, Medicare, Vida, Dental y Visión. Licenciado en más de 20 estados. Obtenga su cotización gratuita hoy.",
  keywords:
    "seguros médicos, ACA, Medicare, seguro dental, seguro de visión, seguros de vida, Florida, Texas, seguros accesibles, agente de seguros en español",
  authors: [{ name: "Dorraiz Insurance Team" }],
  openGraph: {
    title: "Dorraiz Insurance - Seguros ACA, Medicare y más",
    description:
      "Somos su agente de confianza para seguros ACA, Medicare, dental, visión y vida. Atendemos a familias hispanas en más de 20 estados.",
    url: "https://www.dorraizinsurance.com",
    images: [
      {
        url: "https://res.cloudinary.com/isaacdev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill,g_auto/daniel_k2t4sy.png",
        width: 1200,
        height: 630,
        alt: "Dorraiz Insurance - Seguros ACA, Medicare y más",
      },
    ],
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dorraiz Insurance - Seguros ACA, Medicare y más",
    description:
      "Atención personalizada en seguros ACA, Medicare, vida y más. Llame hoy y obtenga una cotización gratuita.",
    images: [
      "https://res.cloudinary.com/isaacdev/image/upload/f_auto,q_auto,w_1200,h_630,c_fill,g_auto/daniel_k2t4sy.png",
    ],
    creator: "@DorraizInsurance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.dorraizinsurance.com",
  },
  other: {
    "theme-color": "#22c55e",
    "google": "notranslate",
    "translate": "no",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className="scroll-smooth" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <meta name="translate" content="no" />
        <meta httpEquiv="Content-Language" content="es" />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-white text-gray-900 overflow-x-hidden`}
        translate="no"
      >
        <LanguageProvider>
          <TranslationBlocker />
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Toaster />
          <CrispChat />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
