"use client";

import Badge from "@/components/badge";
import Button from "@/components/button";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const HOW_ITEMS = [
  {
    id: "adaptive-filter",
    nav: "Adaptive Filter",
    title: "Selective Activation",
    description:
      "Noise and redundant signals are filtered before computation begins. Only meaningful patterns move forward. Efficiency begins with restraint.",
    image: "/how-1.png",
    overlays: true,
  },
  {
    id: "learning-core",
    nav: "Learning Core",
    title: "Pattern Refinement",
    description:
      "Meaningful patterns are reinforced through feedback loops. The system learns selectively, strengthening relevant pathways while letting noise decay naturally.",
    image: "/how-1.png",
    overlays: false,
  },
  {
    id: "response-layer",
    nav: "Response Layer",
    title: "Contextual Output",
    description:
      "Only calibrated responses reach the surface. Output is proportional to relevance, keeping performance stable and energy use restrained.",
    image: "/how-2.png",
    overlays: false,
  },
  {
    id: "signal-input",
    nav: "Signal Input Layer",
    title: "Continuous Intake",
    description:
      "Raw environmental and system signals enter the pipeline continuously. Norde captures broad input without immediately committing full computational resources.",
    image: "/how-2.png",
    overlays: false,
  },
] as const;

const MOBILE_TAB_ORDER = [3, 0, 1, 2] as const;

const NAV_OFFSET = 128;

function HowItemContent({
  item,
  index,
  activeIndex,
  itemRef,
}: {
  item: (typeof HOW_ITEMS)[number];
  index: number;
  activeIndex: number;
  itemRef?: (el: HTMLElement | null) => void;
}) {
  return (
    <article
      ref={itemRef}
      className={cn(
        "flex flex-col justify-start gap-6 transition-opacity duration-500 md:gap-8",
        activeIndex === index ? "opacity-100" : "opacity-60",
      )}
    >
      <div className="rounded-2xl bg-black/2 p-2 md:p-3.5">
        <div className="relative h-[400px] overflow-hidden rounded-[10px] md:h-[460px] md:rounded-2xl">
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover object-bottom"
            sizes="(max-width: 1280px) 100vw, 920px"
            priority={index <= 1}
          />

          {item.overlays && (
            <>
              <Image
                src="/how-1-a.png"
                alt=""
                width={480}
                height={520}
                className="pointer-events-none absolute top-1/2 left-[22%] w-[52%] max-w-[480px] -translate-y-1/2"
              />
              <Image
                src="/how-1-b.png"
                alt=""
                width={236}
                height={280}
                className="pointer-events-none absolute top-[12%] right-[5%] w-[27%] max-w-[236px]"
              />
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:px-3.5">
        <h3 className="text-base leading-none md:text-2xl">{item.title}</h3>
        <p className="text-foreground/60 text-sm leading-[1.4] md:w-82">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function How() {
  const lenis = useLenis();
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const updateActive = () => {
      let nextActive = 0;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const { top } = item.getBoundingClientRect();
        if (top <= NAV_OFFSET + 40) {
          nextActive = index;
        }
      });

      setActiveIndex(nextActive);
    };

    updateActive();
    lenis?.on("scroll", updateActive);
    window.addEventListener("resize", updateActive);

    return () => {
      lenis?.off("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [lenis]);

  const scrollToItem = useCallback(
    (index: number) => {
      setActiveIndex(index);

      if (window.innerWidth < 768) return;

      const target = itemRefs.current[index];
      if (!target) return;

      if (lenis) {
        lenis.scrollTo(target, { offset: -NAV_OFFSET, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [lenis],
  );

  return (
    <section className="relative w-full overflow-x-clip bg-white py-15 md:py-30">
      <div className="mx-auto max-w-8xl space-y-6 px-4 sm:px-6 md:space-y-12 md:px-8 lg:px-10">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:items-center">
          <p className="text-foreground/70 order-2 text-sm leading-[1.4] md:order-1 md:col-span-4 md:w-71 md:shrink-0">
            Norde processes information like natural systems selectively and
            adaptively, with minimal energy waste. Each layer filters noise and
            refines signals.
          </p>
          <div className="order-1 flex flex-col gap-4 md:order-2 md:col-span-8 md:max-w-[34.7rem]">
            <Badge text="How it Work" />
            <h2 className="from-brand-darker/10 to-brand-darker bg-linear-to-t bg-clip-text text-[2rem] leading-[1.2] text-transparent md:text-5xl">
              An adaptive intelligence modeled after living ecosystems.
            </h2>
          </div>
        </div>

        <div className="border-b border-black/5 md:hidden">
          <div className="-mx-4 flex overflow-x-auto px-4 scrollbar-none [&::-webkit-scrollbar]:hidden">
            {MOBILE_TAB_ORDER.map((itemIndex) => {
              const item = HOW_ITEMS[itemIndex];
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToItem(itemIndex)}
                  className={cn(
                    "shrink-0 px-6 py-5 text-sm leading-none whitespace-nowrap transition-all duration-300",
                    activeIndex === itemIndex
                      ? "border-brand bg-linear-to-b from-transparent to-brand/10 border-b text-foreground"
                      : "text-foreground/20",
                  )}
                >
                  {item.nav}
                </button>
              );
            })}
          </div>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-linear-to-l from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 left-0 h-full w-12 bg-linear-to-r from-white to-transparent" />
        </div>

        <div className="md:hidden">
          <HowItemContent
            item={HOW_ITEMS[activeIndex]}
            index={activeIndex}
            activeIndex={activeIndex}
          />
        </div>

        <div className="hidden grid-cols-12 md:grid">
          <div className="col-span-4">
            <div className="sticky top-32 w-40">
              <nav className="border-l border-black/5">
                {HOW_ITEMS.map((item, index) => (
                  <Button
                    key={item.id}
                    variant="sidebar"
                    active={activeIndex === index}
                    onClick={() => scrollToItem(index)}
                  >
                    {item.nav}
                  </Button>
                ))}
              </nav>
            </div>
          </div>

          <div className="relative col-span-8 min-w-0">
            

            <div className="flex flex-col gap-12">
              {HOW_ITEMS.map((item, index) => (
                <HowItemContent
                  key={item.id}
                  item={item}
                  index={index}
                  activeIndex={activeIndex}
                  itemRef={(el) => {
                    itemRefs.current[index] = el;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
