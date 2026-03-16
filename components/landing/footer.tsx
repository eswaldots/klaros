import { DetergentFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SocialButtons } from "./components/social-buttons";

const Footer = () => {
  return (
    <section className="h-fit">
      <div className="h-full w-full grid grid-rows-2 md:grid-cols-2 gap-6 px-2">
        <div className="h-full bg-secondary z-40 w-full rounded-sm"></div>
        <div className="h-full w-full rounded-sm">
          <div className="rounded-sm bg-secondary gap-4 border border-primary/5 w-36 h-fit py-6 flex flex-col items-center justify-center">
            <HugeiconsIcon
              icon={DetergentFreeIcons}
              className="size-12 text-primary-light"
            />

            <p className="max-w-xs text-xl leading-[0.8] font-semibold text-center text-primary tracking-tight uppercase">
              Ver todos los productos
            </p>
          </div>

          <div className="m-4 md:m-20">
            <h2 className="text-primary-light text-6xl tracking-tight font-medium">
              Mas claridad
              <br />
              Mas <span className="text-primary">KLAROS</span>
            </h2>

            <SocialButtons className="bg-white my-8 z-40" />
          </div>
        </div>
      </div>

      <div className="md:-mt-[44rem] pb-4">
        <h1 className="z-10 text-primary font-bold tracking-tight text-[33vw] leading-[0.8] overflow-hidden">
          KLAROS
        </h1>
        <div className="px-6 w-full flex items-center justify-between">
          <span className="text-lg text-primary tracking-tight">
            © 2026 KLAROS. Casi todos los derechos reservados
          </span>
        </div>
      </div>
    </section>
  );
};

export { Footer };
