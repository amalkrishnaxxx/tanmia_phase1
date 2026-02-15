import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918553245274?text=Hello%20Tanmia%20Foods%2C%20I'm%20interested%20in%20your%20products%20and%20would%20like%20to%20get%20a%20quotation."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-accent-foreground font-semibold shadow-lg transition-transform hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={22} />
    <span className="hidden sm:inline text-sm">WhatsApp</span>
  </a>
);

export default WhatsAppButton;
