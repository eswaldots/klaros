// @ts-nocheck

"use client";

import { AnimatedArrowButton } from "@/components/animated/animated-arrow-button";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  StarIcon,
  CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface ITestimonial {
  title: string;
  description: string;
  from: string;
}

const testimonials = [
  {
    title: "1",
    description: "Very tasty",
    from: "Carolin S.",
  },
  {
    title: "2",
    description: "Very tasty",
    from: "Carolin S.",
  },
  {
    title: "Highly recommended",
    description: "Very tasty",
    from: "Carolin S.",
  },
  {
    title: "4",
    description: "Very tasty",
    from: "Carolin S.",
  },
  {
    title: "5",
    description: "Very tasty",
    from: "Carolin S.",
  },
  {
    title: "6",
    description: "Very tasty",
    from: "Carolin S.",
  },
];

function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft - 17,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent"),
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0,
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond,
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}

const TestimonialList = () => {
  const isMobile = useIsMobile();

  const testimonialsList = useRef<HTMLDivElement>(null);
  const [focusedTestimonial, setFocusedTestimonial] = useState(1);
  const leftButtonRef = useRef<HTMLDivElement>(null);
  const rightButtonRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    (context, contextSafe) => {
      let loop = horizontalLoop(testimonialsList.current?.children, {
        repeat: -1,
        paused: true,
      });

      const carousel = loop as any;

      const onLeftTouch = contextSafe(() => {
        setFocusedTestimonial((prev) =>
          prev - 1 === -1 ? testimonials.length - 1 : prev - 1,
        );

        carousel.previous({
          duration: 0.6,
          ease: "power2.out",
        });
      });

      const onRightTouch = contextSafe(() => {
        setFocusedTestimonial((prev) =>
          prev + 1 === testimonials.length ? 0 : prev + 1,
        );

        carousel.next({
          duration: 0.6,
          ease: "power2.out",
        });
      });

      leftButtonRef.current?.addEventListener("click", onLeftTouch);
      rightButtonRef.current?.addEventListener("click", onRightTouch);

      return () => {
        leftButtonRef.current?.removeEventListener("click", onLeftTouch);
        rightButtonRef.current?.removeEventListener("click", onRightTouch);
      };
    },
    { scope: container },
  );

  const adjustedIndex = isMobile
    ? Math.max(0, focusedTestimonial - 1)
    : focusedTestimonial;

  return (
    <div
      ref={container}
      className="flex flex-col gap-6 z-50 items-center overflow-x-visible"
    >
      <div className="flex flex-col items-center gap-4">
        <h3 className="max-w-sm leading-[0.7] text-5xl text-white text-center font-semibold tracking-tighter uppercase">
          No nos creas a nosotros
        </h3>
        <div className="space-x-1 flex items-center">
          <div ref={leftButtonRef}>
            <AnimatedArrowButton orientation="left">
              <HugeiconsIcon icon={ArrowLeft02Icon} className="size-5" />
            </AnimatedArrowButton>
          </div>
          <div ref={rightButtonRef}>
            <AnimatedArrowButton orientation="right">
              <HugeiconsIcon icon={ArrowRight02Icon} className="size-5" />
            </AnimatedArrowButton>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-visible">
        <div
          ref={testimonialsList}
          className="flex pb-12 max-w-screen w-full whitespace-nowrap"
        >
          {testimonials.map((t, i) => (
            <Testimonial
              isFocus={
                isMobile
                  ? i === focusedTestimonial - 1
                  : i === focusedTestimonial
              }
              index={i}
              key={`${t.title}-${i}`}
              {...t}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonial = ({
  isFocus,
  index,
  ...testimonial
}: ITestimonial & { isFocus?: boolean; index: number }) => {
  return (
    <div
      className={cn(
        "flex flex-none w-[95vw] md:w-[32vw] mx-[.625em] flex-col justify-between items-start text-white h-64 border border-white rounded-sm p-8",
        isFocus && "bg-white text-primary",
      )}
    >
      <div className={cn("flex items-center gap-1 text-primary")}>
        <HugeiconsIcon icon={StarIcon} className="size-3 fill-primary" />
        <HugeiconsIcon icon={StarIcon} className="size-3 fill-primary" />
        <HugeiconsIcon icon={StarIcon} className="size-3 fill-primary" />
        <HugeiconsIcon icon={StarIcon} className="size-3 fill-primary" />
        <HugeiconsIcon icon={StarIcon} className="size-3 fill-primary" />
      </div>
      <div>
        <h4 className="tracking-tight font-medium text-3xl">
          {index}. {testimonial.title}
        </h4>
        <p className="tracking-tight text-2xl">{testimonial.description}</p>
      </div>

      <div className="w-full grid gap-4">
        <hr className="w-full" />
        <div className="flex items-center justify-between">
          <p className="font-medium tracking-tight text-2xl">
            {testimonial.from}
          </p>
          <span className="flex items-center text-lg gap-1 tracking-tight">
            <HugeiconsIcon
              icon={CheckmarkBadge01Icon}
              className={cn(
                "size-6 fill-white text-primary",
                isFocus && "fill-primary text-white",
              )}
            />
            Verified
          </span>
        </div>
      </div>
    </div>
  );
};

export { TestimonialList };
