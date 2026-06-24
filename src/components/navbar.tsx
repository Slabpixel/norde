import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-4 left-0 right-0 w-full z-50 px-4">
            <div className="mx-auto max-w-207 rounded-full bg-foreground/2 p-1 md:p-2.5">
                <div className="grid items-center md:grid-cols-3 grid-cols-2 bg-foreground max-md:pr-5 p-3 pl-5 rounded-full shadow-[0_4px_5.9px_0_rgba(0,0,0,0.25)]">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
                    </Link>
                    <div className="flex max-md:hidden items-center justify-center gap-8 text-background/70">
                        <Link href="/" className="text-background hover:text-brand transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-brand transition-colors">About</Link>
                        <Link href="/pricing" className="hover:text-brand transition-colors">Pricing</Link>
                        <Link href="/contact" className="hover:text-brand transition-colors">Contact</Link>
                    </div>
                    <button className="place-self-end max-md:hidden rounded-full bg-background px-4.5 py-3 cursor-pointer leading-none w-fit">
                        Get Started
                    </button>
                    <button className="md:hidden place-self-end h-full">
                        <Image src="/bars.svg" alt="" width={22} height={22} />
                    </button>
                </div>
            </div>
        </nav>
    );
}