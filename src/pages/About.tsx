import { Link } from "react-router-dom";
import { Award, ShieldCheck, Package, Utensils } from "lucide-react";

const whyUs = [
  { icon: Award, title: "Premium Ingredients", desc: "We source only the finest raw materials for every product." },
  { icon: ShieldCheck, title: "Hygienic Production", desc: "Our facility follows strict food safety and sanitation protocols." },
  { icon: Package, title: "Custom Branding & Export", desc: "Private labeling and export-compliant packaging available." },
  { icon: Utensils, title: "Consistent Taste", desc: "Every batch is crafted to deliver the same authentic flavor." },
];

const About = () => (
  <main className="pt-16">
    <section className="gradient-hero section-padding text-primary-foreground text-center">
      <div className="container-narrow max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Our Story</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About Tanmia Foods</h1>
        <p className="opacity-90">
          Rooted in tradition, built for the modern market.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <div className="prose prose-lg mx-auto text-muted-foreground space-y-5 text-center md:text-left">
          <p>
            <strong className="text-foreground">Tanmia Foods</strong> is a food manufacturing company based in Mangalore, Karnataka, specializing in authentic Indian snacks and savories. We blend time-honored recipes with modern food-grade production processes to deliver products that meet both domestic and international quality standards.
          </p>
          <p>
            Our commitment begins with the oil — we use only premium edible oil and follow a strict single-use policy, ensuring every product tastes fresh and is free from degraded fats. From our hygienic production facility to our export-ready packaging, every step reflects our dedication to quality.
          </p>
          <p>
            With brands like <strong className="text-foreground">Lamis</strong> and <strong className="text-foreground">Laziz</strong> already reaching international markets, Tanmia Foods is your trusted partner for private labeling, custom branding, and large-scale snack manufacturing.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Advantages</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((item) => (
            <div key={item.title} className="bg-background rounded-lg p-6 text-center card-hover border border-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <item.icon className="text-gold" size={26} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold transition-transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default About;
