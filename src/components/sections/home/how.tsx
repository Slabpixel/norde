import Badge from "@/components/badge";

export default function How() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-30">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex w-full gap-10">
          <div className="w-40 pt-32">
            <p className="w-68 text-sm leading-[1.4] text-foreground/60">
              Norde processes information like natural systems selectively and
              adaptively, with minimal energy waste. Each layer filters noise
              and refines signals.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-12">
            <div className="max-w-[35rem]">
              <Badge text="How it Work" />
              <h2 className="mt-2 bg-linear-to-t from-brand-darker/10 to-brand-darker bg-clip-text text-6xl leading-[1.2] text-transparent">
                An adaptive intelligence modeled after living ecosystems.
              </h2>
            </div>

            <div className="relative flex gap-10">
              <div className="w-48 border-l border-black/5">
                <div className="px-6 py-5 text-base text-foreground/20">
                  Signal Input Layer
                </div>
                <div className="border-l border-brand bg-linear-to-l from-transparent to-brand/10 px-6 py-5 text-base">
                  Adaptive Filter
                </div>
                <div className="px-6 py-5 text-base text-foreground/20">
                  Learning Core
                </div>
                <div className="px-6 py-5 text-base text-foreground/20">
                  Response Layer
                </div>
              </div>

              <div className="relative flex-1 pb-36">
                <div className="rounded-2xl bg-black/2 p-3.5">
                  <div className="h-[460px] overflow-hidden rounded-2xl bg-[#e5e6dd]">
                    <div
                      className="relative h-full w-full rounded-2xl bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url(https://www.figma.com/api/mcp/asset/b1dd7f7d-8864-4ca9-b681-51384a018916)",
                      }}
                    >
                      <div className="absolute left-24 top-8 w-[320px] rounded-xl bg-white/90 p-3 shadow-[0_4px_34px_rgba(0,0,0,0.06)] backdrop-blur">
                        <p className="mb-2 text-xs text-foreground/70">
                          norde beta
                        </p>
                        <div className="space-y-2">
                          <div className="rounded bg-brand/20 p-2 text-[10px] leading-[1.5] text-foreground/70">
                            We&apos;re processing large amounts of environmental
                            data, but our system keeps scaling in cost and
                            energy usage.
                          </div>
                          <div className="rounded bg-black/5 p-2 text-[10px] leading-[1.5] text-foreground/70">
                            Norde filters incoming signals before full
                            computation begins, reducing unnecessary processing
                            and lowering energy demand.
                          </div>
                        </div>
                      </div>
                      <div className="absolute right-30 top-14 w-60 rounded-lg bg-white p-3 shadow-[0_4px_34px_rgba(0,0,0,0.06)]">
                        <p className="text-xs text-foreground/70">
                          Choose AI models
                        </p>
                        <div className="mt-2 rounded-md border border-brand/20 bg-brand/20 p-2 text-[10px] text-foreground/70">
                          Norde Pro 4.2
                        </div>
                        <div className="mt-2 rounded-md bg-black/2 p-2 text-[10px] text-foreground/60">
                          ChatGPT
                        </div>
                        <button className="mt-3 h-7 w-full rounded-full bg-brand text-[10px] font-medium text-brand-darker">
                          Upgrade Plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between px-3.5">
                  <h3 className="text-3xl leading-none">Selective Activation</h3>
                  <p className="w-82 text-sm leading-[1.4] text-foreground/60">
                    Noise and redundant signals are filtered before computation
                    begins. Only meaningful patterns move forward. Efficiency
                    begins with restraint.
                  </p>
                </div>

                <div className="mt-12 rounded-2xl bg-black/2 p-3.5 opacity-60">
                  <div
                    className="h-[220px] rounded-2xl bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(https://www.figma.com/api/mcp/asset/ce497aa0-751b-4cba-8f6e-c4888780f840)",
                    }}
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-linear-to-b from-transparent to-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}