import { Comparison } from "@/components/landing/comparison";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { LastSection } from "@/components/landing/last-section";
import { Loader } from "@/components/landing/loader";
import { PaymentMethods } from "@/components/landing/payment-methods";
import { Products } from "@/components/landing/products";
import { SocialProof } from "@/components/landing/social-proof";
import { Testimonials } from "@/components/landing/testimonials";

export default function Page() {
  return (
    <main
      id="main"
      className="font-sans max-w-screen md:max-w-screen w-full bg-background-light h-full overflow-y-hidden"
    >
      <Loader />
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
