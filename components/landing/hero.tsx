"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import { AnimatedText } from "../animated/animated-text";
import { AnimatedButton } from "../animated/animated-button";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/use-is-mobile";
import Link from "next/link";
import { BUY_CTA_LINK } from "@/lib/consts";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Observer);

const initialDelay = "klaros".length * 0.35 + 1;

export const Hero = () => {
  const container = useRef(null);
  const animatedTextRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.25, ease: "power1.out", delay: initialDelay },
    });

    gsap.fromTo(
      animatedTextRef.current,
      { y: window.screen.height / 4 },
      { y: 0, delay: initialDelay - 0.5, duration: 0.5, ease: "power4.inOut" },
    );

    tl.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 40,
      },
      { opacity: 1, y: 0 },
    );
  });

  return (
    <section
      ref={container}
      className="h-fit md:max-w-[calc(100vw-30px)] w-full flex flex-col items-center justify-center gap-1 z-50 bg-background"
      id="hero"
    >
      <div className="flex flex-col w-full gap-6 items-center mt-36 md:mt-24">
        <div ref={animatedTextRef}>
          <AnimatedText
            delay={1}
            className="text-center leading-none font-outfit text-primary uppercase text-[7rem] md:text-[12rem] font-bold tracking-tight"
          >
            Klaros
          </AnimatedText>
        </div>

        <div ref={buttonRef}>
          <Link
            href={BUY_CTA_LINK(
              "Hola, estaria interesado en comprar productos KLAROS",
            )}
            target="_blank"
          >
            <AnimatedButton>Comprar</AnimatedButton>
          </Link>
        </div>
      </div>

      <div className="md:bg-transparent bg-background md:pb-0 pb-64 w-full md:flex-row flex-col md:items-start md:gap-0 gap-48 flex items-center justify-between px-42 py-12">
        <Detergent />
        <Paragraph />
      </div>

      <div className="-mt-32 md:-mt-64 z-20">
        <Marquee />
      </div>
    </section>
  );
};

gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const ref = useRef(null);
  const textRef = useRef<SVGTextPathElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      onUpdate: (self) => {
        gsap.to(textRef.current, {
          attr: {
            startOffset: Math.floor(self.progress * 300),
          },
        });
      },
    });
  });

  return (
    <div className="grid">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1440 442"
        width="100%"
        ref={ref}
        style={{
          overflow: "visible",
          gridArea: "1 / 1",
        }}
        className="marquee-bg-svg text-primary w-screen md:mb-0 mb-1.5"
      >
        <path
          stroke="currentColor"
          strokeWidth={160}
          className="text-primary"
          id="curve"
          d="M-71 371.6C126.3 260 593.5 65.8 934.5 80.8c313 13.8 497 136 572 200"
        ></path>

        <text width="100%" style={{ transform: "translate3d(0,0,0)" }}>
          <textPath
            style={{ transform: "translate3d(0,0,0)" }}
            alignmentBaseline="central"
            className="text-9xl fill-background uppercase font-bold tracking-tight"
            href="#curve"
            ref={textRef}
          >
            Siempre Klaros · Siempre Klaros · Siempre Klaros · Siempre Klaros
          </textPath>
        </text>
      </svg>
      <div
        style={{
          clipPath: "polygon(66% 10%, 100% 53%, 100% 100%, 0 100%, 0 79%)",
          gridArea: "1 / 1",
        }}
        className="bg-background-light relative -z-1"
      ></div>
    </div>
  );
};

const Paragraph = () => {
  const textRef = useRef(null);
  const copyRef = useRef(null);

  useGSAP(() => {
    const split = SplitText.create(textRef.current, { type: "lines" });

    gsap.fromTo(
      copyRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, delay: initialDelay },
    );
    const timeline = gsap.timeline({
      defaults: {
        duration: 0.5,
        delay: initialDelay,
        stagger: 0.05,
        ease: "power3.inOut",
      },
    });

    timeline.fromTo(
      split.lines,
      {
        x: 200,
        scale: 0.5,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
      },
    );
  });

  return (
    <div className="text-center grid gap-4">
      <p
        className="md:text-8xl text-[5.25rem] tracking-tighter font-semibold leading-[0.7]"
        ref={textRef}
      >
        <span className="text-primary-foreground">LIMPIEZA</span>
        <span className="text-primary">ENCUENTRA</span>
        <span className="text-primary">BIENESTAR</span>
      </p>

      <div ref={copyRef} className="w-full flex flex-col items-center">
        <p className="text-3xl tracking-tight text-primary leading-[0.9] max-w-sm">
          Combina limpieza de alta eficiencia con una fórmula de pH neutro,
          protegiendo tus manos y eliminando la suciedad extrema.
        </p>
      </div>
    </div>
  );
};

const Detergent = () => {
  const ref = useRef(null);
  const ellipseRef = useRef(null);
  const isMobile = useIsMobile();

  useGSAP(() => {
    const detergentTl = gsap.timeline();

    detergentTl
      .fromTo(
        ref.current,
        {
          y: 500,
        },
        {
          y: 0,
          ease: "power4.out",
          delay: initialDelay,
        },
      )
      .to(ref.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2,
      });

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power1.inOut",
        delay: initialDelay - 0.25,
      },
    });

    tl.fromTo(
      ellipseRef.current,
      { drawSVG: "50% 50%" },
      { drawSVG: "50% 150%", duration: 1 },
    );
  });

  return (
    <div className="relative w-full z-10">
      <svg
        viewBox="0 0 140 150"
        className="size-136 md:size-176 rotate-40 -ml-64 md:-ml-40 md:-mt-14 z-0 mt-14 overflow-visible"
      >
        <path
          ref={ellipseRef}
          d="M 75, 5 a 60,70 0 1,0 1,0 Z"
          fill="transparent"
          stroke="white"
          strokeWidth="5.5"
          id="ruta-elipse"
        />

        <Bubble
          metric="7"
          unit="pH"
          description="Neutro"
          x={isMobile ? 120 : 5}
          y={isMobile ? 85 : 45}
        />
        <Bubble
          metric="7"
          unit="pH"
          description="Neutro"
          x={isMobile ? 110 : 5}
          y={isMobile ? 110 : 45}
        />
        <Bubble
          metric="7"
          unit="pH"
          description="Neutro"
          x={isMobile ? 90 : 5}
          y={isMobile ? 125 : 45}
        />
      </svg>
      <div
        ref={ref}
        className="-mt-8 md:size-auto size-[124rem] -ml-42 md:-mt-24 md:ml-12 z-20 absolute left-0 top-0"
      >
        {/* TODO: cambiar esto a un <video />*/}
        <Image
          src="/output_animated.webp"
          unoptimized
          loading="eager"
          className="md:w-96"
          width="350"
          height="500"
          alt="Detergent"
        />
      </div>
    </div>
  );
};

const Bubble = ({
  x,
  y,
  description,
  metric,
  unit,
}: {
  x: string | number;
  y: string | number;
  description: string;
  metric: string;
  unit: string;
}) => {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      {
        y: 10,
        x: -5,
        rotation: "-80deg",
        scale: 0,
      },
      {
        scale: 1,
        x: 0,
        rotate: "-40deg",
        y: 0,
        delay: initialDelay,
        ease: "power4.out",
        duration: 0.5,
      },
    );
  });

  return (
    <foreignObject
      x={x}
      y={y}
      width="24"
      height="24"
      className="overflow-visible"
    >
      <div
        ref={ref}
        className="md:ring-0 ring-[0.1px] ring-primary/10 flex-col -space-y-[4px] size-8 md:size-6 rounded-full flex items-center justify-center text-sm text-white bg-secondary -rotate-40"
      >
        <span className="text-[12px] font-bold text-primary tracking-tighter">
          {metric}
          <span className="text-[6px] font-medium tracking-tighter">
            {unit}
          </span>
        </span>
        <span className="text-[5px] tracking-tighter font-medium text-primary">
          {description}
        </span>
      </div>
    </foreignObject>
  );
};
