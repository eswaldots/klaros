import { DetergentFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { SocialButtons } from "./components/social-buttons";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { AnimatedButton } from "../animated/animated-button";

const Footer = () => {
  return (
    <footer className="md:h-[55rem] h-[72rem]">
      <div className="h-full w-full grid grid-rows-2 md:grid-cols-2 gap-6 px-2 relative">
        <div className="h-[36rem] bg-secondary z-40 w-full rounded-sm relative">
          <p className="text-center absolute top-12 left-1/2 -translate-x-1/2 z-40 md:text-8xl text-[5.25rem] tracking-tighter font-semibold leading-[0.7]">
            <span className="text-primary-foreground">LIMPIEZA</span>
            <br />
            <span className="text-primary-foreground">ENCUENTRA</span>
            <br />
            <span className="text-primary-foreground">BIENESTAR</span>
            <br />
          </p>

          <Image
            src="/footer.webp"
            fill
            className="object-cover rounded-sm"
            alt="Footer"
          />

          <AnimatedButton
            className="absolute left-1/2 -translate-x-1/2 bottom-12"
            variant="secondary"
          >
            Comprar ahora
          </AnimatedButton>
        </div>
        <div className="h-full w-full rounded-sm">
          <Link
            href="/products/"
            className="rounded-sm bg-secondary gap-4 w-full md:w-36 h-fit py-6 flex flex-col items-center justify-center"
          >
            <HugeiconsIcon
              icon={DetergentFreeIcons}
              className="size-12 text-primary-light"
            />

            <p className="max-w-xs text-xl leading-[0.8] font-semibold text-center text-primary tracking-tight uppercase">
              Ver todos los productos
            </p>
          </Link>

          <div className="m-4 md:m-20">
            <h2 className="text-primary-light text-6xl tracking-tight font-medium">
              Mas claridad
              <br />
              Mas <span className="text-primary">KLAROS</span>
            </h2>

            <div className="my-8">
              <SocialButtons className="bg-white z-50" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 pb-4">
          <h1 className="md:block hidden z-10 text-primary font-bold tracking-tight text-[33vw] leading-[0.75] overflow-hidden">
            KLAROS
          </h1>
          <div className="px-6 w-full flex items-center justify-between">
            <span className="text-lg text-primary tracking-tight">
              © 2026 KLAROS. Casi todos los derechos reservados
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
