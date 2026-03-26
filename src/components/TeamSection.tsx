import doc1 from "@/assets/doctor1.jpg";
import doc2 from "@/assets/doctor2.jpg";
import doc3 from "@/assets/doctor3.jpg";

const team = [
  { img: doc1, name: "dr Tomasz Kowalski", role: "Implantolog, Chirurg" },
  { img: doc2, name: "dr Anna Nowak", role: "Ortodontka" },
  { img: doc3, name: "Marta Zielińska", role: "Higienistka stomatologiczna" },
];

const TeamSection = () => (
  <section id="zespol" className="py-16 md:py-24 bg-warm">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-sm text-secondary font-medium uppercase tracking-wider">Nasz zespół</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Poznaj naszych specjalistów</h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {team.map((t, i) => (
          <div key={i} className="text-center space-y-4">
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden ring-4 ring-border shadow-lg">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover" width={512} height={512} loading="lazy" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
