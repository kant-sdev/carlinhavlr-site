import { Gamepad2, Snowflake } from 'lucide-react';
import { jogos, mostrarMiniJogo } from '../config';

export default function Games() {
  return (
    <section id="jogos" className="border-y border-border/70 bg-card/35 py-24 md:py-28">
      <div className="section-shell">
        <div className="mb-10"><p className="eyebrow mb-3">O que tá na tela</p><h2 className="section-title text-5xl md:text-6xl">Jogos e outras aventuras.</h2></div>
        <div className="grid gap-4 md:grid-cols-3">
          {jogos.map((jogo) => <article key={jogo.id} className={`snow-card group overflow-hidden rounded-[1.7rem] border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-xl ${jogo.destaque ? 'game-card-featured' : 'border-border'}`} data-testid={`card-game-${jogo.id}`}>
            <div className={`relative flex h-44 items-center justify-center overflow-hidden ${jogo.destaque ? 'game-art-featured' : 'bg-background/50'}`}>
              {jogo.imagem ? <img src={jogo.imagem} alt={`Imagem de ${jogo.nome}`} className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling?.classList.remove('hidden'); }} /> : null}
              <div className={`${jogo.imagem ? 'hidden' : ''} absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground`} aria-label={jogo.imagem ? `Imagem de ${jogo.nome} ausente` : 'Espaço reservado para jogo'}>
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${jogo.destaque ? 'game-icon-featured' : 'border-border text-accent'}`}><Gamepad2 size={23} /></div>
                <span className="max-w-[85%] text-center text-xs font-extrabold">{jogo.destaque ? 'Imagem do jogo não enviada' : 'Espaço reservado — edite em config.js'}</span>
              </div>
              {jogo.destaque && <span className="game-feature-badge absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest">Em destaque</span>}
            </div>
            <div className="p-6"><h3 className={`font-display text-2xl font-bold ${jogo.destaque ? 'game-title-featured' : ''}`}>{jogo.nome}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{jogo.descricao}</p></div>
          </article>)}
        </div>
        {mostrarMiniJogo && <div className="mt-5 flex flex-col items-start justify-between gap-5 rounded-[1.7rem] border border-accent/15 bg-accent/[.035] p-6 sm:flex-row sm:items-center md:p-7" data-testid="card-fishing-coming-soon">
          <div className="flex items-center gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/[.07] text-accent"><Snowflake size={22} /></div><div><p className="text-xs font-black uppercase tracking-[.18em] text-accent">Uma pausa na gameplay</p><h3 className="mt-1 font-display text-2xl font-bold">Pinguim pescando</h3></div></div>
          <span className="rounded-full border border-secondary/25 bg-secondary/[.07] px-4 py-2 text-sm font-extrabold text-secondary">Em breve</span>
        </div>}
      </div>
    </section>
  );
}
