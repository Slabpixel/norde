import Badge from "@/components/badge";

export default function Pricing() {
  const featuresSeed = [
    "Bio-inspired core engine",
    "Selective signal filtering",
    "Adaptive learning cycles",
    "Basic performance insights",
    "Standard support",
  ];
  const featuresGrow = [
    "Multi-layer learning refinement",
    "Cross-system integrations",
    "Advanced sustainability analytics",
    "Priority processing stability",
    "Team collaboration tools",
  ];
  const featuresEco = [
    "Custom architecture design",
    "Dedicated optimization consultant",
    "Infrastructure efficiency mapping",
    "SLA-backed stability guarantee",
    "Enterprise-grade security",
  ];

  return (
    <section className="w-full overflow-hidden bg-[#fafafa] py-30">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-end justify-between">
          <div className="max-w-[33.8rem]">
            <Badge text="Pricing" />
            <h2 className="mt-2 bg-linear-to-t from-brand-darker/10 to-brand-darker bg-clip-text text-6xl leading-[1.2] text-transparent">
              Sustainable Pricing That Grows With You
            </h2>
          </div>
          <p className="mb-2 w-[21.25rem] text-sm leading-[1.4] text-foreground/70">
            From data usage to model updates, every layer is designed to sustain
            performance over time - without increasing environmental cost.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center rounded-full bg-black/2 p-1.5">
            <button className="h-12 rounded-full bg-brand px-8 text-base font-medium text-brand-darker">
              Monthly
            </button>
            <button className="h-12 rounded-full px-8 text-base font-medium text-brand-darker">
              Annualy
            </button>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-3 gap-5">
          <article className="rounded-2xl border border-black/5 bg-white px-6 py-8">
            <p className="text-sm text-foreground/70">Seed</p>
            <h3 className="mt-2 text-4xl leading-none">For early-stage</h3>
            <p className="mt-5 text-7xl leading-[1.2]">
              <span className="text-brand-dark">$</span>
              <span className="bg-linear-to-t from-brand-darker/10 to-brand-darker bg-clip-text text-transparent">
                29
              </span>
              <span className="text-sm text-foreground/70">/month</span>
            </p>
            <p className="mt-3 text-sm leading-[1.4] text-foreground/70">
              For early-stage teams building adaptive foundations. Up to 3
              adaptive modules, optimized energy processing, standard feedback
              loop.
            </p>
            <div className="mt-6 rounded-full bg-black/2 p-1.5">
              <button className="h-12 w-full rounded-full bg-black/[0.01] text-base font-medium">
                Start Growing
              </button>
            </div>
            <div className="my-6 border-t border-black/5" />
            <p className="text-sm font-bold text-foreground/70">What&apos;s Included:</p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              {featuresSeed.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="text-brand-dark">●</span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-2xl bg-brand">
            <div className="absolute -top-28 left-3/4 h-72 w-72 -translate-x-1/2 rotate-12 rounded-full bg-white/25 blur-xl" />
            <div className="rounded-2xl border border-black/5 bg-white/95 px-6 py-8 shadow-[0_7px_15px_rgba(0,0,0,0.10)]">
              <p className="text-sm text-foreground/70">Grow</p>
              <h3 className="mt-2 text-4xl leading-none">For scaling teams</h3>
              <p className="mt-5 text-7xl leading-[1.2]">
                <span className="text-brand-dark">$</span>
                <span className="bg-linear-to-t from-brand-darker/10 to-brand-darker bg-clip-text text-transparent">
                  49
                </span>
                <span className="text-sm text-foreground/70">/month</span>
              </p>
              <p className="mt-3 text-sm leading-[1.4] text-foreground/70">
                For scaling teams prioritizing efficiency and long-term balance.
                Up to 10 adaptive modules, advanced signal optimization,
                extended stability window.
              </p>
              <div className="mt-6 rounded-full bg-black/2 p-1.5">
                <button className="h-12 w-full rounded-full bg-brand text-base font-medium text-brand-darker shadow-[0_4px_2px_rgba(0,0,0,0.08)]">
                  Start 14 day Trial
                </button>
              </div>
              <div className="my-6 border-t border-black/5" />
              <p className="text-sm font-bold text-foreground/70">
                Everything in Seed, plus:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                {featuresGrow.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-brand-dark">●</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 py-3 text-center text-sm font-bold text-brand-darker/80">
              Best Value for Scale
            </div>
          </article>

          <article className="rounded-2xl border border-black/5 bg-white px-6 py-8">
            <p className="text-sm text-foreground/70">Ecosystem</p>
            <h3 className="mt-2 text-4xl leading-none">For Enterprises</h3>
            <p className="mt-5 text-7xl leading-[1.2]">
              <span className="text-brand-dark">$</span>
              <span className="bg-linear-to-t from-brand-darker/10 to-brand-darker bg-clip-text text-transparent">
                99
              </span>
              <span className="text-sm text-foreground/70">/month</span>
            </p>
            <p className="mt-3 text-sm leading-[1.4] text-foreground/70">
              For enterprises building intelligent, sustainable infrastructure at
              scale. Unlimited adaptive modules, dedicated optimization layer,
              full environmental impact reporting.
            </p>
            <div className="mt-6 rounded-full bg-black/2 p-1.5">
              <button className="h-12 w-full rounded-full bg-black/[0.01] text-base font-medium">
                Start Full Environmental
              </button>
            </div>
            <div className="my-6 border-t border-black/5" />
            <p className="text-sm font-bold text-foreground/70">
              Everything in Grow, plus:
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              {featuresEco.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="text-brand-dark">●</span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}