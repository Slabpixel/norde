export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url(https://www.figma.com/api/mcp/asset/c034d13b-1095-4ecb-b290-c57a9e665949)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-white blur-[40px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[85%] bg-linear-to-b from-transparent to-foreground" />

      <div className="relative mx-auto max-w-8xl px-4 pb-10 pt-68 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-10 text-center">
          <div className="rounded-full bg-white/15 p-1">
            <div className="rounded-full bg-white/10 px-4 py-1.5 text-base">
              Get Started Now!
            </div>
          </div>
          <h2 className="w-full bg-linear-[24deg,rgba(255,255,255,0)_22.139%,#FFF_59.981%] bg-clip-text text-[min(6vw,4rem)] leading-[1.1] text-transparent">
            Design systems that adapt and evolve responsibly.
          </h2>
          <p className="w-[36rem] text-sm leading-[1.4] text-background/70">
            Rethink intelligence as a balanced system that filters, learns, and
            acts. Reduce load, extend longevity, and create technology in
            harmony with its environment.
          </p>
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/2 p-1.5">
              <span className="flex items-center gap-4 rounded-full bg-brand px-4 py-2 text-base font-medium text-brand-darker shadow-[0_4px_2px_rgba(0,0,0,0.08)]">
                Start 14 day Trial
                <span className="flex size-9 items-center justify-center rounded-full bg-background text-base">
                  →
                </span>
              </span>
            </button>
            <button className="h-12 px-4 text-base text-background/70">
              Explore the System
            </button>
          </div>
        </div>

        <div className="mt-32 flex items-start justify-between">
          <div className="w-[19.25rem]">
            <div className="mb-6 text-[2rem] font-medium leading-none text-brand">
              norde
            </div>
            <p className="text-sm leading-[1.4] text-background/70">
              Adaptive systems enhance efficiency, adjusting to changes and
              ensuring performance. They learn through feedback.
            </p>
          </div>

          <div className="flex gap-25 text-base">
            <div className="space-y-6">
              <p className="text-background/70">Product</p>
              <p>Overview</p>
              <p>How It Works</p>
              <p>Applications</p>
              <p>Pricing</p>
            </div>
            <div className="space-y-6">
              <p className="text-background/70">Company</p>
              <p>About</p>
              <p>Research</p>
              <p>Sustainability</p>
              <p>Careers</p>
            </div>
            <div className="space-y-6">
              <p className="text-background/70">Resources</p>
              <p>Documentation</p>
              <p>API Reference</p>
              <p>Case Studies</p>
              <p>Blog</p>
            </div>
            <div className="space-y-6">
              <p className="text-background/70">Resources</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden">
          <h3 className="text-center text-[22rem] leading-[0.8] tracking-[-0.03em] text-transparent bg-linear-to-b from-white to-transparent bg-clip-text">
            norde
          </h3>
        </div>
      </div>

      <div className="relative flex items-center justify-between bg-brand px-10 py-4 text-sm text-foreground">
        <p className="font-medium">© 2026 Norde, All right reserved</p>
        <div className="flex items-center gap-6 text-lg">
          <span>◎</span>
          <span>𝕏</span>
          <span>f</span>
          <span>♪</span>
        </div>
      </div>
    </footer>
  );
}