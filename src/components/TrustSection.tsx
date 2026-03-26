import { Star } from "lucide-react";

const testimonials = [
  { name: "Anna K.", text: "Fantastyczna obsługa! Pierwszy raz nie bałam się u dentysty. Polecam z całego serca.", rating: 5 },
  { name: "Marek W.", text: "Profesjonalny zespół, nowoczesny sprzęt i bardzo miła atmosfera. Dzieci też chętnie przychodzą!", rating: 5 },
  { name: "Katarzyna S.", text: "Implanty wyglądają naturalnie, a zabieg był całkowicie bezbolesny. Jestem zachwycona efektem.", rating: 5 },
];

const TrustSection = () => (
  <section id="opinie" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-sm text-secondary font-medium uppercase tracking-wider">Opinie pacjentów</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Co mówią nasi pacjenci</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-muted rounded-2xl p-6 space-y-4">
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed">"{t.text}"</p>
            <p className="text-sm font-semibold text-muted-foreground">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
