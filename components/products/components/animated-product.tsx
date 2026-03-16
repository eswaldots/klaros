"use client";

import { Button } from "@/components/ui/button";
import { IProduct } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Observer } from "gsap/Observer";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

gsap.registerPlugin(Observer);

const AnimatedProduct = ({ ...product }: IProduct) => {
  const container = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const text = useRef<HTMLSpanElement>(null);
  const image = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    Observer.create({
      target: container.current,
      onHover: () => {
        gsap.to(button.current, {
          paddingLeft: "6rem",
          ease: "power2.inOut",
          duration: 0.05,
        });

        gsap.fromTo(
          image.current,
          {
            bottom: "calc(var(--spacing) * -48)",
          },
          {
            bottom: "calc(var(--spacing) * -42)",
            ease: "power2.inOut",
            duration: 0.5,
          },
        );

        gsap.to(text.current, {
          opacity: 1,
          ease: "power2.inOut",
          duration: 0.005,
          delay: 0.05,
        });
      },
      onHoverEnd: () => {
        gsap.to(text.current, {
          opacity: 0,
          ease: "power4.inOut",
          duration: 0.005,
          delay: 0.05,
        });

        gsap.fromTo(
          image.current,
          {
            bottom: "calc(var(--spacing) * -42)",
          },
          {
            bottom: "calc(var(--spacing) * -48)",
            ease: "power2.inOut",
            duration: 0.5,
          },
        );

        gsap.to(button.current, {
          paddingLeft: "0.5rem",
          ease: "power4.inOut",
          duration: 0.05,
        });
      },
    });

    gsap.fromTo(
      container.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "power2.inOut",
        duration: 0.5,
      },
    );
  });

  return (
    <Link href={`/products/${product.slug}`} key={product.slug}>
      <div
        ref={container}
        className={cn(
          "flex flex-col justify-between w-full h-76 rounded-4xl p-6 cursor-pointer relative overflow-hidden",
          product.colors.background,
        )}
      >
        <h3
          className={cn(
            "text-4xl text-primary font-medium tracking-tight",
            product.colors.foreground,
          )}
        >
          {product.name}
        </h3>

        <Image
          src={product.preview}
          alt={product.name}
          ref={image}
          className="w-76 absolute -bottom-48 -left-16"
          width={2000}
          height={2000}
        />

        <div className="w-full flex justify-end">
          <Button
            ref={button}
            className={cn(
              "w-fit overflow-hidden h-fit px-2 py-2 cursor-pointer relative",
              product.colors.bgForeground,
            )}
          >
            <span
              ref={text}
              className="font-medium opacity-0 tracking-tight text-xl absolute left-2"
            >
              Ver producto
            </span>
            <HugeiconsIcon icon={ArrowRight02Icon} className="size-6" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export { AnimatedProduct };
