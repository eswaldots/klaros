"use client";

import { Button } from "@/components/ui/button";
import { IProduct } from "@/lib/consts";
import { cn } from "@/lib/utils";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Observer } from "gsap/Observer";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(Observer);

const AnimatedProduct = ({ ...product }: IProduct) => {
  const container = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const text = useRef<HTMLSpanElement>(null);
  const image = useRef<HTMLImageElement>(null);

  return (
    <Link href={`/products/${product.slug}`} key={product.slug}>
      <div
        ref={container}
        className={cn(
          "flex flex-col justify-end w-full h-76 rounded-4xl p-6 cursor-pointer relative overflow-hidden",
          product.colors.background,
        )}
      >
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          playsInline
          muted
        >
          <source src={product.video} />
        </video>

        <div className="w-full flex justify-between">
          <h3
            className={cn(
              "text-4xl text-white font-medium tracking-tight z-50 drop-shadow-2xl",
            )}
          >
            {product.name}
          </h3>
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
