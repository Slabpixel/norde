import Badge from "@/components/badge";
import Image from "next/image";

export default function Why() {
    return (
        <section className="py-75 relative overflow-hidden w-full bg-foreground text-background">

            <Image fill src="/why-bg.png" alt="" className="object-cover object-bottom" />

            {/* blur white rectangle */}
            <div className="bg-background h-46 w-[calc(100%+10rem)] blur-2xl absolute -bottom-25 -left-20">
            </div>
            <div className="bg-background h-46 w-[calc(100%+10rem)] blur-2xl absolute -top-25 -left-20">
            </div>

            <div className="mx-auto max-w-8xl lg:px-10 md:px-8 sm:px-6 px-4">
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-4 w-full h-full">
                    <div className="max-md:mb-11 flex flex-col gap-4 md:gap-6">
                        <Badge text="Why Choose norde" variant="dark" />
                        <h2 className="text-[2rem] md:text-5xl leading-[1.2] text-transparent bg-clip-text bg-linear-to-tl from-transparent to-background max-w-[16em]">
                            Intelligence that adapts & evolves responsibly.
                        </h2>
                    </div>
                    <div style={{ background: "linear-gradient(208deg, rgba(255, 255, 255, 0.00) 13.82%, rgba(194, 237, 63, 0.04) 59.17%, rgba(194, 237, 63, 0.20) 104.25%)" }} className="rounded-[0.625rem] border border-background/10 p-4 md:p-6 h-62.5 md:h-81 flex flex-col justify-between gap-6 backdrop-blur-[10px]">
                        <div className="flex w-full justify-between gap-4">
                            <h3 className="text-base md:text-xl lg:text-2xl md:max-w-56 max-w-40 leading-none font-body">
                                Bio-Inspired AI Architecture
                            </h3>
                            <div style={{ background: "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)" }} className="flex justify-center items-center size-8 md:size-12 rounded-lg border border-brand">
                                <Image src="/seedling.svg" className="max-md:size-3.5" alt="" width={20} height={20} />
                            </div>
                        </div>
                        <p className="text-sm leading-[1.4] max-w-[95%]">Biomax is modeled after living ecosystems — adaptive, interconnected, and efficient by design. It learns and responds without unnecessary resource expansion.</p>
                    </div>
                    <div style={{ background: "linear-gradient(208deg, rgba(255, 255, 255, 0.00) 13.82%, rgba(194, 237, 63, 0.04) 59.17%, rgba(194, 237, 63, 0.20) 104.25%)" }} className="rounded-[0.625rem] border border-background/10 p-4 md:p-6 h-62.5 md:h-81 flex flex-col justify-between gap-6 backdrop-blur-[10px]">
                        <div className="flex w-full justify-between gap-4">
                            <h3 className="text-base md:text-xl lg:text-2xl md:max-w-56 max-w-40 leading-none font-body">
                                Bio-Inspired AI Architecture
                            </h3>
                            <div style={{ background: "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)" }} className="flex justify-center items-center size-8 md:size-12 rounded-lg border border-brand">
                                <Image src="/seedling.svg" className="max-md:size-3.5" alt="" width={20} height={20} />
                            </div>
                        </div>
                        <p className="text-sm leading-[1.4] max-w-[95%]">Biomax is modeled after living ecosystems — adaptive, interconnected, and efficient by design. It learns and responds without unnecessary resource expansion.</p>
                    </div>
                    <div style={{ background: "linear-gradient(208deg, rgba(255, 255, 255, 0.00) 13.82%, rgba(194, 237, 63, 0.04) 59.17%, rgba(194, 237, 63, 0.20) 104.25%)" }} className="rounded-[0.625rem] border border-background/10 p-4 md:p-6 h-62.5 md:h-81 flex flex-col justify-between gap-6 backdrop-blur-[10px]">
                        <div className="flex w-full justify-between gap-4">
                            <h3 className="text-base md:text-xl lg:text-2xl md:max-w-56 max-w-40 leading-none font-body">
                                Bio-Inspired AI Architecture
                            </h3>
                            <div style={{ background: "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)" }} className="flex justify-center items-center size-8 md:size-12 rounded-lg border border-brand">
                                <Image src="/seedling.svg" className="max-md:size-3.5" alt="" width={20} height={20} />
                            </div>
                        </div>
                        <p className="text-sm leading-[1.4] max-w-[95%]">Biomax is modeled after living ecosystems — adaptive, interconnected, and efficient by design. It learns and responds without unnecessary resource expansion.</p>
                    </div>
                    <div className="px-3.5 max-md:row-start-6 max-md:mt-11 flex items-center justify-center text-center">
                        <p className="text-sm opacity-80 max-w-83"><span className="font-bold">From data usage to model updates</span>, every layer is designed to sustain performance over time — without increasing environmental cost.</p>
                    </div>
                    <div style={{ background: "linear-gradient(208deg, rgba(255, 255, 255, 0.00) 13.82%, rgba(194, 237, 63, 0.04) 59.17%, rgba(194, 237, 63, 0.20) 104.25%)" }} className="rounded-[0.625rem] border border-background/10 p-4 md:p-6 h-62.5 md:h-81 flex flex-col justify-between gap-6 backdrop-blur-[10px]">
                        <div className="flex w-full justify-between gap-4">
                            <h3 className="text-base md:text-xl lg:text-2xl md:max-w-56 max-w-40 leading-none font-body">
                                Bio-Inspired AI Architecture
                            </h3>
                            <div style={{ background: "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)" }} className="flex justify-center items-center size-8 md:size-12 rounded-lg border border-brand">
                                <Image src="/seedling.svg" className="max-md:size-3.5" alt="" width={20} height={20} />
                            </div>
                        </div>
                        <p className="text-sm leading-[1.4] max-w-[95%]">Biomax is modeled after living ecosystems — adaptive, interconnected, and efficient by design. It learns and responds without unnecessary resource expansion.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}