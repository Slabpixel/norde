import Badge from "@/components/badge";
import Image from "next/image";

export default function Why() {
    return (
        <section className="py-75 relative overflow-hidden w-full bg-foreground text-background">
            <Image fill src="/why-bg.png" alt="" className="object-bottom" />
            <div className="mx-auto max-w-8xl lg:px-10 md:px-8 sm:px-6 px-4">
                <div className="grid grid-cols-3 gap-5 w-full h-full">
                    <div className="flex flex-col gap-6">
                        <Badge text="Why Choose norde" variant="dark" />
                        <h2 className="text-5xl leading-[1.2] text-transparent bg-clip-text bg-linear-to-tl from-transparent to-background max-w-[16em]">
                            Intelligence that adapts & evolves responsibly.
                        </h2>
                    </div>
                    <div style={{ background: "linear-gradient(208deg, rgba(255, 255, 255, 0.00) 13.82%, rgba(194, 237, 63, 0.04) 59.17%, rgba(194, 237, 63, 0.20) 104.25%)" }} className="rounded-[0.625rem] border border-background/10 p-6 h-81 flex flex-col justify-between gap-6 backdrop-blur-[10px]">
                        <div className="flex w-full justify-between gap-4">
                            <h3 className="text-2xl max-w-56 leading-none font-body">
                                Bio-Inspired AI Architecture
                            </h3>
                            <div style={{ background: "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)" }} className="flex justify-center items-center size-12 rounded-lg border border-brand">
                                <Image src="/seedling.svg" alt="" width={20} height={20} />
                            </div>
                        </div>
                        <p className="text-sm leading-[1.4] max-w-[95%]">Biomax is modeled after living ecosystems — adaptive, interconnected, and efficient by design. It learns and responds without unnecessary resource expansion.</p>
                    </div>
                    <div style={{ background: "linear-gradient(208deg, rgba(255, 255, 255, 0.00) 13.82%, rgba(194, 237, 63, 0.04) 59.17%, rgba(194, 237, 63, 0.20) 104.25%)" }} className="rounded-[0.625rem] border border-background/10 p-6 h-81 flex flex-col justify-between gap-6 backdrop-blur-[10px]">
                        <div className="flex w-full justify-between gap-4">
                            <h3 className="text-2xl max-w-56 leading-none font-body">
                                Bio-Inspired AI Architecture
                            </h3>
                            <div style={{ background: "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)" }} className="flex justify-center items-center size-12 rounded-lg border border-brand">
                                <Image src="/seedling.svg" alt="" width={20} height={20} />
                            </div>
                        </div>
                        <p className="text-sm leading-[1.4] max-w-[95%]">Biomax is modeled after living ecosystems — adaptive, interconnected, and efficient by design. It learns and responds without unnecessary resource expansion.</p>
                    </div>
                    <div style={{ background: "linear-gradient(208deg, rgba(255, 255, 255, 0.00) 13.82%, rgba(194, 237, 63, 0.04) 59.17%, rgba(194, 237, 63, 0.20) 104.25%)" }} className="rounded-[0.625rem] border border-background/10 p-6 h-81 flex flex-col justify-between gap-6 backdrop-blur-[10px]">
                        <div className="flex w-full justify-between gap-4">
                            <h3 className="text-2xl max-w-56 leading-none font-body">
                                Bio-Inspired AI Architecture
                            </h3>
                            <div style={{ background: "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)" }} className="flex justify-center items-center size-12 rounded-lg border border-brand">
                                <Image src="/seedling.svg" alt="" width={20} height={20} />
                            </div>
                        </div>
                        <p className="text-sm leading-[1.4] max-w-[95%]">Biomax is modeled after living ecosystems — adaptive, interconnected, and efficient by design. It learns and responds without unnecessary resource expansion.</p>
                    </div>
                    <div className="px-3.5 flex items-center justify-center text-center">
                        <p className="text-sm opacity-80 max-w-83"><span className="font-bold">From data usage to model updates</span>, every layer is designed to sustain performance over time — without increasing environmental cost.</p>
                    </div>
                    <div style={{ background: "linear-gradient(208deg, rgba(255, 255, 255, 0.00) 13.82%, rgba(194, 237, 63, 0.04) 59.17%, rgba(194, 237, 63, 0.20) 104.25%)" }} className="rounded-[0.625rem] border border-background/10 p-6 h-81 flex flex-col justify-between gap-6 backdrop-blur-[10px]">
                        <div className="flex w-full justify-between gap-4">
                            <h3 className="text-2xl max-w-56 leading-none font-body">
                                Bio-Inspired AI Architecture
                            </h3>
                            <div style={{ background: "linear-gradient(212deg, #C2ED3F 19.4%, #D4E2A9 95.54%)" }} className="flex justify-center items-center size-12 rounded-lg border border-brand">
                                <Image src="/seedling.svg" alt="" width={20} height={20} />
                            </div>
                        </div>
                        <p className="text-sm leading-[1.4] max-w-[95%]">Biomax is modeled after living ecosystems — adaptive, interconnected, and efficient by design. It learns and responds without unnecessary resource expansion.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}