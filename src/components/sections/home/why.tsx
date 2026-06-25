import Badge from "@/components/badge";
import Image from "next/image";

export default function Why() {
  return (
    <section className="bg-foreground text-background relative w-full overflow-hidden py-75">
      <Image
        fill
        src="/why-bg.png"
        alt=""
        className="object-cover object-bottom"
      />

      {/* blur white rectangle */}
      <div className="bg-background absolute -bottom-25 -left-20 h-46 w-[calc(100%+10rem)] blur-2xl"></div>
      <div className="bg-background absolute -top-25 -left-20 h-46 w-[calc(100%+10rem)] blur-2xl"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          <div className="flex flex-col gap-4 max-md:mb-11 md:gap-6">
            <Badge text="Why Choose norde" variant="dark" />
            <h2 className="to-background max-w-[16em] bg-linear-to-tl from-transparent bg-clip-text text-[2rem] leading-[1.2] text-transparent md:text-5xl">
              Intelligence that adapts & evolves responsibly.
            </h2>
          </div>
          <div
            style={{
              background:
                "linear-gradient(208deg, rgba(255, 255, 255, 0.00) 13.82%, rgba(194, 237, 63, 0.04) 59.17%, rgba(194, 237, 63, 0.20) 104.25%)",
            }}
            className="border-background/10 flex h-62.5 flex-col justify-between gap-6 rounded-[0.625rem] border p-4 backdrop-blur-[10px] md:h-81 md:p-6"
          >
            <div className="flex w-full justify-between gap-4">
              <h3 className="font-body max-w-40 text-base leading-none md:max-w-56 md:text-xl lg:text-2xl">
                Bio-Inspired AI Architecture
              </h3>
              <div
                style={{
                  background:
                    "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)",
                }}
                className="border-brand flex size-8 items-center justify-center rounded-lg border md:size-12"
              >
                <Image
                  src="/seedling.svg"
                  className="max-md:size-3.5"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <p className="max-w-[95%] text-sm leading-[1.4]">
              Biomax is modeled after living ecosystems — adaptive,
              interconnected, and efficient by design. It learns and responds
              without unnecessary resource expansion.
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(208deg, rgba(255, 255, 255, 0.00) 13.82%, rgba(194, 237, 63, 0.04) 59.17%, rgba(194, 237, 63, 0.20) 104.25%)",
            }}
            className="border-background/10 flex h-62.5 flex-col justify-between gap-6 rounded-[0.625rem] border p-4 backdrop-blur-[10px] md:h-81 md:p-6"
          >
            <div className="flex w-full justify-between gap-4">
              <h3 className="font-body max-w-40 text-base leading-none md:max-w-56 md:text-xl lg:text-2xl">
                Bio-Inspired AI Architecture
              </h3>
              <div
                style={{
                  background:
                    "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)",
                }}
                className="border-brand flex size-8 items-center justify-center rounded-lg border md:size-12"
              >
                <Image
                  src="/seedling.svg"
                  className="max-md:size-3.5"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <p className="max-w-[95%] text-sm leading-[1.4]">
              Biomax is modeled after living ecosystems — adaptive,
              interconnected, and efficient by design. It learns and responds
              without unnecessary resource expansion.
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(208deg, rgba(255, 255, 255, 0.00) 13.82%, rgba(194, 237, 63, 0.04) 59.17%, rgba(194, 237, 63, 0.20) 104.25%)",
            }}
            className="border-background/10 flex h-62.5 flex-col justify-between gap-6 rounded-[0.625rem] border p-4 backdrop-blur-[10px] md:h-81 md:p-6"
          >
            <div className="flex w-full justify-between gap-4">
              <h3 className="font-body max-w-40 text-base leading-none md:max-w-56 md:text-xl lg:text-2xl">
                Bio-Inspired AI Architecture
              </h3>
              <div
                style={{
                  background:
                    "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)",
                }}
                className="border-brand flex size-8 items-center justify-center rounded-lg border md:size-12"
              >
                <Image
                  src="/seedling.svg"
                  className="max-md:size-3.5"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <p className="max-w-[95%] text-sm leading-[1.4]">
              Biomax is modeled after living ecosystems — adaptive,
              interconnected, and efficient by design. It learns and responds
              without unnecessary resource expansion.
            </p>
          </div>
          <div className="flex items-center justify-center px-3.5 text-center max-md:row-start-6 max-md:mt-11">
            <p className="max-w-83 text-sm opacity-80">
              <span className="font-bold">
                From data usage to model updates
              </span>
              , every layer is designed to sustain performance over time —
              without increasing environmental cost.
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(208deg, rgba(255, 255, 255, 0.00) 13.82%, rgba(194, 237, 63, 0.04) 59.17%, rgba(194, 237, 63, 0.20) 104.25%)",
            }}
            className="border-background/10 flex h-62.5 flex-col justify-between gap-6 rounded-[0.625rem] border p-4 backdrop-blur-[10px] md:h-81 md:p-6"
          >
            <div className="flex w-full justify-between gap-4">
              <h3 className="font-body max-w-40 text-base leading-none md:max-w-56 md:text-xl lg:text-2xl">
                Bio-Inspired AI Architecture
              </h3>
              <div
                style={{
                  background:
                    "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)",
                }}
                className="border-brand flex size-8 items-center justify-center rounded-lg border md:size-12"
              >
                <Image
                  src="/seedling.svg"
                  className="max-md:size-3.5"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <p className="max-w-[95%] text-sm leading-[1.4]">
              Biomax is modeled after living ecosystems — adaptive,
              interconnected, and efficient by design. It learns and responds
              without unnecessary resource expansion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
