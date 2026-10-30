import { ArrowUpRight, HeartHandshake } from 'lucide-react';
import { cardsApoio } from '../config';

export default function Support() {
  return (
    <section id="apoie" className="section-shell py-24 md:py-32">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-3">Se quiser apoiar</p>
          <h2 className="section-title text-5xl md:text-6xl">Ajuda a manter o mate quente.</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Só de estar por aqui já é especial. Apoio é sempre opcional, bah.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        {cardsApoio.map((card, index) => (
          <article key={card.id} className="snow-card group flex flex-col overflow-hidden rounded-[1.7rem] border border-border bg-card transition duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl" data-testid={`card-support-${card.id}`}>
            
            <div className={`relative flex h-48 items-center justify-center overflow-hidden border-b border-border ${index === 1 ? 'bg-secondary/[.04]' : 'bg-muted/50'}`}>
              <div className="support-art-glow absolute inset-0 opacity-40" />
              <img src={card.imagem} alt={`Arte do painel ${card.titulo}`} className="relative z-10 h-full w-full object-contain p-4 transition duration-500 group-hover:rotate-2 group-hover:scale-105" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling?.classList.remove('hidden'); }} data-testid={`img-support-${card.id}`} />
              <div className="hidden max-w-[80%] rounded-2xl border border-dashed border-accent/30 bg-background/80 px-5 py-4 text-center" aria-label={card.fallback}>
                <span className="text-xs font-black uppercase tracking-[.18em] text-primary">Imagem não enviada</span>
                <p className="mt-2 break-words text-xs leading-relaxed text-muted-foreground">{card.fallback}</p>
              </div>
              <span className="absolute bottom-3 left-4 rounded-full border border-border bg-background/80 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground">painel {String(index + 1).padStart(2, '0')}</span>
            </div>
            
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-2xl font-semibold">{card.titulo}</h3>
              <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-muted-foreground">{card.descricao}</p>
              
              {/* AQUI ESTÁ A MUDANÇA: Todos os cards agora usam a mesma tag <a> para redirecionar */}
              <a 
                href={card.href} 
                target="_blank" 
                rel="noreferrer" 
                data-testid={`link-support-${card.id}`} 
                className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-extrabold transition ${
                  card.id === 'pix' 
                    ? 'bg-primary text-primary-foreground hover:-translate-y-0.5' // Botão laranja para o Pix
                    : 'border border-border hover:border-primary/40 hover:bg-muted' // Botão com borda para os outros
                }`}
              >
                {card.acao}
                <ArrowUpRight size={15} />
              </a>
              
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <HeartHandshake size={15} className="text-secondary" /> Cada apoio vira mais conversa boa por aqui.
      </div>
    </section>
  );
}