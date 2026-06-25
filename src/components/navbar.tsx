"use client";

import Button from "./button";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

const SCROLL_DELTA = 12;
const TOP_THRESHOLD = 80;

function MenuCloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5L17 17M17 5L5 17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const canAnimate = useRef(false);
  const lastScrollY = useRef(0);
  const navHiddenRef = useRef(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateNavVisibility = () => {
      const currentY = window.scrollY;

      if (menuOpen || currentY <= TOP_THRESHOLD) {
        if (navHiddenRef.current) {
          navHiddenRef.current = false;
          setNavHidden(false);
        }
        lastScrollY.current = currentY;
        return;
      }

      const delta = currentY - lastScrollY.current;

      if (Math.abs(delta) >= SCROLL_DELTA) {
        const shouldHide = delta > 0;
        if (navHiddenRef.current !== shouldHide) {
          navHiddenRef.current = shouldHide;
          setNavHidden(shouldHide);
        }
        lastScrollY.current = currentY;
      }
    };

    gsap.ticker.add(updateNavVisibility);
    return () => gsap.ticker.remove(updateNavVisibility);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen && navHiddenRef.current) {
      navHiddenRef.current = false;
      setNavHidden(false);
    }
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const menu = menuRef.current;
    const links = linksRef.current;
    const cta = ctaRef.current;
    if (!menu || !links || !cta) return;

    const linkItems = links.querySelectorAll("[data-menu-link]");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.set(menu, {
      clipPath: "inset(0 100% 0 0)",
      pointerEvents: "none",
    });
    gsap.set([linkItems, cta], { opacity: 0, y: 24 });
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const links = linksRef.current;
    const cta = ctaRef.current;
    if (!menu || !links || !cta) return;

    if (!canAnimate.current) {
      canAnimate.current = true;
      return;
    }

    const linkItems = links.querySelectorAll("[data-menu-link]");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      gsap.set(menu, {
        clipPath: menuOpen ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
        pointerEvents: menuOpen ? "auto" : "none",
      });
      gsap.set([linkItems, cta], {
        opacity: menuOpen ? 1 : 0,
        y: menuOpen ? 0 : 24,
      });
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onStart: () => {
        if (menuOpen) menu.style.pointerEvents = "auto";
      },
      onComplete: () => {
        if (!menuOpen) menu.style.pointerEvents = "none";
      },
    });

    if (menuOpen) {
      tl.to(menu, { clipPath: "inset(0 0% 0 0)", duration: 0.65 })
        .to(
          linkItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.07,
            ease: "power2.out",
          },
          "-=0.32",
        )
        .to(
          cta,
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.28",
        );
    } else {
      tl.to([linkItems, cta], {
        opacity: 0,
        y: 16,
        duration: 0.22,
        stagger: 0.04,
        ease: "power2.in",
      }).to(
        menu,
        { clipPath: "inset(0 100% 0 0)", duration: 0.55 },
        "-=0.08",
      );
    }

    return () => {
      tl.kill();
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 right-0 left-0 z-50 w-full px-4 transition-transform duration-500 ease-in-out motion-reduce:transition-none",
          navHidden &&
            !menuOpen &&
            "pointer-events-none -translate-y-[calc(100%+2rem)]",
        )}
      >
        <div className="bg-foreground/2 mx-auto max-w-207 rounded-full p-1 md:p-2.5">
          <div className="bg-foreground flex items-center justify-between rounded-full p-3 pl-5 shadow-[0_4px_5.9px_0_rgba(0,0,0,0.25)] max-md:pr-5 md:grid md:grid-cols-3">
            <Link href="/" onClick={closeMenu}>
              <Image src="/logo.svg" alt="Logo" width={100} height={100} />
            </Link>
            <div className="text-background/70 flex items-center justify-center gap-8 max-md:hidden">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-background/70 hover:text-brand transition-colors",
                    pathname === href && "text-background",
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
            <Button variant="nav" className="max-md:hidden md:place-self-end">
              Get Started
            </Button>
            <Button
              variant="chip-icon"
              animate={false}
              className="md:hidden"
              innerClassName="size-auto border-none bg-transparent"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
              icon={
                menuOpen ? (
                  <MenuCloseIcon />
                ) : (
                  <Image src="/bars.svg" alt="" width={22} height={22} />
                )
              }
            />
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={!menuOpen}
        className="bg-foreground fixed inset-0 z-40 overflow-hidden md:hidden"
        style={{ clipPath: "inset(0 100% 0 0)" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="bg-brand/8 absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl" />
          <div className="bg-brand-dark/10 absolute -bottom-32 -left-20 h-80 w-80 rounded-full blur-3xl" />
        </div>

        <div className="relative flex h-full flex-col px-6 pt-28 pb-10">
          <div
            ref={linksRef}
            className="flex flex-1 flex-col justify-center gap-2"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                data-menu-link
                onClick={closeMenu}
                className={cn(
                  "font-heading text-background hover:text-brand py-3 text-[2.5rem] leading-[1.1] transition-colors",
                  pathname === href && "text-brand",
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          <div ref={ctaRef} className="pt-8">
            <Button variant="brand-flat" onClick={closeMenu}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
