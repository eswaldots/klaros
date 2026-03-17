"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ComponentProps, useEffect, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { AnimatedButton } from "../animated/animated-button";
import { Link } from "next-view-transitions";
import { SocialButtons } from "./components/social-buttons";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { IProduct, PRODUCTS } from "@/lib/consts";
import { Button } from "../ui/button";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const initialDelay = "klaros".length * 0.35 + 1;

const LinkButtons = ({ product }: { product?: IProduct }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-1/2 space-x-3 md:block hidden">
      <LinkButton href="/" size="lg" product={product}>
        Inicio
      </LinkButton>
      <LinkButton href="/products" size="lg" product={product}>
        Productos
      </LinkButton>
    </div>
  );
};

const LinkButton = ({
  href,
  product,
  ...props
}: ComponentProps<typeof Button> & { href: string; product?: IProduct }) => {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    return pathname === href;
  }, [pathname]);

  return (
    <Link href={href}>
      <Button
        {...props}
        className={cn(
          "border-none px-2 backdrop-blur-lg cursor-pointer text-xl tracking-tight bg-primary/20 py-0.5 font-medium h-fit",
          product && `bg-black/5 ${product.colors.linkButtons} text-white`,
          product && isActive && pathname === "/products"
            ? "bg-black text-white"
            : `${product?.colors.linkButtons} text-whit text-white`,
          isActive && !product && "bg-white/70 text-primary",
        )}
      />
    </Link>
  );
};

export const Header = () => {
  const { slug } = useParams();

  const headerRef = useRef(null);
  const pathname = usePathname();

  // TODO: maybe is good to move all this logic to a server component and pass the product as a prop
  const product = useMemo(() => {
    if (slug) {
      const product: IProduct | undefined = PRODUCTS.find(
        (p) => slug === p.slug,
      );

      if (product) {
        return product;
      }
    } else if (pathname === "/products") {
      // TODO: this should behave like this, but, we
      return {
        id: 2,
        name: "Desinfectante",
        slug: "desinfectante",
        colors: {
          background: "bg-neutral-50",
          secondary: "bg-neutral-100",
          foreground: "text-neutral-900",
          bgForeground: "bg-neutral-900",
          linkButtons: "bg-neutral-900/20",
          fgBackground: "text-neutral-100",
          border: "border-neutral-300",
        },
        preview: "/desinfectante.png",
        description:
          "A disinfectant is a chemical substance or compound used to inactivate or destroy microorganisms on inert surfaces.[1] Disinfection does not necessarily kill all microorganisms, especially resistant bacterial spores;",
        images: [
          {
            type: "video",
            src: "/desinfectante.mp4",
          },
        ],
      };
    }
  }, [pathname]);

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

      {/* @ts-ignore */}
      <LinkButtons product={product} />

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
