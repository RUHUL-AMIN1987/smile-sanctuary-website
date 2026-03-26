import { useState, useRef, useCallback } from "react";
import beforeImg from "@/assets/before-smile.jpg";
import afterImg from "@/assets/after-smile.jpg";

const BeforeAfterSection = () => {
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
    <section id="efekty" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm text-secondary font-medium uppercase tracking-wider">
            Efekty leczenia
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Zobacz prawdziwe rezultaty
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Przesuń suwak, aby zobaczyć efekty leczenia naszych pacjentów
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-col-resize select-none touch-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* After (background) */}
            <img
              src={afterImg}
              alt="Po leczeniu – piękny uśmiech"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={640}
              height={640}
            />

            {/* Before (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={beforeImg}
                alt="Przed leczeniem – problemy z zębami"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${containerRef.current?.offsetWidth ?? 640}px`, maxWidth: "none" }}
                loading="lazy"
                width={640}
                height={640}
              />
            </div>

            {/* Slider line */}
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

          <p className="text-center text-sm text-muted-foreground mt-4">
            * Wyniki mogą się różnić w zależności od indywidualnego przypadku
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
