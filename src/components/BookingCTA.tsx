import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

const BookingCTA = () => (
  <section className="py-16 md:py-20 bg-primary">
    <div className="container mx-auto px-4 text-center space-y-6">
      <CalendarCheck className="w-12 h-12 text-primary-foreground/80 mx-auto" />
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
        Gotowy na piękny uśmiech?
      </h2>
      <p className="text-primary-foreground/80 max-w-md mx-auto">
        Umów się na bezpłatną konsultację już dziś. Nasz zespół jest tutaj, aby Ci pomóc.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8">
          <a href="#kontakt">Umów wizytę online</a>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
          <a href="https://www.znanylekarz.pl" target="_blank" rel="noopener noreferrer">Przez ZnanyLekarz</a>
        </Button>
      </div>
    </div>
  </section>
);

export default BookingCTA;
