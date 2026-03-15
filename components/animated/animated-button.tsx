"use client";

import { ReactNode, useRef } from "react";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight } from "@hugeicons/core-free-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Observer);

const AnimatedButton = ({
  children,
  className,
  buttonClassName,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  buttonClassName?: string;
  variant?: "secondary" | "default";
}) => {
  const container = useRef(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const secondButtonRef = useRef<HTMLButtonElement>(null);

  const properties = {
    ease: "elastic.out(2,0.1)",
    duration: 0.1,
  };

  useGSAP(
    () => {
      Observer.create({
        target: "#container",
        type: "pointer",
        onHover: () => {
          if (!buttonRef.current) return;

          gsap.to(buttonRef.current, {
            x: -32,
            y: -4,
            rotate: "-6deg",
            ...properties,
            ease: "bonce.out",
          });

          const timeline = gsap.timeline();

          timeline
            .to(secondButtonRef.current, {
              scale: 0,
              ...properties,
              duration: properties.duration / 3,
              ease: "bonce.out",
            })
            .to(secondButtonRef.current, {
              x: buttonRef.current.offsetWidth - 1,
              scale: 0,
              ...properties,
              duration: properties.duration / 3,
            })
            .to(secondButtonRef.current, {
              scale: 1,
              ...properties,
              duration: properties.duration / 3,
            });
        },
        onHoverEnd: () => {
          gsap.to(buttonRef.current, {
            x: 0,
            rotate: "0deg",
            y: 0,
            ...properties,
            ease: "bonce.out",
          });

          gsap.to(secondButtonRef.current, {
            x: 0,
            ...properties,
            ease: "bonce.out",
          });
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <div
        className={cn(
          "flex -space-x-0.5 items-center cursor-pointer",
          className,
        )}
        id="container"
      >
        <Button
          ref={secondButtonRef}
          size="icon"
          variant={variant}
          className={buttonClassName}
        >
          <HugeiconsIcon
            icon={ArrowUpRight}
            className={cn("md:size-5")}
            strokeWidth={2}
          />
        </Button>
        <Button
          ref={buttonRef}
          variant={variant}
          className={cn(
            "py-0.5 h-fit w-fit font-outfit text-3xl font-medium px-3 tracking-tight cursor-pointer",
            buttonClassName,
          )}
        >
          {children}
        </Button>
      </div>
    </div>
  );
};

export { AnimatedButton };
