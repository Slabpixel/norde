"use client";

import Badge from "@/components/badge";
import Button from "@/components/button";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type BillingPeriod = "monthly" | "annual";

const PLANS = [
  {
    id: "seed",
    label: "Seed",
    title: "For early-stage",
    monthly: 29,
    annual: 24,
    description:
      "For early-stage teams building adaptive foundations. Up to 3 adaptive modules, optimized energy processing, standard feedback loop.",
    featuresLabel: "What's Included:",
    features: [
      "Bio-inspired core engine",
      "Selective signal filtering",
      "Adaptive learning cycles",
      "Basic performance insights",
      "Standard support",
    ],
    cta: "Start Growing",
    featured: false,
  },
  {
    id: "grow",
    label: "Grow",
    title: "For scaling teams",
    monthly: 49,
    annual: 39,
    description:
      "For scaling teams prioritizing efficiency and long-term balance. Up to 10 adaptive modules, advanced signal optimization, extended stability window.",
    featuresLabel: "Everything in Seed, plus:",
    features: [
      "Multi-layer learning refinement",
      "Cross-system integrations",
      "Advanced sustainability analytics",
      "Priority processing stability",
      "Team collaboration tools",
    ],
    cta: "Start 14 day Trial",
    featured: true,
    badge: "Best Value for Scale",
  },
  {
    id: "ecosystem",
    label: "Ecosystem",
    title: "For Enterprises",
    monthly: 99,
    annual: 79,
    description:
      "For enterprises building intelligent, sustainable infrastructure at scale. Unlimited adaptive modules, dedicated optimization layer, full environmental impact reporting.",
    featuresLabel: "Everything in Grow, plus:",
    features: [
      "Custom architecture design",
      "Dedicated optimization consultant",
      "Infrastructure efficiency mapping",
      "SLA-backed stability guarantee",
      "Enterprise-grade security",
    ],
    cta: "Start Full Environmental",
    featured: false,
  },
] as const;

type Plan = (typeof PLANS)[number];

function PlanRadio({ selected }: { selected: boolean }) {
  return (
    <span
      className={cn(
        "relative mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full border",
        selected ? "border-brand bg-brand" : "border-black/15 bg-white",
      )}
    >
      {selected && <span className="size-1.5 rounded-full bg-white" />}
    </span>
  );
}

function AnimatedPrice({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const displayed = useRef(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const from = displayed.current;
    const to = value;

    if (from === to) {
      el.textContent = String(to);
      return;
    }

    const proxy = { val: from };

    const tween = gsap.to(proxy, {
      val: to,
      duration: 0.6,
      ease: "power2.out",
      snap: { val: 1 },
      onUpdate: () => {
        el.textContent = String(Math.round(proxy.val));
      },
      onComplete: () => {
        displayed.current = to;
      },
    });

    return () => {
      tween.kill();
    };
  }, [value]);

  return (
    <span
      ref={ref}
      className={cn(
        "from-brand-darker/10 to-brand-darker inline-block bg-linear-to-t bg-clip-text text-transparent",
        className,
      )}
    >
      {value}
    </span>
  );
}

function PriceDisplay({ price, size = "lg" }: { price: number; size?: "lg" | "sm" }) {
  if (size === "sm") {
    return (
      <p className="font-heading flex shrink-0 items-end whitespace-nowrap leading-none">
        <span className="text-brand-dark text-2xl leading-[1.2]">$</span>
        <span className="text-2xl leading-[1.2]">
          <AnimatedPrice value={price} className="text-2xl leading-[1.2]" />
        </span>
        <span className="font-body text-foreground/70 mb-0.5 ml-1 text-sm">
          /month
        </span>
      </p>
    );
  }

  return (
    <p className="font-heading mt-5 text-[4rem] leading-[1.2]">
      <span className="text-brand-dark">$</span>
      <AnimatedPrice value={price} className="text-[4rem] leading-[1.2]" />
      <span className="font-body text-foreground/70 text-sm">/month</span>
    </p>
  );
}

function PlanFeatures({ plan }: { plan: Plan }) {
  return (
    <>
      <div className="my-6 border-t border-black/5" />
      <p className="text-foreground/70 text-sm font-bold">{plan.featuresLabel}</p>
      <ul className="text-foreground/70 mt-4 space-y-3 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Image src="/check-circle.svg" alt="" width={12} height={12} />
            {feature}
          </li>
        ))}
      </ul>
    </>
  );
}

function MobilePricingCard({
  plan,
  price,
  selected,
  onSelect,
}: {
  plan: Plan;
  price: number;
  selected: boolean;
  onSelect: () => void;
}) {
  if (selected) {
    return (
      <article className="overflow-hidden rounded-2xl">
        {plan.featured && plan.badge && (
          <div className="bg-brand px-4 py-2 text-center text-sm font-medium text-black/70">
            {plan.badge}
          </div>
        )}
        <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white px-4 pt-4 pb-6">
          {plan.featured && (
            <Image
              src="/gradient-pricing-bg.svg"
              alt=""
              fill
              className="pointer-events-none object-top-right"
            />
          )}
          <div className="relative z-1">
            <div className="flex items-start gap-2">
              <PlanRadio selected />
              <div className="flex min-w-0 flex-1 items-end justify-between gap-4">
                <div>
                  <p className="text-foreground/70 text-sm">{plan.label}</p>
                  <p className="mt-2 text-xl leading-none">{plan.title}</p>
                </div>
                <PriceDisplay price={price} size="sm" />
              </div>
            </div>

            {plan.featured && (
              <div className="mt-6 border-t border-black/5 pt-6 pl-5.5">
                <p className="text-foreground/70 text-sm font-medium">
                  {plan.featuresLabel}
                </p>
                <ul className="text-foreground/70 mt-4 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Image
                        src="/check-circle.svg"
                        alt=""
                        width={12}
                        height={12}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!plan.featured && <PlanFeatures plan={plan} />}

            <Button
              variant={plan.featured ? "brand-flat" : "outline"}
              className="mt-6"
            >
              {plan.cta}
            </Button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full items-start gap-2 rounded-2xl border border-black/5 bg-white px-4 py-6.5 text-left"
    >
      <PlanRadio selected={false} />
      <div className="flex min-w-0 flex-1 items-end justify-between gap-4">
        <div>
          <p className="text-foreground/70 text-sm">{plan.label}</p>
          <p className="mt-2 text-xl leading-none">{plan.title}</p>
        </div>
        <PriceDisplay price={price} size="sm" />
      </div>
    </button>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string>("grow");

  return (
    <section className="w-full overflow-hidden bg-[#fafafa] py-15 md:py-30">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-135">
            <Badge text="Pricing" />
            <h2 className="from-brand-darker/10 to-brand-darker mt-2 bg-linear-to-t bg-clip-text text-[2rem] leading-[1.2] text-transparent md:text-5xl">
              Sustainable Pricing That Grows With You
            </h2>
          </div>
          <p className="text-foreground/70 text-sm leading-[1.4] md:mb-2 md:w-85">
            From data usage to model updates, every layer is designed to sustain
            performance over time — without increasing environmental cost.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between md:mt-12 md:justify-center">
          <p className="text-lg text-black md:hidden">Select Plan</p>
          <div className="flex items-center rounded-full bg-black/2 p-1.5">
            <Button
              variant="toggle"
              active={billing === "monthly"}
              animate={false}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </Button>
            <Button
              variant="toggle"
              active={billing === "annual"}
              animate={false}
              onClick={() => setBilling("annual")}
            >
              Annually
            </Button>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 md:hidden">
          {PLANS.map((plan) => {
            const price = billing === "monthly" ? plan.monthly : plan.annual;
            return (
              <MobilePricingCard
                key={plan.id}
                plan={plan}
                price={price}
                selected={selectedPlan === plan.id}
                onSelect={() => setSelectedPlan(plan.id)}
              />
            );
          })}
        </div>

        <div className="mt-9 hidden grid-cols-3 gap-5 md:grid">
          {PLANS.map((plan) => {
            const price = billing === "monthly" ? plan.monthly : plan.annual;

            const cardContent = (
              <>
                <p className="text-foreground/70 text-sm">{plan.label}</p>
                <h3 className="mt-2 text-2xl leading-none">{plan.title}</h3>
                <PriceDisplay price={price} />
                <p className="text-foreground/70 mt-3 text-sm leading-[1.4]">
                  {plan.description}
                </p>
                <Button
                  variant={plan.featured ? "brand-flat" : "outline"}
                  className="mt-6"
                >
                  {plan.cta}
                </Button>
                <PlanFeatures plan={plan} />
              </>
            );

            if (plan.featured) {
              return (
                <article key={plan.id} className="relative rounded-2xl">
                  <div className="relative z-1 overflow-hidden rounded-2xl border border-black/5 bg-white/95 px-6 py-8">
                    <Image
                      src="/gradient-pricing-bg.svg"
                      alt=""
                      fill
                      className="pointer-events-none object-top-right"
                    />
                    {cardContent}
                  </div>
                  {plan.badge && (
                    <div className="bg-brand absolute -bottom-12 w-full rounded-b-2xl px-4 pt-6.5 pb-3.5 text-center text-sm font-bold text-black/70">
                      {plan.badge}
                    </div>
                  )}
                </article>
              );
            }

            return (
              <article
                key={plan.id}
                className="rounded-2xl border border-black/5 bg-white px-6 py-8"
              >
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
