import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Czy pierwsza wizyta jest bezpłatna?", a: "Tak, oferujemy bezpłatną konsultację, podczas której omawiamy plan leczenia i odpowiadamy na wszystkie pytania." },
  { q: "Czy zabiegi są bolesne?", a: "Stosujemy nowoczesne metody znieczulenia i sedacji, dzięki czemu zabiegi są praktycznie bezbolesne." },
  { q: "Jak często powinnam odwiedzać dentystę?", a: "Zalecamy wizyty kontrolne co 6 miesięcy oraz regularne czyszczenie kamienia nazębnego." },
  { q: "Czy przyjmujecie dzieci?", a: "Oczywiście! Nasz gabinet jest przystosowany do przyjmowania najmłodszych pacjentów w przyjaznej atmosferze." },
  { q: "Jakie formy płatności akceptujecie?", a: "Akceptujemy gotówkę, karty płatnicze oraz oferujemy możliwość rozłożenia płatności na raty." },
];

const FAQSection = () => (
  <section id="faq" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="text-center mb-12">
        <span className="text-sm text-secondary font-medium uppercase tracking-wider">FAQ</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Najczęściej zadawane pytania</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-muted rounded-2xl border-none px-6">
            <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
