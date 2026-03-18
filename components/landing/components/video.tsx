"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Photo = ({
  className,
  src,
  videoClassName,
}: {
  className?: string;
  src: string;
  videoClassName?: string;
}) => {
  const magnetic = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!magnetic.current) return;

    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const mouseMove = (e: MouseEvent) => {
      if (!magnetic.current) return;

      const { clientX, clientY } = e;

      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();

      const x = clientX - (left + width / 2);

      const y = clientY - (top + height / 2);

      xTo(x);

      yTo(y);
    };

    const mouseLeave = () => {
      gsap.to(magnetic.current, { x: 0, duration: 1 });

      gsap.to(magnetic.current, { y: 0, duration: 1 });

      xTo(0);

      yTo(0);
    };

    magnetic.current.addEventListener("mousemove", mouseMove);

    magnetic.current.addEventListener("mouseleave", mouseLeave);
  });

  return (
    <div
      ref={magnetic}
      className={cn(
        "rounded-sm bg-white h-96 md:h-116 w-64 md:w-80 p-3",
        className,
      )}
    >
      <div className="text-white bg-secondary size-full relative rounded-xs">
        <video
          playsInline
          muted
          loop
          autoPlay
          className={cn(
            "absolute inset-0 size-full object-cover rounded-xs subpixel-antialiased",
            videoClassName,
          )}
        >
          <source type="video/webm" src={src} />
        </video>
      </div>
    </div>
  );
};

export { Photo as Video };
