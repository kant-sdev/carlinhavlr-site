import { useState, useEffect} from 'react';
import { Menu, X } from 'lucide-react';
import About from './components/About';
import Credits from './components/Credits';
import Footer from './components/Footer';
import Games from './components/Games';
import Hero from './components/Hero';
import PenguinTracks from './components/PenguinTracks';
import Schedule from './components/Schedule';
import Support from './components/Support';
import { nome, imagensExtras } from './config';

const images = [imagensExtras.logo, imagensExtras.pingo, imagensExtras.pingo2];



const sections = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'horarios', label: 'Horários' },
  { id: 'apoie', label: 'Apoie' },
  { id: 'jogos', label: 'Jogos' },
  { id: 'creditos', label: 'Créditos' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);


  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="section-shell flex h-[70px] items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label={`${nome}, início`} data-testid="link-header-home">
            
            <img 
              src={imagensExtras.logo} 
              alt={`Logo ${nome}`} 
              className="h-9 w-9 object-contain" 
            />
            
            {/* O texto do nome e o ponto continuam aqui */}
            <span className="font-display text-xl font-bold tracking-tight">
              {nome}<span className="text-primary">.</span>
            </span>
          </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {sections.map(({ id, label }) => <a key={id} href={`#${id}`} data-testid={`link-nav-${id}`} className="rounded-xl px-3 py-2 text-sm font-bold text-muted-foreground transition hover:bg-muted hover:text-foreground">{label}</a>)}
        </nav>
        <a href="#redes" className="hidden rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-primary-foreground transition hover:-translate-y-0.5 sm:inline-flex" data-testid="link-nav-social">Redes de {nome}</a>
        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground md:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      </div>
      {menuOpen && <nav className="section-shell grid gap-1 border-t border-border/70 py-3 md:hidden" aria-label="Navegação móvel">
        {sections.map(({ id, label }) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} data-testid={`link-mobile-nav-${id}`} className="rounded-xl px-3 py-3 text-sm font-extrabold text-muted-foreground hover:bg-muted hover:text-foreground">{label}</a>)}
        <a href="#redes" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm font-extrabold text-primary">Redes sociais</a>
      </nav>}
    </header>
  );
}

function App() {
  return (
    <div className="min-h-[100dvh] overflow-hidden bg-background text-foreground">
      <PenguinTracks />
      <div className="site-grain" aria-hidden="true" />
      <div className="content-layer">
        <Header />
        <main>
          <Hero />
          <About />
          <Schedule />
          <Support />
          <Games />
          <Credits />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
