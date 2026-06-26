"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { scheduleScrollTriggerSetup } from "@/lib/schedule-scroll-trigger";
import { type RefObject, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const REVEAL_SELECTOR =
  "[data-reveal-fade], [data-reveal-split], [data-reveal-item]";

type SectionRevealOptions = {
  start?: string;
  staggerStart?: string;
  itemStagger?: number;
  lineStagger?: number;
  disabled?: boolean;
};

function isInsideGroup(el: Element) {
  return !!el.closest("[data-reveal-group]");
}

function animateSelf(
  el: HTMLElement,
  start: string,
  lineStagger: number,
  splits: SplitText[],
) {
  if (el.matches("[data-reveal-fade]")) {
    gsap.from(el, {
      y: 28,
      opacity: 0,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
        invalidateOnRefresh: true,
      },
    });
    return;
  }

  if (el.matches("[data-reveal-split]")) {
    const split = SplitText.create(el, {
      type: "lines",
      mask: "lines",
      linesClass: "reveal-line",
    });
    splits.push(split);

    gsap.from(split.lines, {
      yPercent: 110,
      opacity: 0,
      duration: 0.7,
      stagger: lineStagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
        invalidateOnRefresh: true,
      },
    });
    return;
  }

  if (el.matches("[data-reveal-item]")) {
    gsap.from(el, {
      y: 44,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
        invalidateOnRefresh: true,
      },
    });
  }
}

function animateStaggerGroup(
  group: HTMLElement,
  staggerStart: string,
  itemStagger: number,
  lineStagger: number,
  splits: SplitText[],
) {
  const children = gsap.utils
    .toArray<HTMLElement>(group.querySelectorAll(REVEAL_SELECTOR))
    .filter((el) => el.closest("[data-reveal-group]") === group);

  if (!children.length) return;

  const splitEntries: { el: HTMLElement; split: SplitText }[] = [];

  children.forEach((el) => {
    if (el.matches("[data-reveal-split]")) {
      splitEntries.push({
        el,
        split: SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "reveal-line",
        }),
      });
      splits.push(splitEntries[splitEntries.length - 1].split);
    }
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: group,
      start: staggerStart,
      once: true,
      invalidateOnRefresh: true,
    },
  });

  let position = 0;

  children.forEach((el, index) => {
    if (el.matches("[data-reveal-fade]")) {
      tl.from(
        el,
        {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
        },
        index === 0 ? position : `-=${0.75 - itemStagger}`,
      );
      return;
    }

    if (el.matches("[data-reveal-split]")) {
      const entry = splitEntries.find((item) => item.el === el);
      if (!entry) return;

      tl.from(
        entry.split.lines,
        {
          yPercent: 110,
          opacity: 0,
          duration: 0.7,
          stagger: lineStagger,
          ease: "power3.out",
        },
        index === 0 ? position : "-=0.45",
      );
      return;
    }

    if (el.matches("[data-reveal-item]")) {
      tl.from(
        el,
        {
          y: 44,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        index === 0 ? position : `-=${0.7 - itemStagger}`,
      );
    }
  });
}

export function useSectionReveal(
  scopeRef: RefObject<HTMLElement | null>,
  {
    start = "top 95%",
    staggerStart = "top 95%",
    itemStagger = 0.1,
    lineStagger = 0.07,
    disabled = false,
  }: SectionRevealOptions = {},
) {
  useLayoutEffect(() => {
    if (disabled) return;

    return scheduleScrollTriggerSetup(() => {
      const scope = scopeRef.current;
      if (!scope?.isConnected) return null;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reducedMotion) return null;

      return gsap.context(() => {
        const splits: SplitText[] = [];

        const groups: HTMLElement[] = scope.matches("[data-reveal-group]")
          ? [scope]
          : [];
        groups.push(
          ...scope.querySelectorAll<HTMLElement>("[data-reveal-group]"),
        );
        const uniqueGroups = [...new Set(groups)];

        uniqueGroups.forEach((group) => {
          animateStaggerGroup(
            group,
            staggerStart,
            itemStagger,
            lineStagger,
            splits,
          );
        });

        const selfEls = gsap.utils
          .toArray<HTMLElement>(scope.querySelectorAll(REVEAL_SELECTOR))
          .filter((el) => !isInsideGroup(el));

        selfEls.forEach((el) => {
          animateSelf(el, start, lineStagger, splits);
        });
      }, scope);
    });
  }, [scopeRef, start, staggerStart, itemStagger, lineStagger, disabled]);
}
