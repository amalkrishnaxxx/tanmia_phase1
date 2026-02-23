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
            className="bg-background rounded-xl max-w-md w-full p-6 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>
            <div className="aspect-video bg-secondary rounded-lg mb-4 flex items-center justify-center">
              {/* <span className="font-heading text-xl text-muted-foreground/40">{selected.name}</span> */}
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover transition-transform duration-300"
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
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;
