import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-338 h-dvh w-full py-45">
        <div className="absolute inset-0">
          <Image src="/hero-bg.png" alt="Background" fill />
        </div>
        <div className="relative mx-auto lg:px-10 md:px-8 sm:px-6 px-4 h-full">
          <div className="flex gap-14 flex-col h-full items-center">
            <div className="flex gap-6 flex-col items-center justify-center">
              <div className="p-1 bg-foreground/2 rounded-full">
                <div className="pl-2 pr-4 py-1.5 bg-background rounded-full flex items-center gap-2 shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]">
                  <Image src="/badge.svg" alt="Badge" width={16} height={16} />
                  <span className="text-center text-foreground leading-none">
                    Powered by nature
                  </span>
                </div>
              </div>
              <h1 className="text-[8vw] max-w-[8em] text-transparent bg-clip-text leading-[0.95] text-center bg-linear-to-b from-brand-darker to-brand-darker/10">Intelligence doesn&apos;t have to <span className="italic font-serif tracking-[-0.04em]">be loud</span></h1>
            </div>
            <div className="flex gap-4 items-center">
              <button className="p-1.5 rounded-full bg-foreground/2 cursor-pointer">
                <div className="py-2 bg-brand pl-5 pr-2.5 rounded-full flex items-center gap-4.5 shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]">
                  <span className="text-center font-medium text-foreground leading-none">
                    Start 14 day Trial
                  </span>
                  <div className="size-9 bg-background rounded-full flex items-center justify-center">
                    <Image src="/arrow.svg" alt="Arrow Right" width={16} height={14} />
                  </div>
                </div>
              </button>
              <button className="flex items-center justify-center h-12.5 py-2 px-4.5 opacity-70">
                Explore the System
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
