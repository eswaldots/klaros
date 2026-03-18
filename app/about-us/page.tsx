"use client";

import { useRef } from "react";
import { SiteFooter } from "@/components/landing/site-footer";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ServerPage = () => {
  const heroRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(imageWrapperRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: heroRef },
  );

  return (
    <main>
      <div ref={heroRef} className="h-screen w-screen relative overflow-hidden">
        Esto evita que se vean bordes blancos durante el parallax
        <div
          ref={imageWrapperRef}
          className="absolute -top-[15%] -bottom-[15%] left-0 right-0"
        >
          <Image
            alt="Fondo de inicio de Klaros"
            src="/about.jpg"
            fill
            className="object-cover size-full"
            priority
          />
        </div>
        <div className="absolute w-screen px-4 md:px-12 bottom-16 h-fit z-10">
          <div className="text-5xl md:text-8xl font-medium tracking-tight">
            <h1 className="text-white/80">Como comenzo</h1>
            <h2 className="text-white">
              Desde Charallave hasta toda Venezuela
            </h2>

            <p className="text-white text-xl md:text-3xl text-wrap max-w-2xl tracking-normal font-normal mt-6 md:mt-10">
              KLAROS nacio como el deseo de ofrecer productos de limpieza de
              calidad sin recaer en industrializaciones artificiales. No deberia
              ser dificil poder limpiar bien sin que sea de forma natural.
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen bg-white px-2 md:px-[20rem] py-12 md:py-36 z-20 relative">
        <div className="md:px-24 px-2">
          <h3 className="text-5xl md:text-6xl font-medium tracking-tight my-6">
            Donde todo comenzo
          </h3>

          <p className="text-black text-2xl md:text-2xl leading-relaxed mb-4">
            Klaros es mas que una marca, es una solucion. Todo empezo como un
            desafio dentro de la Kurios Competition, una idea para repensar la
            limpieza del hogar.
          </p>
          <p className="text-black text-2xl md:text-2xl leading-relaxed">
            Desde entonces, hemos crecido, llevando nuestra filosofia de
            limpieza natural y efectiva desde Charallave a todos los rincones
            del pais. Esta es nuestra historia de innovacion y compromiso.
          </p>
        </div>

        <div className="rounded-[4rem] bg-black w-full h-96 md:h-[48rem] my-12 md:my-24 relative overflow-hidden">
          <Image
            className="size-full object-cover rounded-[4rem]"
            alt="banner de kurios"
            src={"/kurios-banner.png"}
            fill
          />
        </div>
      </div>

      <SiteFooter />
    </main>
  );
};

export default ServerPage;
