"use client";

import { cn } from "@/lib/utils";
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  forwardRef,
  type ReactNode,
} from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function RevealFade<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: RevealProps<T>) {
  const Tag = as ?? "div";
  return (
    <Tag data-reveal-fade className={className} {...props}>
      {children}
    </Tag>
  );
}

export function RevealSplit<T extends ElementType = "p">({
  as,
  className,
  children,
  ...props
}: RevealProps<T>) {
  const Tag = as ?? "p";
  return (
    <Tag data-reveal-split className={className} {...props}>
      {children}
    </Tag>
  );
}

export function RevealItem({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div data-reveal-item className={cn(className)} {...props}>
      {children}
    </div>
  );
}

export const RevealGroup = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(function RevealGroup({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      data-reveal-group
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
});

export { useSectionReveal } from "@/hooks/use-section-reveal";
