import { Heart, Clock, Shield } from "lucide-react";

const features = [
  { icon: Heart, title: "Troska o komfort", desc: "Bezbolesne zabiegi i przyjazna atmosfera, która pomaga pokonać strach." },
  { icon: Clock, title: "Elastyczne godziny", desc: "Dostępni od poniedziałku do soboty, również w godzinach wieczornych." },
  { icon: Shield, title: "Gwarancja jakości", desc: "Korzystamy z najnowszych technologii i sprawdzonych materiałów." },
];

const AboutSection = () => (
  <section id="o-nas" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="text-sm text-secondary font-medium uppercase tracking-wider">Dlaczego my</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
          Stomatologia bliska ludziom
        </h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Wierzymy, że wizyta u dentysty nie musi być stresująca. Nasz zespół tworzy atmosferę pełną ciepła i zrozumienia, zapewniając najwyższą jakość leczenia w komfortowych warunkach.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-orange-light mx-auto flex items-center justify-center">
              <f.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
