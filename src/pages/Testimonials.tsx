import { Star } from "lucide-react";

const testimonials = [
  { name: "Ahmed Al-Rashid", company: "Gulf Trade Corp", text: "Tanmia Foods delivers consistent quality every time. Their banana chips and murukku are bestsellers in our stores.", rating: 5 },
  { name: "Priya Nair", company: "Kerala Snack House", text: "The hygiene standards are top-notch. We've been sourcing from Tanmia for over two years and the quality has never dropped.", rating: 5 },
  { name: "Mohammed Faisal", company: "Lamis Distributors", text: "Their private labeling service is seamless. Great packaging, great taste — our customers love it.", rating: 4 },
  { name: "Sarah Johnson", company: "Exotic Imports UK", text: "Finding an Indian snack manufacturer who meets export standards was tough — until we found Tanmia Foods.", rating: 5 },
  { name: "Rajesh Kumar", company: "Spice Mart India", text: "Premium quality at competitive prices. The Malabar Murukku is our top seller by far.", rating: 5 },
  { name: "Fatima Hassan", company: "Laziz Foods ME", text: "Reliable partner for our private label range. Consistent taste and on-time delivery.", rating: 4 },
];

const Testimonials = () => (
  <main className="pt-16">
    <section className="gradient-hero section-padding text-primary-foreground text-center">
      <div className="container-narrow max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Trust</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">What Our Partners Say</h1>
        <p className="opacity-90">Real feedback from distributors, retailers, and export partners.</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-lg border border-border p-6 card-hover"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={16}
                    className={s < t.rating ? "fill-gold text-gold" : "text-border"}
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Testimonials;
