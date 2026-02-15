import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Hello Tanmia Foods, my name is ${form.name} (${form.email}). ${form.message}`;
    window.open(
      `https://wa.me/918553245274?text=${encodeURIComponent(waText)}`,
      "_blank"
    );
  };

  return (
    <main className="pt-16">
      <section className="gradient-hero section-padding text-primary-foreground text-center">
        <div className="container-narrow max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">Reach Out</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="opacity-90">We'd love to hear from you. Reach out for orders, partnerships, or inquiries.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <a href="mailto:tanmiafoods@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">tanmiafoods@gmail.com</span>
                </a>
                <a href="tel:+918553245274" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">+91 85532 45274 / +91 87925 74417</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <span className="text-sm">
                    D No. 1-13C(3), Kumpala, N.N Nagar,<br />
                    Mangalore, Dakshina Kannada,<br />
                    Karnataka – 575018
                  </span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-6">GSTIN: 29AAQFT0836K1ZK</p>

              {/* Map Placeholder */}
              <div className="mt-6 aspect-video rounded-lg overflow-hidden border border-border">
                <iframe
                  title="Tanmia Foods Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.8!2d74.85!3d12.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMangalore!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold transition-transform hover:scale-105"
                >
                  <Send size={16} /> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
