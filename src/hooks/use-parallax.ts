"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type RefObject, useLayoutEffect } from "react";
import { scheduleScrollTriggerSetup } from "@/lib/schedule-scroll-trigger";

gsap.registerPlugin(ScrollTrigger);

type UseParallaxOptions = {
  triggerRef?: RefObject<HTMLElement | null>;
  yPercent?: number;
  scrub?: number | boolean;
  start?: string;
  end?: string;
  disabled?: boolean;
};

export function useParallax(
  targetRef: RefObject<HTMLElement | null>,
  {
    triggerRef,
    yPercent = 18,
    scrub = true,
    start = "top bottom",
    end = "bottom top",
    disabled = false,
  }: UseParallaxOptions = {},
) {
  useLayoutEffect(() => {
    if (disabled) return;

    return scheduleScrollTriggerSetup(() => {
      const target = targetRef.current;
      const trigger = triggerRef?.current ?? targetRef.current;

      if (!target?.isConnected || !trigger?.isConnected) return null;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reducedMotion) return null;

      return gsap.context(() => {
        gsap.fromTo(
          target,
          { yPercent: -yPercent / 2 },
          {
            yPercent: yPercent / 2,
            ease: "none",
            scrollTrigger: {
              trigger,
              start,
              end,
              scrub,
              invalidateOnRefresh: true,
            },
          },
        );
      }, trigger);
    });
  }, [targetRef, triggerRef, yPercent, scrub, start, end, disabled]);
}
