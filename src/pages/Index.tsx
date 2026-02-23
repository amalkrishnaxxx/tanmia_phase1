import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Droplets, Leaf, Award, ArrowRight, X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";
import lamis1 from "@/assets/Brands/lamis_1.png";
import lamis2 from "@/assets/Brands/lamis_2.png";
import lamis3 from "@/assets/Brands/lamis_3.png";

import laziz1 from "@/assets/Brands/laziz_1.png";
import laziz2 from "@/assets/Brands/laziz_2.png";
import laziz3 from "@/assets/Brands/laziz_3.png";
import laziz4 from "@/assets/Brands/laziz_4.png";
import laziz5 from "@/assets/Brands/laziz_5.png";

const qualityItems = [
  { icon: Droplets, title: "Premium Edible Oil", desc: "Only high-grade oil used in every batch." },
  { icon: Shield, title: "Single-Use Oil", desc: "Fresh oil for every production run — zero reuse." },
  { icon: Leaf, title: "Strict Hygiene", desc: "Sanitized facilities & safety-first protocols." },
  { icon: Award, title: "Modern QC", desc: "Traditional recipes with modern quality control." },
];

const Index = () => {
  const [selected, setSelected] = useState(null);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Traditional Indian snacks" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>
        <div className="relative container-narrow section-padding text-primary-foreground w-full">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold mb-3 sm:mb-4">
              Since Tradition Meets Quality
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Rooted in Tradition.<br />
              <span className="text-gradient-gold">Perfected for Today.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Authentic Taste. Finest Ingredients. Uncompromising Quality.
              <br /><br />
              Every batch is thoughtfully crafted using high-quality single-use oil and prepared in world-class, hygienic facilities. We honour time-tested recipes while embracing modern standards to deliver rich, authentic flavours with exceptional consistency proudly made in India, ready for the world.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md gradient-gold text-gold-foreground font-semibold transition-transform hover:scale-105 text-sm sm:text-base"
              >
                View Products <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:tanmiafoods@gmail.com?subject=Quotation%20Request&body=Hello%20Tanmia%20Foods,%0A%0AI%20am%20interested%20in%20your%20products%20and%20would%20like%20to%20receive%20a%20quotation.%0A%0AThank%20you."
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border-2 border-primary-foreground/40 text-primary-foreground font-semibold transition-colors hover:bg-primary-foreground/10 text-sm sm:text-base"
              >
                Get a Quote via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold mb-2">Our Range</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">Featured Products</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onView={setSelected}
              />
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold transition-transform hover:scale-105 text-sm sm:text-base"
            >
              See All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quality & Hygiene */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-2">Our Promise</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">Quality & Hygiene</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {qualityItems.map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-lg p-4 sm:p-6 text-center card-hover border border-border"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <item.icon className="text-accent" size={22} />
                </div>
                <h3 className="font-heading font-semibold text-sm sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Label / Rebranding */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold mb-2">
                Strategic Partnerships
              </p>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Private Label & Export Branding Solutions
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                We provide end-to-end private labeling and export branding services designed to help your brand succeed in competitive global markets. From bespoke packaging design to full export compliance, we ensure your products are retail-ready and market-positioned for success.
                <br /><br />
                Our snacks are proudly trusted in international markets, including Dubai, under established brands such as <strong className="text-foreground">Lamis</strong> and <strong className="text-foreground">Laziz</strong>, a testament to our quality, reliability, and manufacturing excellence.
              </p>

              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  "Custom Packaging & Design Solutions – Tailored, market-focused packaging that elevates shelf presence.",
                  "Export-Ready Compliance – Documentation, labeling, and standards aligned with international regulations.",
                  "Scalable Private Label Production – Consistent quality with flexible production capacity.",
                  "Brand Strategy & Consultation – Expert guidance to strengthen positioning and market entry."
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full gradient-gold text-gold-foreground flex items-center justify-center text-xs sm:text-sm font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-medium text-sm sm:text-base leading-relaxed">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — must not overflow its grid cell */}
            <div className="min-w-0 bg-secondary rounded-xl p-5 sm:p-10 text-center">
              <div className="space-y-5 sm:space-y-8">
                {[
                  { name: "Lamis", images: [lamis1, lamis2, lamis3] },
                  { name: "Laziz", images: [laziz1, laziz2, laziz3] },
                ].map((brand) => (
                  <div
                    key={brand.name}
                    className="bg-background rounded-lg p-4 sm:p-6 border border-border space-y-3 sm:space-y-4"
                  >
                    <p className="font-heading text-xl sm:text-2xl font-bold text-primary">
                      {brand.name}
                    </p>

                    {/* Scroll container — overflow-x-auto here, clipped by parent */}
                    <div className="overflow-x-auto pb-2 -mx-1 px-1">
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {brand.images.map((img, index) => (
                          <div
                            key={index}
                            className="aspect-[4/6] rounded-lg overflow-hidden border border-border"
                          >
                            <img
                              src={img}
                              alt={`${brand.name} ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Your brand could be next →
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero section-padding text-primary-foreground text-center">
        <div className="container-narrow max-w-2xl px-4">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Partner with Us?</h2>
          <p className="opacity-90 mb-6 sm:mb-8 text-sm sm:text-base">
            Whether you're a retailer, distributor, or looking for private-label manufacturing, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md gradient-gold text-gold-foreground font-semibold transition-transform hover:scale-105 text-sm sm:text-base"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/918553245274?text=Hello%20Tanmia%20Foods%2C%20I'm%20interested%20in%20your%20products%20and%20would%20like%20to%20get%20a%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md border-2 border-primary-foreground/40 font-semibold transition-colors hover:bg-primary-foreground/10 text-sm sm:text-base"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-background rounded-xl max-w-md w-full p-6 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>
            <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-2">{selected.name}</h2>
            <p className="text-muted-foreground mb-4">{selected.description}</p>
            <a
              href="https://wa.me/918553245274?text=Hello%20Tanmia%20Foods%2C%20I'm%20interested%20in%20your%20products%20and%20would%20like%20to%20get%20a%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-semibold text-sm transition-transform hover:scale-105"
            >
              Enquire on WhatsApp
            </a>
            <a
              href="mailto:tanmiafoods@gmail.com?subject=Product Enquiry - Tanmia Foods&body=Hello Tanmia Foods,%0A%0AI am interested in your products and would like to get more details.%0A%0ARegards,"
              className="ml-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-semibold text-sm transition-transform hover:scale-105"
            >
              Enquire via Email
            </a>
          </div>
        </div>
      )}
    </main>
  );
};

export default Index;