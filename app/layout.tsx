import type { Metadata } from "next";
import localFont from "next/font/local";
import ReactLenis from "lenis/react";
import { Header } from "@/components/landing/header";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

const grotesk = localFont({
  preload: true,
  display: "block",
  src: [
    {
      path: "../fonts/grotesk/grotesk-condensed-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/grotesk/grotesk-condensed-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/grotesk/grotesk-condensed-semibold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../fonts/grotesk/grotesk-condensed-bold.woff2",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://klaros-nine.vercel.app/"),
  title: {
    default: "KLAROS | Pureza y Limpieza",
    template: "%s | KLAROS",
  },
  description:
    "Detergentes y desinfectantes biodegradables con pH 7 Neutro. Limpieza profunda con calidad de laboratorio que no irrita tu piel ni daña el hogar.",
  keywords: [
    "detergente",
    "desinfectante",
    "limpieza del hogar",
    "pH neutro",
    "biodegradable",
    "cleantech",
    "KLAROS",
    "Venezuela",
  ],
  authors: [{ name: "Equipo KLAROS" }],
  creator: "KLAROS",
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: "/",
    title: "KLAROS | Limpiar ya no significa dolor",
    description:
      "Descubre nuestra línea premium: Lavaplatos, Desinfectante y Detergente. Tecnología de limpieza respetuosa con tu piel y tu entorno.",
    siteName: "KLAROS",
  },
  twitter: {
    card: "summary_large_image",
    title: "KLAROS | Pureza y Limpieza",
    description:
      "Detergentes biodegradables con pH 7 Neutro. Limpieza que cuida tu piel.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${grotesk.variable} font-sans antialiased`}>
        <ViewTransitions>
          <ReactLenis root />
          <Header />
          {children}
        </ViewTransitions>
      </body>
    </html>
  );
}
