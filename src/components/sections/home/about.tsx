import Image from "next/image";

export default function About() {
  return (
    <section className="w-full overflow-hidden bg-white py-30">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="relative mx-auto flex min-h-70 max-w-4xl items-center justify-center">
          <h2 className="bg-linear-to-t from-brand-darker/10 to-brand-darker bg-clip-text text-center text-[min(5vw,3rem)] leading-[1.2] text-transparent">
            A bio-inspired{" "}
            <span className="inline-block align-middle px-4">
              <Image
                src="/txt-1.svg"
                alt=""
                width={66}
                height={69}
                className="hover:-rotate-12 transition-transform duration-300"
              />
            </span>{" "}
            AI platform focused
            <br />
            on efficiency, sustainability{" "}
            <span className="inline-block align-middle px-4">
              <Image
                src="/txt-2.svg"
                alt=""
                width={66}
                height={69}
                className="hover:rotate-12 transition-transform duration-300"
              />
            </span>{" "}
            and adaptive systems.
          </h2>
        </div>
      </div>
    </section>
  );
}