import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, type Product } from "@/data/products";
import { X } from "lucide-react";

const Products = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="gradient-hero section-padding text-primary-foreground text-center">
        <div className="container-narrow max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Explore</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="opacity-90">
            Handcrafted traditional snacks made with premium single-use oil and authentic recipes.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onView={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-background w-[92%] sm:max-w-md mx-auto rounded-2xl p-6 relative animate-scale-in shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="aspect-video bg-secondary rounded-xl mb-5 overflow-hidden">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Title */}
            <h2 className="font-heading text-xl sm:text-2xl font-bold mb-2">
              {selected.name}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              {selected.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/918553245274?text=Hello%20Tanmia%20Foods%2C%20I'm%20interested%20in%20your%20products%20and%20would%20like%20to%20get%20a%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center inline-flex justify-center items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-all hover:scale-[1.03] active:scale-95"
              >
                Enquire via WhatsApp
              </a>

              <a
                href="mailto:tanmiafoods@gmail.com?subject=Product Enquiry - Tanmia Foods&body=Hello Tanmia Foods,%0A%0AI am interested in your products and would like to get more details.%0A%0ARegards,"
                className="flex-1 text-center inline-flex justify-center items-center gap-2 px-5 py-3 rounded-lg border border-accent bg-transparent text-accent font-semibold text-sm transition-all hover:bg-accent hover:text-accent-foreground active:scale-95"
              >
                Enquire via Email
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;
