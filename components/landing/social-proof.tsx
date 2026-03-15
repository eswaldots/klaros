import { AnimatedButton } from "../animated/animated-button";
import { Video } from "./components/video";

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
          <Video className="absolute top-0 left-0 md:block hidden -rotate-[12deg]" />
          <Video className="absolute top-0 right-6 md:rotate-12 rotate-12 md:top-0 md:left-96 z-20" />
          <Video className="absolute top-1/3 left-6 md:top-24 md:left-36 z-10 -rotate-6 md:-rotate-6" />
        </div>

        <div className="md:w-md w-full px-4">
          <h3 className="font-medium tracking-tighter text-primary leading-[1.1] text-4xl">
            Queremos que la limpieza segura y respaldada por la ciencia sea
            simple y accesible — para que puedas cuidar tu piel, proteger tu
            hogar y disfrutar tu día a día con total tranquilidad.
          </h3>

          <p className="tracking-tight text-primary md:text-2xl text-3xl mb-8 my-6 leading-[1]">
            Pensada para las familias de hoy, esta fórmula maestra contiene
            tecnología de pH neutro, poder desengrasante activo y cero agentes
            corrosivos. Absolutamente segura. Implacable con el sucio.
          </p>

          <div>
            <AnimatedButton>Comprar</AnimatedButton>
          </div>
        </div>
      </div>
    </main>
  );
};
