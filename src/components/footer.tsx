"use client";

import Image from "next/image";
import Link from "next/link";
import Badge from "./badge";
import Button from "./button";
import { RevealFade, RevealGroup, RevealItem, RevealSplit } from "./scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { useRef } from "react";

const FOOTER_LINKS = [
  {
    id: "product",
    title: "Product",
    links: ["Overview", "How It Works", "Applications", "Pricing"],
  },
  {
    id: "company",
    title: "Company",
    links: ["About", "Research", "Sustainability", "Careers"],
  },
  {
    id: "resources",
    title: "Resources",
    links: ["Documentation", "API Reference", "Case Studies", "Blog"],
  },
  {
    id: "legal",
    title: "Resources",
    links: ["Privacy Policy", "Terms of Use"],
  },
] as const;

const SOCIAL_LINKS = [
  { href: "#", icon: "/instagram.svg", label: "Instagram" },
  { href: "#", icon: "/x-twitter.svg", label: "X" },
  { href: "#", icon: "/facebook.svg", label: "Facebook" },
  { href: "#", icon: "/tiktok.svg", label: "TikTok" },
] as const;

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useParallax(bgRef, {
    triggerRef: footerRef,
    yPercent: 32,
  });

  useSectionReveal(footerRef);

  return (
    <footer
      ref={footerRef}
      className="bg-foreground text-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div ref={bgRef} className="absolute top-[-12%] h-[115%] w-full">
          <Image src="/footer.png" alt="" fill className="object-cover" />
        </div>
      </div>

      <div className="bg-background pointer-events-none absolute -top-25 -left-20 h-46 w-[calc(100%+10rem)] blur-2xl" />

      <div className="max-w-8xl relative mx-auto px-4 pt-38 sm:px-6 md:px-8 md:pt-68 lg:px-10">
        <RevealGroup className="mx-auto flex max-w-97 flex-col items-center gap-8 text-center md:max-w-232 md:gap-10">
          <RevealItem>
            <Badge text="Get Started Now!" variant="dark" />
          </RevealItem>
          <RevealFade
            as="h2"
            className="w-full bg-linear-[71deg,rgba(255,255,255,0)_-22.139%,#FFF_59.981%] bg-clip-text text-[2rem] leading-[1.1] text-transparent md:text-[min(6vw,4rem)]"
          >
            Design systems that adapt and evolve responsibly.
          </RevealFade>
          <RevealSplit className="text-background/70 text-sm leading-[1.4] md:w-xl">
            Rethink intelligence as a balanced system that filters, learns, and
            acts. Reduce load, extend longevity, and create technology in
            harmony with its environment.
          </RevealSplit>
          <RevealItem className="flex w-full flex-col items-center gap-1.5 sm:flex-row sm:justify-center sm:gap-4">
            <Button
              variant="brand"
              icon={
                <Image src="/arrow.svg" alt="" width={16} height={14} />
              }
            >
              Start 14 day Trial
            </Button>
            <Button variant="ghost">Explore the System</Button>
          </RevealItem>
        </RevealGroup>

        <div className="mt-15 flex flex-col gap-15 md:mt-32 md:flex-row md:items-start md:justify-between">
          <RevealItem className="flex w-full flex-col gap-6 md:w-77">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/logo.svg" alt="Norde" width={104} height={28} />
            </Link>
            <p className="text-background/70 text-sm leading-[1.4] md:max-w-none">
              Adaptive systems enhance efficiency, adjusting to changes and
              ensuring performance. They learn through feedback.
            </p>
          </RevealItem>

          <div className="flex flex-wrap gap-x-26 gap-y-15 text-base md:gap-25">
            {FOOTER_LINKS.map((group) => (
              <RevealItem key={group.id} className="min-w-27 space-y-6">
                <p className="text-background/70">{group.title}</p>
                {group.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="hover:text-brand block transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </RevealItem>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-1 mt-10 overflow-hidden md:mt-14">
        <Image
          className="w-full"
          src="/footer-txt.svg"
          alt=""
          width={1920}
          height={720}
        />
      </div>

      <div className="bg-brand text-foreground relative flex items-center justify-between px-4 py-2.5 text-[0.8125rem] md:px-10 md:py-4 md:text-sm">
        <p className="font-medium">© 2026 Norde, All right reserved</p>
        <div className="flex items-center gap-3.5 md:gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="transition-opacity hover:opacity-70"
            >
              <Image
                src={social.icon}
                alt=""
                width={16}
                height={18}
                className="h-[18px] w-4"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
