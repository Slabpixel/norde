"use client";

import { RevealFade } from "@/components/scroll-reveal";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useSectionReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-white py-15 md:py-30"
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="relative mx-auto flex max-w-97 items-center justify-center md:max-w-4xl">
          <RevealFade
            as="h2"
            className="from-brand-darker/10 to-brand-darker bg-linear-to-t bg-clip-text text-center text-[2rem] leading-[1.2] text-transparent md:text-[min(5vw,3rem)]"
          >
            A bio-inspired{" "}
            <span className="inline-block px-2 align-middle md:px-4">
              <Image
                src="/txt-1.svg"
                alt=""
                width={66}
                height={69}
                className="h-8 w-auto transition-transform duration-300 hover:-rotate-12 md:h-[2.15rem]"
              />
            </span>{" "}
            AI platform focused on efficiency, sustainability{" "}
            <span className="inline-block px-2 align-middle md:px-4">
              <Image
                src="/txt-2.svg"
                alt=""
                width={66}
                height={69}
                className="h-8 w-auto transition-transform duration-300 hover:rotate-12 md:h-[2.15rem]"
              />
            </span>{" "}
            and adaptive systems.
          </RevealFade>
        </div>
      </div>
    </section>
  );
}
