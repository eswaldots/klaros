"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { AnimatedButton } from "../animated/animated-button";
import Link from "next/link";
import { SocialButtons } from "./components/social-buttons";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { IProduct, PRODUCTS } from "@/lib/consts";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const initialDelay = "klaros".length * 0.35 + 1;

export const Header = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<null | IProduct>(null);

  const headerRef = useRef(null);
  const pathname = usePathname();

  // TODO: maybe is good to move all this logic to a server component and pass the product as a prop
  useEffect(() => {
    if (slug) {
      const product: IProduct | undefined = PRODUCTS.find(
        (p) => slug === p.slug,
      );

      if (product) {
        setProduct(product);
      }
    }
  });

  useGSAP(() => {
    // only animate if the user is on the home page
    if (pathname !== "/") return;

    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.5, delay: initialDelay },
    );
  });

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 px-4 md:px-10 py-8 flex items-center justify-between w-screen md:max-w-[calc(100vw-12px)] z-999",
      )}
    >
      <SocialButtons
        className={cn(
          product
            ? `${product.colors.secondary} ${product.colors.foreground}`
            : "bg-orange-100",
        )}
      />

      <div className="flex items-center gap-1">
        <Link href="about-us">
          <AnimatedButton
            variant="secondary"
            buttonClassName={cn(
              product
                ? `${product.colors.secondary} ${product.colors.foreground}`
                : "bg-orange-100",
            )}
          >
            Conoce al equipo
          </AnimatedButton>
        </Link>
      </div>
    </header>
  );
};
