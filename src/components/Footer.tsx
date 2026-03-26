const Footer = () => (
  <footer className="bg-primary py-10">
    <div className="container mx-auto px-4 text-center space-y-3">
      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
          <span className="text-primary-foreground font-bold">D</span>
        </div>
        <span className="font-serif text-lg font-semibold text-primary-foreground">DentSmile</span>
      </div>
      <p className="text-primary-foreground/60 text-sm">
        © {new Date().getFullYear()} DentSmile. Wszelkie prawa zastrzeżone.
      </p>
    </div>
  </footer>
);

export default Footer;
