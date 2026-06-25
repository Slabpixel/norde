import Link from "next/link";
import Image from "next/image";
import Button from "./button";

export default function Navbar() {
  return (
    <nav className="fixed top-4 right-0 left-0 z-50 w-full px-4">
      <div className="bg-foreground/2 mx-auto max-w-207 rounded-full p-1 md:p-2.5">
        <div className="bg-foreground md:grid flex justify-between items-center rounded-full p-3 pl-5 shadow-[0_4px_5.9px_0_rgba(0,0,0,0.25)] max-md:pr-5 md:grid-cols-3">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </Link>
          <div className="text-background/70 flex items-center justify-center gap-8 max-md:hidden">
            <Link
              href="/"
              className="text-background hover:text-brand transition-colors"
            >
              Home
            </Link>
            <Link href="/about" className="hover:text-brand transition-colors">
              About
            </Link>
            <Link
              href="/pricing"
              className="hover:text-brand transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="hover:text-brand transition-colors"
            >
              Contact
            </Link>
          </div>
          <Button variant="nav" className="place-self-end">
            Get Started
          </Button>
          <Button
            variant="chip-icon"
            animate={false}
            className="md:hidden"
            innerClassName="size-auto border-none bg-transparent"
            icon={<Image src="/bars.svg" alt="" width={22} height={22} />}
          />
        </div>
      </div>
    </nav>
  );
}
