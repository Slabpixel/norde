"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Badge from "@/components/badge";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

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

const NAV_OFFSET = 128;

export default function How() {
    const lenis = useLenis();
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
        const grid = gridRef.current;
        const nav = navRef.current;
        const section = sectionRef.current;
        if (!grid || !nav || !section) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const pin = ScrollTrigger.create({
                trigger: grid,
                start: `top top+=${NAV_OFFSET}`,
                endTrigger: section,
                end: "bottom bottom",
                pin: nav,
                pinSpacing: false,
                invalidateOnRefresh: true,
            });

            return () => pin.kill();
        });

        return () => mm.revert();
    }, []);

    useEffect(() => {
        const refresh = () => ScrollTrigger.refresh();
        refresh();

        window.addEventListener("load", refresh);
        window.addEventListener("resize", refresh);

        return () => {
            window.removeEventListener("load", refresh);
            window.removeEventListener("resize", refresh);
        };
    }, []);

    const scrollToItem = useCallback(
        (index: number) => {
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
        <section ref={sectionRef} className="relative w-full bg-white py-30 overflow-x-hidden">
            <div className="mx-auto max-w-8xl space-y-12 px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="grid grid-cols-12 items-center w-full">
                    <p className="col-span-4 w-71 shrink-0 text-sm leading-[1.4] text-foreground/60">
                        Norde processes information like natural systems selectively and
                        adaptively, with minimal energy waste. Each layer filters noise and
                        refines signals.
                    </p>
                    <div className="col-span-8 max-w-[34.7rem]">
                        <Badge text="How it Work" />
                        <h2 className="mt-2 bg-linear-to-t from-brand-darker/10 to-brand-darker bg-clip-text text-5xl leading-[1.2] text-transparent">
                            An adaptive intelligence modeled after living ecosystems.
                        </h2>
                    </div>
                </div>

                <div ref={gridRef} className="relative grid grid-cols-12 items-start">
                    <div className="col-span-4">
                        <div ref={navRef} className="w-40 self-start">
                            <nav className="border-l border-black/5">
                                {HOW_ITEMS.map((item, index) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => scrollToItem(index)}
                                        className={cn(
                                            "block w-full border-l px-6 py-5 text-left text-base leading-none transition-all duration-300",
                                            activeIndex === index
                                                ? "border-brand bg-linear-to-l from-transparent to-brand/10 text-foreground"
                                                : "border-transparent text-foreground/20 hover:text-foreground/40",
                                        )}
                                    >
                                        {item.nav}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    <div className="relative col-span-8 min-w-0">
                        <div ref={contentRef} className="flex flex-col gap-12">
                            {HOW_ITEMS.map((item, index) => (
                                <article
                                    key={item.id}
                                    ref={(el) => {
                                        itemRefs.current[index] = el;
                                    }}
                                    className={cn(
                                        "flex flex-col justify-start gap-8 transition-opacity duration-500",
                                        activeIndex === index ? "opacity-100" : "opacity-60",
                                    )}
                                >
                                    <div className="rounded-2xl bg-black/2 p-3.5">
                                        <div className="relative h-[460px] overflow-hidden rounded-2xl">
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
                                                        className="pointer-events-none absolute left-[22%] top-1/2 w-[52%] max-w-[480px] -translate-y-1/2"
                                                    />
                                                    <Image
                                                        src="/how-1-b.png"
                                                        alt=""
                                                        width={236}
                                                        height={280}
                                                        className="pointer-events-none absolute right-[5%] top-[12%] w-[27%] max-w-[236px]"
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-start justify-between px-3.5">
                                        <h3 className="text-2xl leading-none">{item.title}</h3>
                                        <p className="w-82 text-sm leading-[1.4] text-foreground/60">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-50">
                            <div className="absolute inset-x-0 bottom-0 h-50 bg-linear-to-b from-transparent from-2% to-white" />
                            <div className="absolute -bottom-25 -left-20 h-46 w-[calc(100%+10rem)] bg-background blur-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
