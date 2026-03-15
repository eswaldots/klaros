import { Comparison } from "@/components/landing/comparison";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { LastSection } from "@/components/landing/last-section";
import { PaymentMethods } from "@/components/landing/payment-methods";
import { Products } from "@/components/landing/products";
import { SocialProof } from "@/components/landing/social-proof";
import { Testimonials } from "@/components/landing/testimonials";
import ReactLenis from "lenis/react";

export default function Page() {
  return (
    <main className="font-sans max-w-screen md:max-w-[calc(100vw-12px)] w-full bg-background-light overflow-y-hidden min-h-screen">
      <ReactLenis root />
      <Header />
      <div className="w-full bg-background">
        <Hero />
      </div>
      <div className="bg-background-light w-full">
        <SocialProof />
        <Products />
        <Comparison />
        <Testimonials />
        <LastSection />
        <PaymentMethods />
      </div>
      <Footer />
    </main>
  );
}
