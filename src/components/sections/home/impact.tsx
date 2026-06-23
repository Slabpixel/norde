import Badge from "@/components/badge";
import Image from "next/image";

export default function Impact() {
    return (
        <section className="py-30 relative overflow-hidden w-full">
            <div className="mx-auto max-w-8xl lg:px-10 md:px-8 sm:px-6 px-4">
                <div className="flex w-full h-full items-center justify-center flex-col gap-20">
                    <div className="flex flex-col gap-2 items-center justify-center text-center">
                        <Badge text="Measured Impact" />
                        <h2 className="text-5xl leading-[1.2] text-transparent bg-clip-text bg-linear-to-b from-brand-darker to-brand-darker/10 max-w-[16em]">Performance proven through efficiency, not excess.</h2>
                        <p className="text-foreground/70 max-w-[36em] mt-4 text-sm leading-[1.4]">From data usage to model updates, every layer is designed to sustain performance over time — without increasing environmental cost.</p>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-3 gap-5 w-full">
                        <div className="p-5 relative min-h-64 font-heading flex flex-col justify-between gap-4 rounded-2xl bg-black/2 border border-black/2">
                            <div className="text-[4rem] leading-[1.2] bg-linear-to-b from-brand-darker to-brand-darker/10 text-transparent bg-clip-text">
                                38<span className="text-brand-dark">%</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-2xl leading-[1.2] font-body">Energy reduction per inference</h3>
                                <p className="text-foreground/70 text-sm leading-[1.2]">Compared to conventional large-scale models.</p>
                            </div>
                        </div>
                        <div style={{ background: "linear-gradient(154deg, #C2ED3F -125.2%, #000 83.49%)" }} className="p-5 relative min-h-64 row-span-3 font-heading flex flex-col gap-6 rounded-2xl bg-black/2 overflow-hidden">
                            <Image src="/card-bg.png" alt="" fill />
                            <div className="text-[4rem] leading-[1.2] bg-linear-to-b from-background to-background/10 text-transparent bg-clip-text">
                                10M<span className="text-brand-dark">+</span>
                            </div>
                            <div className="flex flex-col text-background gap-3">
                                <h3 className="max-w-55 relative text-2xl leading-[1.2] font-body">Low-energy adaptive decisions processed</h3>
                                <p className="max-w-70 text-right absolute bottom-6 right-6 text-sm leading-[1.2]">In various distributed environments, we aim to maintain a minimal footprint while ensuring efficiency and performance.</p>
                            </div>
                        </div>
                        <div className="p-5 relative min-h-64 row-span-2 font-heading flex flex-col justify-between gap-4 rounded-2xl bg-black/2 border border-black/2">
                            <div className="text-[4rem] leading-[1.2] bg-linear-to-b from-brand-darker to-brand-darker/10 text-transparent bg-clip-text">
                                38<span className="text-brand-dark">%</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-2xl leading-[1.2] font-body">Energy reduction per inference</h3>
                                <p className="text-foreground/70 text-sm leading-[1.2]">Compared to conventional large-scale models.</p>
                            </div>
                        </div>
                        <div className="p-5 relative min-h-64 row-span-2 font-heading flex flex-col justify-between gap-4 rounded-2xl bg-black/2 border border-black/2">
                            <div className="text-[4rem] leading-[1.2] bg-linear-to-b from-brand-darker to-brand-darker/10 text-transparent bg-clip-text">
                                38<span className="text-brand-dark">%</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-2xl leading-[1.2] font-body">Energy reduction per inference</h3>
                                <p className="text-foreground/70 text-sm leading-[1.2]">Compared to conventional large-scale models.</p>
                            </div>
                        </div>
                        <div className="p-5 relative min-h-64 font-heading flex flex-col justify-between gap-4 rounded-2xl bg-black/2 border border-black/2">
                            <div className="text-[4rem] leading-[1.2] bg-linear-to-b from-brand-darker to-brand-darker/10 text-transparent bg-clip-text">
                                38<span className="text-brand-dark">%</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-2xl leading-[1.2] font-body">Energy reduction per inference</h3>
                                <p className="text-foreground/70 text-sm leading-[1.2]">Compared to conventional large-scale models.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}