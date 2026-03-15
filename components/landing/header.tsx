"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { AnimatedButton } from "../animated/animated-button";
import Link from "next/link";
import { SocialButtons } from "./components/social-buttons";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const initialDelay = "klaros".length * 0.35 + 1;

export const Header = () => {
  const headerRef = useRef(null);

  useGSAP(() => {
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
      className="fixed top-0 left-0 px-4 md:px-10 py-8 flex items-center justify-between w-screen md:max-w-[calc(100vw-12px)] z-999"
    >
      <SocialButtons className="bg-orange-100" />

      <div className="flex items-center gap-1">
        <Link href="about-us">
          <AnimatedButton variant="secondary" buttonClassName="bg-orange-100">
            Conoce al equipo
          </AnimatedButton>
        </Link>
      </div>
    </header>
  );
};
