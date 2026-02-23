import { products, type Product } from "@/data/products";
import { Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onView?: (product: Product) => void;
}

const ProductCard = ({ product, onView }: ProductCardProps) => (
  <div className="group bg-card rounded-lg border border-border overflow-hidden card-hover">
    {/* Image placeholder */}
    <div className="relative aspect-square bg-secondary overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button
          onClick={() => onView?.(product)}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary-foreground text-primary font-semibold text-sm transform scale-90 group-hover:scale-100 transition-transform duration-300"
        >
          <Eye size={16} /> View Details
        </button>
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-heading font-semibold text-base mb-1">{product.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
    </div>
  </div>
);

export default ProductCard;
