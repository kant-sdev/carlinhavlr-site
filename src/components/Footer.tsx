import { ArrowUpRight, Instagram, Twitch, Youtube } from 'lucide-react';
import { links, nome } from '../config';

const socialLinks = [
  { label: 'Twitch', href: links.twitch, Icon: Twitch },
  { label: 'Instagram', href: links.instagram, Icon: Instagram },
  { label: 'YouTube', href: links.youtube, Icon: Youtube },
  { label: 'TikTok', href: links.tiktok, Icon: ArrowUpRight },
];
export default function Footer() {
  return (
    <footer id="redes" className="border-t border-border bg-card/40">
      <div className="section-shell flex flex-col gap-8 py-9 md:flex-row md:items-center md:justify-between">
        <a href="#inicio" className="flex items-center gap-3 text-foreground" data-testid="link-footer-home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/[.08] font-display text-xl font-bold text-primary">C</span>
          <span><span className="block font-display text-xl font-bold">{nome}</span><span className="text-xs text-muted-foreground">um cantinho nosso</span></span>
        </a>
        <nav aria-label="Redes sociais" className="flex flex-wrap gap-2">
          {socialLinks.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" data-testid={`link-social-${label.toLowerCase()}`} aria-label={`${label} de ${nome}`} className="inline-flex items-center gap-2 rounded-xl border border-border px-3.5 py-2.5 text-sm font-bold text-muted-foreground transition hover:border-primary/40 hover:text-foreground"><Icon size={15} />{label}</a>)}
        </nav>
        <p className="text-xs font-semibold text-muted-foreground">Obrigada por fazer parte desse cantinho. <span className="text-secondary">Até a próxima live.</span></p>
      </div>
    </footer>
  );
}
