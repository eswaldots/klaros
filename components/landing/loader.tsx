"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Spinner } from "../ui/spinner";

export const Loader = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        window.scrollTo(0, 0);
      },
    });

    tl.to(container.current, {
      opacity: 0,
      ease: "power2.inOut",
      duration: 0.5,
    });
  });

  return (
    <div
      ref={container}
      className="fixed left-0 top-0 w-screen h-screen bg-background z-999"
    >
      <Spinner className="absolute right-12 bottom-12 text-primary size-12" />
    </div>
  );
};
