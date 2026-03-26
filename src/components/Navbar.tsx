import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Usługi", href: "#uslugi" },
    { label: "O nas", href: "#o-nas" },
    { label: "Zespół", href: "#zespol" },
    { label: "Opinie", href: "#opinie" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <span className="font-serif text-xl font-semibold text-foreground">DentSmile</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+48123456789" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> +48 123 456 789
          </a>
          <Button asChild className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <a href="#kontakt">Umów wizytę</a>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-primary py-1">
              {l.label}
            </a>
          ))}
          <Button asChild className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <a href="#kontakt">Umów wizytę</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
