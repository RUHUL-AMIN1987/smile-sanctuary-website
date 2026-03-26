import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock } from "lucide-react";
import beforeImg from "@/assets/before-smile.jpg";
import afterImg from "@/assets/after-smile.jpg";

const HeroSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-warm">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — copy & CTAs */}
        <div className="space-y-6 animate-fade-in-up">
          <span className="inline-block bg-orange-light text-secondary text-sm font-medium px-4 py-1.5 rounded-full">
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
            <Button
              asChild
              size="lg"
              className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8"
            >
              <a href="#kontakt">Umów wizytę</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-8"
            >
              <a href="#uslugi">Nasze usługi</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-5 pt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="text-secondary">⭐</span> 4.9 / 5
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-primary" /> 500+ pacjentów
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-primary" /> 15 lat doświadczenia
            </span>
          </div>
        </div>

        {/* Right — before/after slider */}
        <div className="relative flex justify-center">
          {/* Decorative blob */}
          <div className="absolute -z-10 w-[110%] h-[110%] rounded-full bg-primary/5 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="w-full max-w-md space-y-3">
            <div
              ref={containerRef}
              className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl cursor-col-resize select-none touch-none"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
            >
              {/* After image (background) */}
              <img
                src={afterImg}
                alt="Po leczeniu – piękny uśmiech"
                className="absolute inset-0 w-full h-full object-cover"
                width={640}
                height={640}
              />

              {/* Before image (clipped) */}
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                <img
                  src={beforeImg}
                  alt="Przed leczeniem"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    width: `${containerRef.current?.offsetWidth ?? 640}px`,
                    maxWidth: "none",
                  }}
                  width={640}
                  height={640}
                />
              </div>

              {/* Slider handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-background z-10"
                style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                    <path d="M7 4L3 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 4L17 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <span className="absolute top-4 left-4 bg-foreground/70 text-background text-xs font-semibold px-3 py-1 rounded-full z-20">
                Przed
              </span>
              <span className="absolute top-4 right-4 bg-secondary/90 text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full z-20">
                Po
              </span>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              Przesuń suwak, aby zobaczyć efekty leczenia
            </p>
          </div>

          {/* Floating badge */}
          <div
            className="absolute -bottom-4 -left-4 bg-background rounded-2xl shadow-lg p-4 flex items-center gap-3 animate-fade-in-up z-20"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Bezbolesne zabiegi</p>
              <p className="text-xs text-muted-foreground">Nowoczesna sedacja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
