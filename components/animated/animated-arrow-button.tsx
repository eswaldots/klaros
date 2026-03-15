"use client";

import { useGSAP } from "@gsap/react";
import { ComponentProps, useRef } from "react";
import { Observer } from "gsap/Observer";
import gsap from "gsap";
import { Button } from "../ui/button";

type Orientation = "left" | "right";

interface AnimatedArrowButtonProps {
  orientation: Orientation;
}

const AnimatedArrowButton = ({
  children,
  orientation,
  ...props
}: ComponentProps<"button"> & AnimatedArrowButtonProps) => {
  const button = useRef(null);

  useGSAP(() => {
    Observer.create({
      target: button.current,
      onHover: () => {
        gsap.to(button.current, {
          scale: 0.9,
          x: `${orientation === "left" ? "-" : ""}4`,
          rotate: `${orientation === "left" ? "-" : ""}4deg`,
          duration: 0.05,
          ease: "bounce.inOut",
        });
      },
      onHoverEnd: () => {
        gsap.to(button.current, {
          scale: 1,
          rotate: "0deg",
          x: 0,
          duration: 0.05,
          ease: "bounce.inOut",
        });
      },
    });
  });

  return (
    <Button
      {...props}
      size="icon-lg"
      ref={button}
      variant="secondary"
      className="size-fit p-3.5 border-none shadow-none cursor-pointer"
    >
      {children}
    </Button>
  );
};

export { AnimatedArrowButton };
