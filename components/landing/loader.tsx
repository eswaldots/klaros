"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Loader = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(container.current, {
      opacity: 0,
    });
  });

  return (
    <div ref={container} className="fixed left-0 top-0 w-screen h-screen">
      <h1>cargando</h1>
    </div>
  );
};
