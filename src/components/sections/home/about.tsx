export default function About() {
  return (
    <section className="w-full overflow-hidden bg-white py-30">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="relative mx-auto flex min-h-70 max-w-7xl items-center justify-center">
          <h2 className="bg-linear-to-t from-brand-darker/10 to-brand-darker bg-clip-text text-center text-[min(5vw,4rem)] leading-[1.2] text-transparent">
            A bio-inspired{" "}
            <span className="inline-flex size-14 -translate-y-1 rotate-9 items-center justify-center rounded-xl border border-brand bg-linear-[213deg,#C2ED3F_19.4%,#D4E2A9_95.54%] text-[1.6rem]">
              <span className="-rotate-12">🍃</span>
            </span>{" "}
            AI platform focused
            <br />
            on efficiency, sustainability{" "}
            <span className="inline-flex size-14 -translate-y-1 -rotate-9 items-center justify-center rounded-xl border border-brand bg-linear-[213deg,#C2ED3F_19.4%,#D4E2A9_95.54%] text-[1.5rem]">
              ⚖️
            </span>{" "}
            and adaptive systems.
          </h2>
        </div>
      </div>
    </section>
  );
}