import { Heart, MessageCircle, PawPrint  } from 'lucide-react';
import { interesses, textos } from '../config';

export default function About() {
  return (
    <section id="sobre" className="section-shell py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-center">
        <div>
          <p className="eyebrow mb-4">Sobre esse cantinho</p>
          <h2 className="section-title text-5xl md:text-6xl" data-testid="text-about-title">{textos.sobreTitulo}</h2>
          <div className="mt-7 flex items-center gap-3 text-secondary"><Heart size={18} fill="currentColor" /><span className="text-sm font-extrabold">Feito de gameplay e companhia.</span></div>
        </div>
        <div className="snow-card rounded-[2rem] border border-border bg-card p-7 md:p-10">
          <PawPrint  className="mb-4 text-accent/65" size={24} />
          <p className="max-w-2xl text-lg leading-[1.8] text-muted-foreground md:text-xl" data-testid="text-about-copy">{textos.sobre}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {interesses.map((item, i) => <span key={item} className={`rounded-full border px-4 py-2 text-sm font-extrabold ${i % 2 ? 'border-secondary/20 bg-secondary/[.07] text-secondary' : 'border-accent/20 bg-accent/[.06] text-accent'}`} data-testid={`tag-interest-${i}`}>{item}</span>)}
          </div>
          <div className="mt-8 flex items-center gap-2 border-t border-border pt-5 text-sm font-bold text-foreground"><MessageCircle size={16} className="text-primary" /> Pode chegar sem cerimônia.</div>
        </div>
      </div>
    </section>
  );
}
