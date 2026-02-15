import { Link } from "react-router-dom";
import { Shield, Droplets, Leaf, Award, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";

const qualityItems = [
  { icon: Droplets, title: "Premium Edible Oil", desc: "Only high-grade oil used in every batch." },
  { icon: Shield, title: "Single-Use Oil", desc: "Fresh oil for every production run — zero reuse." },
  { icon: Leaf, title: "Strict Hygiene", desc: "Sanitized facilities & safety-first protocols." },
  { icon: Award, title: "Modern QC", desc: "Traditional recipes with modern quality control." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Traditional Indian snacks" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="relative container-narrow section-padding text-primary-foreground">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
              Since Tradition Meets Quality
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Authentic Taste.<br />
              <span className="text-gradient-gold">Premium Quality.</span><br />
              Trusted Manufacturing.
            </h1>
            <p className="text-base md:text-lg opacity-90 leading-relaxed mb-8 max-w-lg">
              Crafted with high-quality single-use oil, strict hygiene standards, and a commitment to authentic flavors — ready for India and the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md gradient-gold text-gold-foreground font-semibold transition-transform hover:scale-105"
              >
                View Products <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/918553245274?text=Hello%20Tanmia%20Foods%2C%20I'm%20interested%20in%20your%20products%20and%20would%20like%20to%20get%20a%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-primary-foreground/40 text-primary-foreground font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                Get a Quote on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Our Range</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Featured Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold transition-transform hover:scale-105"
            >
              See All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quality & Hygiene */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Our Promise</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Quality & Hygiene</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityItems.map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-lg p-6 text-center card-hover border border-border"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <item.icon className="text-accent" size={26} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Label / Rebranding */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Partnership</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Private Labeling & Export Branding
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We offer complete private labeling solutions — from custom packaging to export-grade branding. Our snacks are already trusted under names like <strong className="text-foreground">Lamis</strong> and <strong className="text-foreground">Laziz</strong> in international markets.
              </p>
              <div className="flex flex-col gap-4">
                {["Custom Packaging Design", "Export-Ready Compliance", "Private Label Production", "Brand Consultation"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full gradient-gold text-gold-foreground flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary rounded-xl p-10 text-center">
              <div className="space-y-6">
                {["Lamis", "Laziz"].map((brand) => (
                  <div key={brand} className="bg-background rounded-lg p-6 border border-border">
                    <p className="font-heading text-2xl font-bold text-primary">{brand}</p>
                    <p className="text-sm text-muted-foreground mt-1">Export Brand</p>
                  </div>
                ))}
                <p className="text-sm text-muted-foreground">Your brand could be next →</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero section-padding text-primary-foreground text-center">
        <div className="container-narrow max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="opacity-90 mb-8">
            Whether you're a retailer, distributor, or looking for private-label manufacturing — let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md gradient-gold text-gold-foreground font-semibold transition-transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/918553245274?text=Hello%20Tanmia%20Foods%2C%20I'm%20interested%20in%20your%20products%20and%20would%20like%20to%20get%20a%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md border-2 border-primary-foreground/40 font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
