"use client";

import { AnimatedButton } from "@/components/animated/animated-button";
import { PRODUCTS } from "@/lib/consts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "next-view-transitions";
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

      const scrollTween = gsap.to(gallery, {
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

      const items = gsap.utils.toArray(gallery.children);

      items.forEach((item: any, i) => {
        const overlay = item.querySelector(`#overlay-${i}`);

        if (overlay) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              containerAnimation: scrollTween,
              start: "center 80%",
              end: "center 20%",
              scrub: true,
            },
          });

          tl.to(overlay, { opacity: 0, duration: 1, ease: "power1.inOut" }).to(
            overlay,
            { opacity: 1, duration: 1, ease: "power1.inOut" },
          );
        }
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
        {PRODUCTS.map((product, i) => {
          return (
            <Link href={`/products/${product.slug}`} key={product.id}>
              <div className="box-content shrink-0 w-3xl h-[50vh] md:h-[80vh] rounded-[4rem] bg-secondary relative overflow-hidden group">
                <h2 className="text-6xl absolute z-20 bottom-12 text-white left-12 font-medium tracking-tight">
                  {product.name}
                </h2>
                <div
                  id={`overlay-${i}`}
                  className="z-10 absolute inset-0 md:block hidden backdrop-blur-2xl rounded-[4rem] bg-black/10"
                />

                <video
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="absolute inset-0 size-full object-cover rounded-[4rem]"
                >
                  <source src={product.social} />
                </video>
              </div>
            </Link>
          );
        })}
        <div className="pr-64 cursor-pointer">
          <Link
            href="/products"
            className="p-12 box-content shrink-0 w-sm h-[40vh] rounded-[4rem] bg-primary text-4xl font-medium text-background tracking-tight flex flex-col items-start justify-between"
          >
            Encuentra mas productos
            <div className="ml-auto">
              <AnimatedButton variant="secondary">Descubrir</AnimatedButton>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Carrusel };
