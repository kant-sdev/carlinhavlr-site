import { ArrowDown, ArrowUpRight, Radio } from 'lucide-react';
import { artes, links, nome, statusLive, textos, imagensExtras } from '../config';
import { useEffect, useState } from 'react';

const mascotes = [
  artes.mascote,
  imagensExtras.pingo,
  imagensExtras.pingo2,
];


export default function Hero() {

  const [indexMascote, setIndexMascote] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexMascote((indexAnterior) => (indexAnterior + 1) % mascotes.length);
    }, 5000); 

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section id="inicio" className="hero-glow relative overflow-hidden">
      <div className="section-shell grid min-h-[690px] items-center gap-8 py-20 md:grid-cols-[1.04fr_.96fr] md:py-24">
        <div className="rise-in relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-2 text-xs font-extrabold tracking-wide text-muted-foreground">
            <span className={`h-2 w-2 rounded-full ${statusLive.online ? 'animate-pulse' : ''}`} style={{ backgroundColor: statusLive.online ? 'var(--live-online)' : 'var(--live-offline)' }} />
            <span data-testid="status-live">{statusLive.online ? statusLive.textoOnline : statusLive.textoOffline}</span>
            <span className="text-border">/</span><span>um cantinho pra comunidade</span>
          </div>
          <p className="eyebrow mb-4">Bah, que bom que tu chegou</p>
          <h1 className="font-display max-w-[700px] text-[clamp(3.4rem,8vw,6.6rem)] leading-[.9] tracking-[-.055em] text-foreground" data-testid="text-hero-title">
            {nome}<span className="text-primary">.</span><br />
            <span className="text-secondary">{textos.heroTitulo}</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl" data-testid="text-hero-subtitle">{textos.heroSubtitulo}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={links.twitch} target="_blank" rel="noreferrer" data-testid="link-hero-twitch" className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 font-extrabold text-primary-foreground transition hover:-translate-y-1 hover:shadow-lg">
              <Radio size={18} /> {textos.heroCta} 
            </a>
            <a href="#horarios" data-testid="link-hero-schedule" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/75 px-6 py-4 font-extrabold text-foreground transition hover:border-accent/50 hover:bg-muted">
              Ver horários 
            </a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex -space-x-2" aria-hidden="true"><span className="h-8 w-8 rounded-full border-2 border-background bg-secondary/70" /><span className="h-8 w-8 rounded-full border-2 border-background bg-accent/70" /><span className="h-8 w-8 rounded-full border-2 border-background bg-primary/80" /></span>
            <span>Gameplay, chimas e papo bom.</span>
          </div>
        </div>
        <div className="relative mx-auto flex aspect-square w-full max-w-[470px] items-center justify-center" aria-label="Espaço reservado para o mascote do canal">
          <div className="absolute inset-[8%] rounded-[44%_56%_58%_42%/49%_44%_56%_51%] border border-accent/15 bg-accent/[.035] rotate-6" />
          <div className="absolute inset-[17%] rounded-full border border-dashed border-primary/25" />
          <div className="absolute right-[8%] top-[12%] h-3 w-3 rounded-full bg-secondary" />
          <div className="absolute bottom-[17%] left-[7%] h-2 w-2 rounded-full bg-primary" />
          <div className="relative flex h-[66%] w-[66%] items-center justify-center rounded-[48%] border border-border/70 bg-card shadow-2xl">
            <div className="absolute inset-3 rounded-[48%] border border-white/[.035]" />
            <img 
              key={indexMascote}
              src={mascotes[indexMascote]} 
              alt={`Mascote do canal de ${nome}`} 
              className="absolute inset-0 h-full w-full rounded-[48%] object-contain p-5 transition-opacity duration-500" 
              data-testid="img-channel-mascot" 
              onError={(event) => { 
                event.currentTarget.style.display = 'none'; 
                event.currentTarget.nextElementSibling?.classList.remove('hidden'); 
              }} 
            />
            
            <div className="hidden px-8 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-[28px] border border-accent/20 bg-accent/[.07] text-accent">
                <span className="font-display text-4xl">C</span>
              </div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-primary">Mascote do canal</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Imagem não enviada.<br />Adicione em <code className="text-accent">/public/assets/mascote.png</code></p>
            </div>
          </div>
          <span className="absolute bottom-[10%] right-[5%] rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-accent shadow-lg">pinguins bem-vindos</span>
          <span className="absolute left-[4%] top-[18%] rotate-[-9deg] rounded-2xl border border-border bg-card px-4 py-3 text-sm font-extrabold text-secondary shadow-lg">bah, chega mais</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 h-px w-[min(1120px,calc(100%-40px))] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
