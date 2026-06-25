"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import {
  useEffect,
  useRef,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ReactNode,
} from "react";

gsap.registerPlugin(SplitText);

const VARIANTS = {
  brand: {
    outer: "cursor-pointer rounded-full bg-foreground/2 p-1.5",
    inner:
      "flex items-center gap-4.5 rounded-full bg-brand py-2 pr-2.5 pl-5 font-medium leading-none text-foreground shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]",
    iconWrap:
      "flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background",
    active: "",
  },
  "brand-flat": {
    outer: "w-full cursor-pointer rounded-full bg-black/2 p-1.5",
    inner:
      "flex h-12 w-full items-center justify-center rounded-full bg-brand text-base font-medium text-brand-darker shadow-[0_4px_2px_rgba(0,0,0,0.08)]",
    iconWrap: "",
    active: "",
  },
  outline: {
    outer: "w-full cursor-pointer rounded-full bg-black/2 p-1.5",
    inner:
      "flex h-12 w-full items-center justify-center rounded-full bg-black/1 text-base font-medium",
    iconWrap: "",
    active: "",
  },
  ghost: {
    outer: "cursor-pointer",
    inner:
      "flex h-12.5 items-center justify-center px-4.5 py-2 opacity-70",
    iconWrap: "",
    active: "",
  },
  nav: {
    outer: "cursor-pointer max-md:hidden",
    inner:
      "inline-flex w-fit items-center rounded-full bg-background px-4.5 py-3 text-base leading-none",
    iconWrap: "",
    active: "",
  },
  toggle: {
    outer: "cursor-pointer",
    inner:
      "inline-flex h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-brand-darker md:px-8 md:text-base",
    iconWrap: "",
    active: "bg-brand",
  },
  chip: {
    outer: "cursor-pointer",
    inner:
      "bg-brand-light flex h-8 items-center justify-center gap-2.5 rounded-full border border-black/2 bg-black/2 px-2.5 py-2 md:h-10 md:px-3.5 md:py-2.5",
    iconWrap: "inline-flex size-3.5 shrink-0 overflow-hidden",
    active: "",
  },
  "chip-icon": {
    outer: "cursor-pointer",
    inner:
      "bg-brand-light flex size-8 shrink-0 items-center justify-center rounded-full border border-black/2 bg-black/2 md:size-10",
    iconWrap: "inline-flex shrink-0 items-center justify-center overflow-hidden",
    active: "",
  },
  "ghost-inverse": {
    outer: "cursor-pointer",
    inner: "flex items-center justify-center gap-1.5",
    iconWrap: "inline-flex shrink-0 overflow-hidden",
    active: "",
  },
  sidebar: {
    outer: "block w-full cursor-pointer",
    inner:
      "block w-full border-l px-6 py-5 text-left text-base leading-none transition-colors duration-300",
    iconWrap: "",
    active:
      "border-brand bg-linear-to-l from-transparent to-brand/10 text-foreground",
  },
  gradient: {
    outer: "cursor-pointer",
    inner:
      "flex aspect-square size-8 shrink-0 items-center justify-center rounded-full border border-brand md:size-10",
    iconWrap: "size-full overflow-hidden",
    active: "",
  },
} as const;

type ButtonVariant = keyof typeof VARIANTS;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  active?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  innerClassName?: string;
  innerStyle?: React.CSSProperties;
  animate?: boolean;
};

function IconStack({
  icon,
  className,
  originalRef,
  cloneRef,
}: {
  icon: ReactNode;
  className?: string;
  originalRef: React.RefObject<HTMLSpanElement | null>;
  cloneRef: React.RefObject<HTMLSpanElement | null>;
}) {
  return (
    <span className={cn("relative flex overflow-hidden", className)}>
      <span
        ref={originalRef}
        className="flex size-full items-center justify-center"
      >
        {icon}
      </span>
      <span
        ref={cloneRef}
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        {icon}
      </span>
    </span>
  );
}

function TextStack({
  text,
  className,
  originalRef,
  cloneRef,
}: {
  text: string;
  className?: string;
  originalRef: React.RefObject<HTMLSpanElement | null>;
  cloneRef: React.RefObject<HTMLSpanElement | null>;
}) {
  return (
    <span className={cn("relative inline-block overflow-hidden leading-none", className)}>
      <span ref={originalRef} className="inline-block whitespace-nowrap">
        {text}
      </span>
      <span
        ref={cloneRef}
        className="absolute inset-0 inline-block whitespace-nowrap"
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  );
}

export default function Button({
  variant = "brand",
  active = false,
  icon,
  iconPosition = "right",
  className,
  innerClassName,
  innerStyle,
  animate = true,
  children,
  disabled,
  onMouseEnter,
  onMouseLeave,
  style,
  ...props
}: ButtonProps) {
  const styles = VARIANTS[variant];
  const textOriginalRef = useRef<HTMLSpanElement>(null);
  const textCloneRef = useRef<HTMLSpanElement>(null);
  const iconOriginalRef = useRef<HTMLSpanElement>(null);
  const iconCloneRef = useRef<HTMLSpanElement>(null);
  const hoverTl = useRef<gsap.core.Timeline | null>(null);

  const label = typeof children === "string" ? children : null;
  const canAnimateText = animate && !disabled && !!label;
  const canAnimateIcon = animate && !disabled && !!icon;

  useEffect(() => {
    if (!canAnimateText && !canAnimateIcon) return;

    const textOriginal = textOriginalRef.current;
    const textClone = textCloneRef.current;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ paused: true });

      if (canAnimateText && textOriginal && textClone) {
        const splitOriginal = SplitText.create(textOriginal, {
          type: "chars",
          charsClass: "btn-char",
        });
        const splitClone = SplitText.create(textClone, {
          type: "chars",
          charsClass: "btn-char",
        });

        gsap.set(splitClone.chars, { yPercent: 100 });

        timeline.to(
          splitOriginal.chars,
          {
            yPercent: -100,
            duration: 0.4,
            ease: "power2.inOut",
            stagger: 0.015,
          },
          0,
        );

        timeline.fromTo(
          splitClone.chars,
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 0.4,
            ease: "power2.inOut",
            stagger: 0.015,
          },
          0,
        );
      }

      const iconOriginal = iconOriginalRef.current;
      const iconClone = iconCloneRef.current;

      if (canAnimateIcon && iconOriginal && iconClone) {
        gsap.set(iconClone, { yPercent: 100 });

        timeline.to(
          iconOriginal,
          { yPercent: -100, duration: 0.35, ease: "power2.inOut" },
          0,
        );

        timeline.fromTo(
          iconClone,
          { yPercent: 100 },
          { yPercent: 0, duration: 0.35, ease: "power2.inOut" },
          0,
        );
      }

      hoverTl.current = timeline;
    });

    return () => {
      hoverTl.current = null;
      ctx.revert();
    };
  }, [canAnimateText, canAnimateIcon, label, icon]);

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    hoverTl.current?.play();
    onMouseEnter?.(event);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    hoverTl.current?.reverse();
    onMouseLeave?.(event);
  };

  const iconNode =
    icon &&
    (canAnimateIcon ? (
      <IconStack
        icon={icon}
        className={styles.iconWrap}
        originalRef={iconOriginalRef}
        cloneRef={iconCloneRef}
      />
    ) : (
      <span className={cn("inline-flex", styles.iconWrap)}>{icon}</span>
    ));

  const labelNode = label ? (
    canAnimateText ? (
      <TextStack
        text={label}
        originalRef={textOriginalRef}
        cloneRef={textCloneRef}
      />
    ) : (
      <span className="whitespace-nowrap">{label}</span>
    )
  ) : (
    children
  );

  const isIconOnly = !label && !!icon;

  const hasHoverAnimation = canAnimateText || canAnimateIcon;

  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        "m-0 appearance-none border-0 bg-transparent p-0 font-inherit text-inherit leading-none",
        styles.outer,
        className,
      )}
      style={style}
      onMouseEnter={hasHoverAnimation ? handleMouseEnter : onMouseEnter}
      onMouseLeave={hasHoverAnimation ? handleMouseLeave : onMouseLeave}
      {...props}
    >
      <span
        className={cn(
          styles.inner,
          variant === "sidebar" &&
            !active &&
            "border-transparent text-foreground/20 hover:text-foreground/40",
          variant === "sidebar" && active && styles.active,
          variant === "toggle" && active && styles.active,
          variant === "outline" && "hover:bg-brand/50 transition-colors",
          variant === "chip" &&
            "text-[0.625rem] text-black/50 md:text-sm",
          variant === "chip" && "hover:bg-black/5 transition-colors",
          variant === "chip-icon" && "hover:bg-black/5 transition-colors",
          variant === "ghost-inverse" &&
            "text-xs font-medium text-background md:text-sm",
          variant === "ghost-inverse" && "hover:opacity-80 transition-opacity",
          innerClassName,
        )}
        style={innerStyle}
      >
        {isIconOnly ? (
          iconNode
        ) : (
          <>
            {iconPosition === "left" && iconNode}
            {labelNode}
            {iconPosition === "right" && iconNode}
          </>
        )}
      </span>
    </button>
  );
}

export type { ButtonProps, ButtonVariant };
