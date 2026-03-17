import { BUY_CTA_LINK } from "@/lib/consts";
import { AnimatedButton } from "../animated/animated-button";
import { Link } from "next-view-transitions";

const PaymentMethods = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="my-80 flex items-center flex-col gap-12 md:px-0 px-4">
        <h2 className="text-7xl md:text-8xl text-primary font-medium tracking-tight text-center leading-[0.8]">
          No te quedes con las ganas.
          <br />
          <span className="text-primary-light">Consiguelo.</span>
        </h2>

        <Link
          href={BUY_CTA_LINK(
            "Hola, estaria interesado en comprar productos KLAROS",
          )}
          target="_blank"
          className="z-50"
        >
          <AnimatedButton>Comprar ahora</AnimatedButton>
        </Link>
      </div>
    </section>
  );
};

export { PaymentMethods };
