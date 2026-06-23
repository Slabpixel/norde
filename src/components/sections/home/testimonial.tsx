import Badge from "@/components/badge";

export default function Testimonial() {
  const items = [
    {
      quote:
        "We needed adaptive AI for urban monitoring without expanding hardware capacity. Norde delivered stability without scaling costs.",
      name: "Dr. Elena Morales",
      title: "Head of Sustainable Systems",
      image: "https://www.figma.com/api/mcp/asset/c3c02d56-8200-43b8-ae5e-5b229470c2f9",
    },
    {
      quote:
        "What impressed us most wasn't just the performance it was the restraint. Norde processes only what matters, reducing our infrastructure load significantly.",
      name: "Arjun Patel",
      title: "CTO - UrbanFlow Technologies",
      image: "https://www.figma.com/api/mcp/asset/ccf655f2-e629-46fe-a7c2-fd867dbc6857",
    },
    {
      quote:
        "Unlike conventional AI systems that spike resource usage, Norde maintains consistent processing behavior. That stability is invaluable.",
      name: "Mika Tanaka",
      title: "Lead Researcher - Oceanic Climate Lab",
      image: "https://www.figma.com/api/mcp/asset/266eefe0-60d9-4b21-82f4-fb3593a34c3b",
    },
    {
      quote:
        "In environmental research, energy footprint matters. Norde allowed us to run predictive models continuously without exceeding our sustainability thresholds.",
      name: "Jonas Weber",
      title: "AI Architect - Biomax Systems",
      image: "https://www.figma.com/api/mcp/asset/2b2c9906-fd61-4824-b090-6d43921912d1",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white pb-15 pt-30">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[35.25rem] flex-col items-center gap-2 text-center">
          <Badge text="Testimonials" />
          <h2 className="bg-linear-to-t from-brand-darker/10 to-brand-darker bg-clip-text text-6xl leading-[1.2] text-transparent">
            Sustainable Pricing That Grows With You
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-4 gap-5">
          {items.map((item) => (
            <article
              key={item.name}
              className="flex min-h-[414px] flex-col justify-between rounded-2xl border border-black/5 p-6"
            >
              <div>
                <p className="text-5xl leading-none text-brand">"</p>
                <p className="mt-6 text-[2rem] leading-[1.2]">{item.quote}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-6">
                <div>
                  <p className="text-base font-medium">{item.name}</p>
                  <p className="mt-1 text-sm italic text-foreground/60">{item.title}</p>
                </div>
                <div className="relative size-12 overflow-hidden rounded-lg bg-black/10">
                  <img src={item.image} alt={item.name} className="size-full object-cover" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}