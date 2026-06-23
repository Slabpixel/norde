import Image from "next/image";
import Badge from "@/components/badge";

export default function Hero() {
    return (
        <section className="relative min-h-338 h-dvh w-full py-45 overflow-hidden">
            
            <div className="absolute inset-0">
                <Image src="/hero-bg.png" alt="Background" fill />
            </div>

            <div className="bg-background h-46 w-[calc(100%+10rem)] blur-2xl absolute -bottom-25 -left-20">
            </div>

            <div className="relative mx-auto lg:px-10 md:px-8 sm:px-6 px-4 h-full">
                <div className="flex gap-13.5 flex-col h-full items-center">
                    <div className="flex gap-6 flex-col items-center justify-center">
                        <Badge />
                        <h1 className="text-[min(8vw,7.5rem)] max-w-[8em] text-transparent bg-clip-text leading-[0.95] text-center bg-linear-to-b from-brand-darker to-brand-darker/10">Intelligence doesn&apos;t have to <span className="italic font-serif tracking-[-0.04em]">be loud</span></h1>
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
                    <div className="flex flex-col gap-2 w-full max-w-225">
                        <div style={{ background: "linear-gradient(276deg, rgba(139, 173, 36, 0.20) 24.99%, rgba(194, 237, 63, 0.20) 93.69%)" }} className="p-2 pb-4 flex flex-col gap-4 rounded-[1.375rem] backdrop-blur-[14px] border border-background/10">
                            <div className="bg-background p-4 rounded-2xl flex flex-col gap-4">
                                <textarea placeholder="Ask anything you want.. 😁" className="resize-none w-full rounded-lg h-30 focus:outline-none focus:ring-0" />
                                <div className="flex gap-2.5 justify-between">
                                    <div className="flex gap-2.5">
                                        <button className="p-2.5 size-10 rounded-full bg-brand-light bg-black/2 border border-black/2 hover:bg-black/5 transition-colors duration-150 cursor-pointer flex gap-2.5 items-center justify-center">
                                            <Image src="/paperclip.svg" alt="" width={14} height={14} />
                                        </button>
                                        <button className="py-2.5 px-3.5 h-10 rounded-full bg-brand-light bg-black/2 border border-black/2 hover:bg-black/5 transition-colors duration-150 cursor-pointer flex gap-2.5 items-center justify-center">
                                            <Image src="/image.svg" alt="" width={14} height={14} />
                                            <span className="text-sm text-black/50">
                                                Create an image
                                            </span>
                                        </button>
                                        <button className="py-2.5 px-3.5 h-10 rounded-full bg-brand-light bg-black/2 border border-black/2 hover:bg-black/5 transition-colors duration-150 cursor-pointer flex gap-2.5 items-center justify-center">
                                            <Image src="/globe.svg" alt="" width={14} height={14} />
                                            <span className="text-sm text-black/50">
                                                Search the web
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <button className="flex gap-1.5 hover:opacity-80 transition-opacity duration-150 cursor-pointer items-center justify-center">
                                    <Image src="/stars.svg" alt="" width={14} height={14} />
                                    <span className="text-sm text-background font-medium">
                                        Saved prompts
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 p-2 rounded-[0.875rem] bg-brand-light backdrop-blur-[14px] border border-background/10 gap-2">
                            <div style={{ background: "linear-gradient(204deg, rgba(255, 255, 255, 0.20) 12.12%, rgba(194, 237, 63, 0.20) 47.18%, rgba(194, 237, 63, 0.20) 82.04%)" }} className="w-full h-full rounded-[0.625rem] backdrop-blur-[10px] flex flex-col gap-4 p-4">
                                <Image src="/layer-group.svg" alt="" width={16} height={16} />
                                <div className="flex flex-col gap-2 text-background leading-tight">
                                    <div className="font-medium">Smart Budgeting</div>
                                    <div className="text-background/70">
                                        Data streams optimize flow, reducing friction.
                                    </div>
                                </div>
                            </div>
                            <div style={{ background: "linear-gradient(204deg, rgba(255, 255, 255, 0.20) 12.12%, rgba(194, 237, 63, 0.20) 47.18%, rgba(194, 237, 63, 0.20) 82.04%)" }} className="w-full h-full rounded-[0.625rem] backdrop-blur-[10px] flex flex-col gap-4 p-4">
                                <Image src="/layer-group.svg" alt="" width={16} height={16} />
                                <div className="flex flex-col gap-2 text-background leading-tight">
                                    <div className="font-medium">Creative Brainstorm</div>
                                    <div className="text-background/70">
                                        Data streams optimize flow, reducing friction.
                                    </div>
                                </div>
                            </div>
                            <div style={{ background: "linear-gradient(204deg, rgba(255, 255, 255, 0.20) 12.12%, rgba(194, 237, 63, 0.20) 47.18%, rgba(194, 237, 63, 0.20) 82.04%)" }} className="w-full h-full rounded-[0.625rem] backdrop-blur-[10px] flex flex-col gap-4 p-4">
                                <Image src="/layer-group.svg" alt="" width={16} height={16} />
                                <div className="flex flex-col gap-2 text-background leading-tight">
                                    <div className="font-medium">Smart Budgeting</div>
                                    <div className="text-background/70">
                                        Data streams optimize flow, reducing friction.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}