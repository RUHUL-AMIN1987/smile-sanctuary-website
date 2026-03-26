import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Wiadomość wysłana!", description: "Skontaktujemy się z Tobą wkrótce." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm text-secondary font-medium uppercase tracking-wider">Kontakt</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Skontaktuj się z nami</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Imię i nazwisko"
              className="rounded-xl bg-background"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Adres e-mail"
              className="rounded-xl bg-background"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              type="tel"
              placeholder="Numer telefonu"
              className="rounded-xl bg-background"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Textarea
              placeholder="Twoja wiadomość..."
              className="rounded-xl bg-background min-h-[120px]"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button type="submit" size="lg" className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base">
              Wyślij wiadomość
            </Button>
          </form>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Adres</p>
                <p className="text-sm text-muted-foreground">ul. Zdrowa 12, 00-001 Warszawa</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Telefon</p>
                <p className="text-sm text-muted-foreground">+48 123 456 789</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">E-mail</p>
                <p className="text-sm text-muted-foreground">kontakt@dentsmile.pl</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Godziny otwarcia</p>
                <p className="text-sm text-muted-foreground">Pon–Pt: 8:00–20:00<br />Sob: 9:00–14:00</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-48 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3!2d21.0122!3d52.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzQ3LjAiTiAyMcKwMDAnNDMuOSJF!5e0!3m2!1spl!2spl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja kliniki DentSmile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
