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
  title: "KLAROS",
  description: "KLAROS es un emprendimiento de productos de limpieza",
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
