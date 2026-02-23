import { Link } from "react-router-dom";
import { Award, ShieldCheck, Package, Utensils } from "lucide-react";

const whyUs = [
  {
    icon: Award,
    title: "Premium Ingredients",
    desc: "We carefully source high-quality raw materials to ensure exceptional flavour and superior product integrity."
  },
  {
    icon: ShieldCheck,
    title: "Hygienic & Controlled Production",
    desc: "Our modern facility operates under stringent food safety and sanitation protocols, maintaining consistent quality in every batch."
  },
  {
    icon: Package,
    title: "Private Label & Export Expertise",
    desc: "End-to-end private labeling, custom branding, and export-compliant packaging tailored for global markets."
  },
  {
    icon: Utensils,
    title: "Consistency You Can Trust",
    desc: "Standardized processes ensure authentic taste and uniform quality across every production run."
  },
];

const About = () => (
  <main className="pt-16">
    {/* Hero Section */}
    <section className="gradient-hero section-padding text-primary-foreground text-center">
      <div className="container-narrow max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">
          Our Story
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          About Tanmia Foods
        </h1>
        <p className="opacity-90">
          Rooted in tradition. Crafted for the modern market.
        </p>
      </div>
    </section>

    {/* About Content */}
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <div className="prose prose-lg mx-auto text-muted-foreground space-y-6 text-center md:text-left">
          <p>
            <strong className="text-foreground">Tanmia Foods</strong> is a leading food manufacturing company based in Mangalore, specializing in authentic Indian snacks and savouries. We combine time-honoured recipes with advanced, food-grade production technologies to create products that meet the highest domestic and international quality standards.
          </p>

          <p>
            Our commitment to excellence begins with our ingredients. We use only premium edible oil under a strict single-use policy, ensuring every product retains its freshness, purity, and authentic taste free from degraded fats. From our hygienic manufacturing facility to our export-ready packaging systems, every stage of production reflects our uncompromising approach to quality.
          </p>

          <p>
            With brands such as <strong className="text-foreground">Lamis</strong> and <strong className="text-foreground">Laziz</strong> already established in international markets, we have earned a reputation for reliability, consistency, and superior taste. Today, Tanmia Foods stands as a trusted partner for private labeling, custom branding, and scalable snack manufacturing solutions.
          </p>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
            Our Advantages
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((item) => (
            <div
              key={item.title}
              className="bg-background rounded-lg p-6 text-center card-hover border border-border"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <item.icon className="text-gold" size={26} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.desc}
              </p>
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