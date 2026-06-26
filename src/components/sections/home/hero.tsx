"use client";

import Badge from "@/components/badge";
import Button from "@/components/button";
import { RevealFade, RevealGroup, RevealItem } from "@/components/scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import Image from "next/image";
import { useRef } from "react";

const HERO_CONTENT_PARALLAX = {
  from: { y: 0 },
  to: { yPercent:8 },
  start: "top top-=20%",
  end: "bottom top",
} as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useParallax(bgRef, {
    triggerRef: sectionRef,
    yPercent: 22,
    start: "top top",
    end: "bottom top",
  });

  useParallax(contentRef, {
    triggerRef: sectionRef,
    ...HERO_CONTENT_PARALLAX,
  });

  useSectionReveal(sectionRef, { start: "top 100%" });

  return (
    <section
      ref={sectionRef}
      className="relative h-dvh min-h-338 w-full overflow-hidden py-33 md:py-45"
    >
      <div className="absolute inset-0 overflow-hidden max-md:-top-3/4">
        <div ref={bgRef} className="absolute top-[-12%] h-[124%] w-full">
          <Image
            src="/hero-bg.png"
            alt="Background"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="bg-background absolute -bottom-25 -left-20 h-46 w-[calc(100%+10rem)] blur-2xl"></div>

      <div
        ref={contentRef}
        className="relative mx-auto h-full px-4 sm:px-6 md:px-8 lg:px-10"
      >
        <div className="flex h-full flex-col items-center gap-8 md:gap-13.5">
          <RevealGroup className="flex flex-col items-center justify-center gap-4 md:gap-6">
            <RevealItem>
              <Badge />
            </RevealItem>
            <RevealFade
              as="h1"
              className="from-brand-darker to-brand-darker/10 max-w-[8em] bg-linear-to-b bg-clip-text text-center text-[clamp(3.75rem,8vw,7.5rem)] leading-[0.95] text-transparent"
            >
              Intelligence doesn’t have to{" "}
              <span className="font-serif tracking-[-0.04em] italic">
                be loud
              </span>
            </RevealFade>
          </RevealGroup>
          <RevealItem className="flex flex-col items-center gap-1.5 sm:flex-row sm:gap-4">
            <Button
              variant="brand"
              icon={
                <Image
                  src="/arrow.svg"
                  alt=""
                  width={16}
                  height={14}
                />
              }
            >
              Start 14 day Trial
            </Button>
            <Button variant="ghost">Explore the System</Button>
          </RevealItem>
          <div className="flex w-full max-w-225 flex-col gap-2">
            <RevealItem
              style={{
                background:
                  "linear-gradient(276deg, rgba(139, 173, 36, 0.20) 24.99%, rgba(194, 237, 63, 0.20) 93.69%)",
              }}
              className="border-background/10 flex flex-col gap-4 rounded-[1.375rem] border p-2 pb-4 backdrop-blur-[14px]"
            >
              <div className="bg-background flex flex-col gap-4 rounded-2xl p-2.5 md:p-4">
                <textarea
                  placeholder="Ask anything you want.. 😁"
                  className="h-30 w-full resize-none rounded-lg text-xs focus:ring-0 focus:outline-none md:text-base"
                />
                <div className="flex items-center justify-between gap-2.5">
                  <div className="flex gap-2.5">
                    <Button
                      variant="chip-icon"
                      icon={
                        <Image
                          src="/paperclip.svg"
                          className="max-md:size-3"
                          alt=""
                          width={14}
                          height={14}
                        />
                      }
                    />
                    <Button
                      variant="chip"
                      iconPosition="left"
                      icon={
                        <Image
                          src="/image.svg"
                          className="max-md:size-3"
                          alt=""
                          width={14}
                          height={14}
                        />
                      }
                    >
                      Create an image
                    </Button>
                    <Button
                      variant="chip"
                      iconPosition="left"
                      icon={
                        <Image
                          src="/globe.svg"
                          className="max-md:size-3"
                          alt=""
                          width={14}
                          height={14}
                        />
                      }
                    >
                      Search the web
                    </Button>
                  </div>
                  <Button
                    variant="gradient"
                    innerStyle={{
                      background:
                        "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)",
                    }}
                    icon={
                      <Image
                        src="/microphone.svg"
                        className="max-md:size-3.5"
                        alt=""
                        width={16}
                        height={16}
                      />
                    }
                  />
                </div>
              </div>
              <div className="px-4">
                <Button
                  variant="ghost-inverse"
                  iconPosition="left"
                  icon={<Image src="/stars.svg" alt="" width={14} height={14} />}
                >
                  Saved prompts
                </Button>
              </div>
            </RevealItem>
            <RevealGroup className="bg-brand-light border-background/10 grid grid-cols-1 gap-2 rounded-[0.875rem] border p-2 backdrop-blur-[14px] md:grid-cols-3">
              <RevealItem
                style={{
                  background:
                    "linear-gradient(204deg, rgba(255, 255, 255, 0.20) 12.12%, rgba(194, 237, 63, 0.20) 47.18%, rgba(194, 237, 63, 0.20) 82.04%)",
                }}
                className="flex h-full w-full flex-col gap-4 rounded-[0.625rem] p-4 backdrop-blur-[10px]"
              >
                <Image src="/layer-group.svg" alt="" width={16} height={16} />
                <div className="text-background flex flex-col gap-2 leading-tight max-md:text-sm">
                  <div className="font-medium">Smart Budgeting</div>
                  <div className="text-background/70">
                    Data streams optimize flow, reducing friction.
                  </div>
                </div>
              </RevealItem>
              <RevealItem
                style={{
                  background:
                    "linear-gradient(204deg, rgba(255, 255, 255, 0.20) 12.12%, rgba(194, 237, 63, 0.20) 47.18%, rgba(194, 237, 63, 0.20) 82.04%)",
                }}
                className="flex h-full w-full flex-col gap-4 rounded-[0.625rem] p-4 backdrop-blur-[10px]"
              >
                <Image src="/brain.svg" alt="" width={16} height={16} />
                <div className="text-background flex flex-col gap-2 leading-tight max-md:text-sm">
                  <div className="font-medium">Creative Brainstorm</div>
                  <div className="text-background/70">
                    Data streams optimize flow, reducing friction.
                  </div>
                </div>
              </RevealItem>
              <RevealItem
                style={{
                  background:
                    "linear-gradient(204deg, rgba(255, 255, 255, 0.20) 12.12%, rgba(194, 237, 63, 0.20) 47.18%, rgba(194, 237, 63, 0.20) 82.04%)",
                }}
                className="flex h-full w-full flex-col gap-4 rounded-[0.625rem] p-4 backdrop-blur-[10px]"
              >
                <Image src="/broom.svg" alt="" width={16} height={16} />
                <div className="text-background flex flex-col gap-2 leading-tight max-md:text-sm">
                  <div className="font-medium">Smart Budgeting</div>
                  <div className="text-background/70">
                    Data streams optimize flow, reducing friction.
                  </div>
                </div>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
