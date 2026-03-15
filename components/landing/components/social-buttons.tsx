"use client";

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import {
  Instagram,
  WhatsappIcon,
  TiktokIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const AnimatedIcon = ({
  icon,
  className,
}: {
  icon: IconSvgElement;
  className?: string;
}) => {
  const ref = useRef(null);

  useGSAP(() => {
    if (ref.current) {
      Observer.create({
        target: ref.current,
        type: "pointer",
        onHover: () => {
          gsap.to(ref.current, {
            x: -6,
            y: -6,
            rotate: "-5deg",
            duration: 0.15,
            ease: "bounce.out",
          });
        },
        onHoverEnd: () => {
          gsap.to(ref.current, {
            x: 0,
            y: 0,
            rotate: "0deg",
            duration: 0.15,
            ease: "bounce.out",
          });
        },
      });
    }
  });

  return (
    <Button
      ref={ref}
      size="icon"
      className={cn("w-fit h-fit p-2 cursor-pointer", className)}
      variant="secondary"
    >
      <HugeiconsIcon
        icon={icon}
        className="size-5 md:size-6 text-primary"
        strokeWidth={1.7}
      />
    </Button>
  );
};

export const SocialButtons = ({ className }: { className?: string }) => {
  return (
    <div className="flex items-center gap-0.5 md:gap-1">
      <AnimatedIcon icon={Instagram} className={className} />
      <AnimatedIcon icon={WhatsappIcon} className={className} />
      <AnimatedIcon icon={TiktokIcon} className={className} />
    </div>
  );
};
