import { CalendarDays, Clock3 } from 'lucide-react';
import { horariosLive } from '../config';

export default function Schedule() {
  return (
    <section id="horarios" className="border-y border-border/70 bg-card/35 py-24 md:py-28">
      <div className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="eyebrow mb-3">Marca no calendário</p><h2 className="section-title text-5xl md:text-6xl">Nos vemos por aqui.</h2></div>
          <span className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground"><CalendarDays size={17} className="text-primary" /> Horários editáveis</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-testid="grid-weekly-schedule">
          {horariosLive.map((item, index) => {
            const off = item.horario.toLowerCase() === 'folga';
            return <article key={item.dia} className={`snow-card rounded-2xl border p-5 transition hover:-translate-y-1 ${off ? 'border-border bg-background/45' : 'border-border bg-card hover:border-primary/35'}`} data-testid={`card-schedule-${index}`}>
              <div className="flex items-center justify-between"><span className="text-sm font-extrabold text-muted-foreground">{item.dia}</span><span className={`h-2 w-2 rounded-full ${off ? 'bg-muted-foreground/50' : 'bg-primary'}`} /></div>
              <p className={`mt-4 flex items-center gap-2 text-xl font-black ${off ? 'text-muted-foreground' : 'text-foreground'}`}><Clock3 size={17} className={off ? '' : 'text-primary'} />{off ? 'folga' : item.horario}</p>
            </article>;
          })}
        </div>
        <p className="mt-5 text-xs text-muted-foreground">Os horários são placeholders: confira os avisos da Twitch para mudanças.</p>
      </div>
    </section>
  );
}
