import { ExternalLink, Heart } from 'lucide-react';
import { creditosTexto, links, nomeArtista } from '../config';

export default function Credits() {
  return (
    <section id="creditos" className="section-shell py-24 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-secondary/15 bg-secondary/[.045] px-7 py-10 md:px-12 md:py-14">
        <div className="absolute -right-8 -top-14 h-56 w-56 rounded-full border border-secondary/[.08]" />
        <div className="relative max-w-3xl">
          <p className="eyebrow mb-3 text-secondary">Feito com carinho</p>
          <h2 className="section-title text-4xl md:text-5xl">Arte que deixa o cantinho com a nossa cara.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground" data-testid="text-art-credits">{creditosTexto}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={links.artista} target="_blank" rel="noreferrer" data-testid="link-artist-portfolio" className="inline-flex items-center gap-2 rounded-xl border border-secondary/20 bg-background/60 px-4 py-3 text-sm font-extrabold text-foreground transition hover:-translate-y-0.5 hover:border-secondary/50">Portfólio da artista<ExternalLink size={14} /></a>
            <a href={links.artistaInstagram} target="_blank" rel="noreferrer" data-testid="link-artist-instagram" className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-4 py-3 text-sm font-extrabold text-foreground transition hover:-translate-y-0.5 hover:border-secondary/40">Instagram {nomeArtista}<ExternalLink size={14} /></a>
          </div>
          <div className="mt-8 flex items-center gap-2 text-xs font-bold text-muted-foreground"><Heart size={14} className="text-secondary" /> Créditos sempre merecidos.</div>
        </div>
      </div>
    </section>
  );
}
