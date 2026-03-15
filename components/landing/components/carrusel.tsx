"use client";

import { AnimatedButton } from "@/components/animated/animated-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Carrusel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const gallery = galleryRef.current;
      const container = containerRef.current;

      if (!gallery || !container) return;

      const parentSection = container.closest("section");

      const getScrollAmount = () => {
        return -(gallery.scrollWidth - window.innerWidth);
      };

      gsap.to(gallery, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: parentSection,
          pin: true,
          start: "center center",
          end: () => `+=${gallery.scrollWidth}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full">
      <div
        ref={galleryRef}
        className="flex items-end gap-3 h-full flex-nowrap will-change-transform relative z-40 md:pl-[40vw] pl-[100vw]"
      >
        <div className="box-content shrink-0 w-2xl h-[80vh] rounded-[4rem] bg-secondary"></div>
        <div className="box-content shrink-0 w-2xl h-[80vh] rounded-[4rem] bg-secondary"></div>
        <div className="box-content shrink-0 w-2xl h-[80vh] rounded-[4rem] bg-secondary"></div>
        <div className="pr-64">
          <div className="p-12 box-content shrink-0 w-sm h-[40vh] rounded-[4rem] bg-primary text-4xl font-medium text-background tracking-tight flex flex-col items-start justify-between">
            Encuentra mas productos
            <div className="ml-auto">
              <AnimatedButton variant="secondary">Descubrir</AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Carrusel };
