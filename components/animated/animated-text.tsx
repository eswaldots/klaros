"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

export const AnimatedText = ({
  children,
  className,
  direction = "up",
  delay,
}: {
  direction?: "up" | "down";
  children: string;
  delay?: number;
  className?: string;
}) => {
  const container = useRef(null);
  const headline = useRef(null);

  useGSAP(
    () => {
      const split = SplitText.create("h1", { type: "chars" });

      gsap.from(split.chars, {
        y: direction === "up" ? 200 : -200,
        duration: 1.5,
        ease: "power4.out",
        delay: delay,
        stagger: 0.05,
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="overflow-y-hidden px-0.5 leading-none py-0">
      <h1
        ref={headline}
        id="chars"
        className={cn(className, "leading-none overflow-y-clip my-0")}
      >
        {children}
      </h1>
    </div>
  );
};
