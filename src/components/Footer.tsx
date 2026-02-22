import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
        <img src="src/assets/Logo.png" className="h-16 w-auto"></img>
{/*     <h3 className="text-xl font-heading font-bold mb-4">
            Tanmia<span className="text-gradient-gold"> Foods</span>
          </h3>*/}
          <p className="text-sm opacity-80 leading-relaxed">
            Authentic traditional snacks crafted with premium ingredients, single-use oil, and strict hygiene standards. Export-ready quality since day one.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/products" className="hover:opacity-100 transition-opacity">Products</Link>
            <Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link>
            <Link to="/testimonials" className="hover:opacity-100 transition-opacity">Testimonials</Link>
            <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3 text-sm opacity-80">
            <a href="mailto:tanmiafoods@gmail.com" className="flex items-center gap-2 hover:opacity-100">
              <Mail size={16} /> tanmiafoods@gmail.com
            </a>
            <a href="tel:+918553245274" className="flex items-center gap-2 hover:opacity-100">
              <Phone size={16} /> +91 85532 45274
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>D No. 1-13C(3), Kumpala, N.N Nagar, Mangalore, Karnataka – 575018</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
        <p>GSTIN: 29AAQFT0836K1ZK</p>
        <p className="mt-1">© {new Date().getFullYear()} Tanmia Foods. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
