import { BUY_CTA_LINK } from "@/lib/consts";
import { AnimatedButton } from "../animated/animated-button";
import { Video } from "./components/video";
import { Link } from "next-view-transitions";

export const SocialProof = () => {
  // TODO: quita el mb
  return (
    <main className="h-fit social-proof w-full pt-18 md:pt-64 md:-mt-68 bg-background-light space-y-18 md:space-y-48 pb-64 z-10">
      <div className="w-full flex flex-col items-center">
        <h2 className="mx-auto text-center text-5xl md:text-8xl tracking-tighter text-primary font-medium leading-[0.8]">
          Te mereces lo mejor.
          <br />
          Te mereces mas:
          <br />
          <span className="text-primary-light">Productos de limpieza</span>
        </h2>
      </div>

      <div className="flex md:flex-row flex-col items-start justify-start gap-0 md:gap-24">
        <div className="w-full md:w-1/2 relative md:h-auto h-172">
          <Video
            src="/Clean_Kitchen_Counter_Citrus_Scent.mp4"
            className="absolute top-0 left-0 md:block hidden -rotate-[12deg]"
          />
          <Video
            src="/Luxurious_Plate_Washing_Slow_Motion.mp4"
            className="absolute top-0 right-6 md:rotate-12 rotate-12 md:top-0 md:left-96 z-20"
          />
          <Video
            src="/Soft_Towel_Comfort_Lifestyle_Video.mp4"
            className="absolute top-1/3 left-6 md:top-24 md:left-36 z-10 -rotate-6 md:-rotate-6"
          />
        </div>

        <div className="md:w-md w-full px-4 z-40 ">
          <h3 className="font-medium tracking-tighter text-primary leading-[1.1] text-4xl">
            Queremos que la limpieza segura y respaldada por la ciencia sea
            simple y accesible — para que puedas cuidar tu piel, proteger tu
            hogar y disfrutar tu día a día con total tranquilidad.
          </h3>

          <p className="tracking-tight text-primary md:text-2xl text-3xl mb-8 my-6 leading-[1]">
            Pensada para las familias de hoy, esta formula maestra contiene
            tecnología de pH neutro, poder desengrasante activo y cero agentes
            corrosivos. Absolutamente segura. Implacable con el sucio.
          </p>

          <div className="z-40">
            <Link
              href={BUY_CTA_LINK(
                "Hola, estaria interesado en comprar productos KLAROS",
              )}
              className="z-40"
              target="_blank"
            >
              <AnimatedButton>Comprar</AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
