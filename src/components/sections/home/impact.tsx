"use client";

import Badge from "@/components/badge";
import { RevealFade, RevealGroup, RevealItem, RevealSplit } from "@/components/scroll-reveal";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { scheduleScrollTriggerSetup } from "@/lib/schedule-scroll-trigger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

const statNumberClass =
  "from-brand-darker to-brand-darker/10 bg-linear-to-b bg-clip-text text-[2rem] leading-[1.2] text-transparent md:text-[4rem]";

function AnimatedStat({
  to,
  className,
  suffix,
}: {
  to: number;
  className?: string;
  suffix: ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const numberEl = numberRef.current;
    if (!root || !numberEl) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      numberEl.textContent = String(to);
      return;
    }

    return scheduleScrollTriggerSetup(() => {
      if (!root.isConnected || !numberEl.isConnected) return null;

      numberEl.textContent = "0";

      return gsap.context(() => {
        const proxy = { val: 0 };

        gsap.to(proxy, {
          val: to,
          duration: 1.2,
          ease: "power2.out",
          snap: { val: 1 },
          scrollTrigger: {
            trigger: root,
            start: "top 85%",
            once: true,
            invalidateOnRefresh: true,
          },
          onUpdate: () => {
            numberEl.textContent = String(Math.round(proxy.val));
          },
          onComplete: () => {
            numberEl.textContent = String(to);
          },
        });
      }, root);
    });
  }, [to]);

  return (
    <div ref={rootRef} className={className}>
      <span ref={numberRef}>0</span>
      {suffix}
    </div>
  );
}

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);

  useSectionReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="bg-background relative z-10 w-full overflow-hidden py-30"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex h-full w-full flex-col items-center justify-center gap-20">
          <RevealGroup className="flex flex-col items-center justify-center gap-2 text-center">
            <RevealItem>
              <Badge text="Measured Impact" />
            </RevealItem>
            <RevealFade
              as="h2"
              className="from-brand-darker to-brand-darker/10 max-w-[16em] bg-linear-to-b bg-clip-text text-[2rem] leading-[1.2] text-transparent md:text-5xl"
            >
              Performance proven through efficiency, not excess.
            </RevealFade>
            <RevealSplit className="text-foreground/70 mt-4 max-w-[36em] text-sm leading-[1.4]">
              From data usage to model updates, every layer is designed to
              sustain performance over time — without increasing environmental
              cost.
            </RevealSplit>
          </RevealGroup>
          <div className="grid w-full grid-cols-3 grid-rows-3 gap-5 max-md:grid-cols-2 max-md:gap-4">
            <RevealItem className="font-heading relative flex min-h-60 flex-col justify-between gap-4 rounded-2xl border border-black/2 bg-black/2 p-4 md:min-h-64 md:p-5">
              <AnimatedStat
                to={38}
                className={statNumberClass}
                suffix={<span className="text-brand-dark">%</span>}
              />
              <div className="flex flex-col gap-3">
                <h3 className="font-body text-base leading-[1.2] md:text-xl lg:text-2xl">
                  Energy reduction per inference
                </h3>
                <p className="text-foreground/70 text-sm leading-[1.2]">
                  Compared to conventional large-scale models.
                </p>
              </div>
            </RevealItem>
            <RevealItem
              style={{
                background:
                  "linear-gradient(154deg, #C2ED3F -125.2%, #000 83.49%)",
              }}
              className="font-heading relative flex min-h-60 flex-col gap-6 overflow-hidden rounded-2xl bg-black/2 p-4 max-md:col-span-2 max-md:row-start-2 md:row-span-3 md:min-h-64 md:p-5"
            >
              <Image
                src="/card-bg.png"
                alt=""
                fill
                className="object-cover object-center"
              />
              <AnimatedStat
                to={10}
                className="from-background to-background/10 bg-linear-to-b bg-clip-text text-[2rem] leading-[1.2] text-transparent md:text-[4rem]"
                suffix={
                  <>
                    M<span className="text-brand-dark">+</span>
                  </>
                }
              />
              <div className="text-background flex flex-col gap-3">
                <h3 className="font-body relative max-w-55 text-base leading-[1.2] md:text-xl lg:text-2xl">
                  Low-energy adaptive decisions processed
                </h3>
                <p className="absolute right-6 bottom-6 max-w-70 text-right text-sm leading-[1.2]">
                  In various distributed environments, we aim to maintain a
                  minimal footprint while ensuring efficiency and performance.
                </p>
              </div>
            </RevealItem>
            <RevealItem className="font-heading relative flex min-h-60 flex-col justify-between gap-4 rounded-2xl border border-black/2 bg-black/2 p-4 md:row-span-2 md:min-h-64 md:p-5">
              <AnimatedStat
                to={92}
                className={statNumberClass}
                suffix={<span className="text-brand-dark">%</span>}
              />
              <div className="flex flex-col gap-3">
                <h3 className="font-body text-base leading-[1.2] md:text-xl lg:text-2xl">
                  Operational consistency
                </h3>
                <p className="text-foreground/70 text-sm leading-[1.2]">
                  Adaptive learning without performance spikes.
                </p>
              </div>
            </RevealItem>
            <RevealItem className="font-heading relative flex min-h-60 flex-col justify-between gap-4 rounded-2xl border border-black/2 bg-black/2 p-4 md:row-span-2 md:min-h-64 md:p-5">
              <Image
                src="/gradient-card-bg.svg"
                alt=""
                fill
                className="pointer-events-none object-bottom-left"
              />
              <AnimatedStat
                to={62}
                className={statNumberClass}
                suffix={<span className="text-brand-dark">%</span>}
              />
              <div className="flex flex-col gap-3">
                <h3 className="font-body text-base leading-[1.2] md:text-xl lg:text-2xl">
                  Less redundant data processing
                </h3>
                <p className="text-foreground/70 text-sm leading-[1.2]">
                  Signals filtered before full computation.
                </p>
              </div>
            </RevealItem>
            <RevealItem className="font-heading relative flex min-h-60 flex-col justify-between gap-4 rounded-2xl border border-black/2 bg-black/2 p-4 md:min-h-64 md:p-5">
              <AnimatedStat
                to={3}
                className={statNumberClass}
                suffix={<span className="text-brand-dark">×</span>}
              />
              <div className="flex flex-col gap-3">
                <h3 className="font-body text-base leading-[1.2] md:text-xl lg:text-2xl">
                  Longer system stability window
                </h3>
                <p className="text-foreground/70 text-sm leading-[1.2]">
                  Maintains performance without scaling hardware.
                </p>
              </div>
            </RevealItem>
          </div>
        </div>
      </div>
    </section>
  );
}
