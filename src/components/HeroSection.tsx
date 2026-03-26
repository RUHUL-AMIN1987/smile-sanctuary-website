import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-patient.jpg";

const HeroSection = () => (
  <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-warm">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-in-up">
        <span className="inline-block bg-orange-light text-orange text-sm font-medium px-4 py-1.5 rounded-full">
          Twój uśmiech w dobrych rękach
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
          Zdrowy uśmiech,<br />
          <span className="text-primary">pewność siebie</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-md">
          Nowoczesna stomatologia w przyjaznej atmosferze. Zadbamy o Twoje zęby z troską i bez bólu.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8">
            <a href="#kontakt">Umów wizytę</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-8">
            <a href="#uslugi">Nasze usługi</a>
          </Button>
        </div>
        <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">⭐ 4.9 / 5</span>
          <span>500+ zadowolonych pacjentów</span>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="w-full max-w-md aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
          <img src={heroImg} alt="Uśmiechnięty pacjent w gabinecie dentystycznym" className="w-full h-full object-cover" width={1024} height={1024} />
        </div>
        <div className="absolute -bottom-4 -left-4 bg-background rounded-2xl shadow-lg p-4 flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">✓</div>
          <div>
            <p className="text-sm font-semibold text-foreground">Bezbolesne zabiegi</p>
            <p className="text-xs text-muted-foreground">Nowoczesna sedacja</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
