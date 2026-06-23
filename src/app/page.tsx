import Hero from "@/components/sections/home/hero";
import Impact from "@/components/sections/home/impact";
import Why from "@/components/sections/home/why";
import How from "@/components/sections/home/how";
import About from "@/components/sections/home/about";
import Pricing from "@/components/sections/home/pricing";
import Testimonial from "@/components/sections/home/testimonial";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Impact />
        <Why />
        <How />
        <About />
        <Pricing />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
}
