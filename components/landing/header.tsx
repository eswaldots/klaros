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
import { useIsMobile } from "@/hooks/use-is-mobile";
import {
  HugeiconsFreeIcons,
  MenuIcon,
  X,
  XlsIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useLenis } from "lenis/react";

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

  const isMobile = useIsMobile();

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
      {isMobile ? (
        <Menu product={product as any} />
      ) : (
        <SocialButtons
          className={cn(
            product
              ? `${product.colors.secondary} ${product.colors.foreground}`
              : "bg-orange-100",
          )}
        />
      )}

      {/* @ts-ignore */}
      {!isMobile && <LinkButtons product={product} />}

      <div className="flex items-center gap-1">
        <Link href="/about-us">
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

const Menu = ({ product }: { product?: IProduct }) => {
  const button = useRef<HTMLButtonElement>(null);
  const socialContainer = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const isOpen = useRef(false);
  const linksContainer = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const lenis = useLenis();
  const pathname = usePathname();

  useGSAP(() => {
    const links = gsap.utils.toArray(
      // @ts-ignore
      linksContainer.current?.children as Element[],
    );

    gsap.set(menu.current, { height: "0vh" });
    gsap.set(links, { y: 80, opacity: 0 });
    gsap.set(socialContainer.current, { y: 40, opacity: 0 });
    gsap.set(button.current, { scale: 0.5, opacity: 0 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(menu.current, {
        height: "100vh",
        duration: 0.8,
        ease: "power4.inOut",
      })
      .to(
        button.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.5)",
        },
        "-=0.3",
      )
      .to(
        links,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .to(
        socialContainer.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.6",
      );
  });

  const { contextSafe } = useGSAP(() => {});

  const toggle = contextSafe(() => {
    if (!isOpen.current) {
      lenis?.stop();
      isOpen.current = true;
      tl.current?.play();
    } else {
      lenis?.start();
      isOpen.current = false;
      tl.current?.reverse();
    }
  });

  useEffect(() => {
    if (isOpen.current) {
      lenis?.start();
      isOpen.current = false;
      tl.current?.reverse();
    }
  }, [pathname]);

  return (
    <section>
      <Button
        size="lg"
        className={cn(
          product
            ? `${product.colors.secondary} ${product.colors.foreground}`
            : "bg-orange-100 text-primary",
        )}
        onClick={toggle}
      >
        <HugeiconsIcon icon={MenuIcon} strokeWidth={3} />
      </Button>

      <div
        className={cn(
          "fixed top-0 left-0 max-h-screen w-screen h-0 z-[999] overflow-hidden",
          product
            ? `${product.colors.background}`
            : "bg-background-light text-primary",
        )}
        ref={menu}
      >
        <Button
          size="lg"
          ref={button}
          className={cn(
            "absolute left-6 top-9 z-50",
            product
              ? `${product.colors.secondary} ${product.colors.foreground}`
              : "bg-orange-100 text-primary",
          )}
          onClick={toggle}
        >
          <HugeiconsIcon icon={X} strokeWidth={3} />
        </Button>

        <div
          ref={linksContainer}
          className={cn(
            "mt-32 mx-6 flex flex-col gap-1",
            product ? product.colors.foreground : "text-primary",
          )}
        >
          <Link href="/">
            <h3
              className={cn(
                "text-6xl font-medium tracking-tight transition-opacity duration-300",
              )}
            >
              Inicio
            </h3>
          </Link>
          <Link href="/products">
            <h3
              className={cn(
                "text-6xl font-medium tracking-tight transition-opacity duration-300",
              )}
            >
              Productos
            </h3>
          </Link>
          <Link href="/about-us">
            <h3
              className={cn(
                "text-6xl font-medium tracking-tight transition-opacity duration-300",
              )}
            >
              Conoce al equipo
            </h3>
          </Link>
        </div>

        <div
          ref={socialContainer}
          className="absolute bottom-8 left-0 px-6 w-full"
        >
          <SocialButtons
            className={cn(
              "bg-white",
              product
                ? `${product.colors.secondary} ${product.colors.foreground}`
                : "bg-background-light text-primary",
            )}
          />

          <div
            className={cn(
              "mt-8 flex items-center justify-between w-full",
              product ? product.colors.foreground : "text-primary",
            )}
          >
            <span className="tracking-tight font-medium text-xl">Klaros.</span>

            <div>
              <Link
                href="https://aaronavila.is-a.dev"
                target="_blank"
                className="text-sm"
              >
                Sitio web hecho por Aaron Avila
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
