import { Stethoscope, Smile, Sparkles, ShieldCheck, Baby, Scan } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Stomatologia zachowawcza", desc: "Leczenie próchnicy, wypełnienia i profilaktyka. Dbamy o zdrowie Twoich zębów." },
  { icon: Smile, title: "Implantologia", desc: "Nowoczesne implanty zębowe, które wyglądają i działają jak naturalne zęby." },
  { icon: Sparkles, title: "Stomatologia estetyczna", desc: "Wybielanie, licówki i korekty estetyczne dla pięknego uśmiechu." },
  { icon: ShieldCheck, title: "Ortodoncja", desc: "Aparaty stałe, nakładki i nowoczesne metody prostowania zębów." },
  { icon: Baby, title: "Stomatologia dziecięca", desc: "Przyjazne podejście do najmłodszych pacjentów w bezstresowej atmosferze." },
  { icon: Scan, title: "Diagnostyka RTG", desc: "Cyfrowe zdjęcia rentgenowskie i tomografia 3D dla precyzyjnej diagnostyki." },
];

const ServicesSection = () => (
  <section id="uslugi" className="py-16 md:py-24 bg-warm">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-sm text-secondary font-medium uppercase tracking-wider">Nasze usługi</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Kompleksowa opieka stomatologiczna</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
