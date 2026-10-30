export const nome = 'carlinhavlr';
export const artes = { mascote: '/assets/pingo-001-no-bg.png' };
export const interesses = ['Pinguins', 'Valorant', 'Chimarrão', 'Papo com o chat'];

export const links = {
  twitch: 'https://www.twitch.tv/COLOCAR_LINK_AQUI',
  instagram: 'https://www.instagram.com/COLOCAR_LINK_AQUI/',
  youtube: 'https://www.youtube.com/@COLOCAR_LINK_AQUI',
  tiktok: 'https://www.tiktok.com/@COLOCAR_LINK_AQUI',
  artista: 'https://lexieart.carrd.co/',
  artistaInstagram: 'https://www.instagram.com/lexiearts_/',
  livepix: 'https://livepix.gg/carlinhavlr',
};

export const statusLive = { online: false, textoOnline: 'AO VIVO', textoOffline: 'OFFLINE' };
export const nomeArtista = '@lexiearts_';

export const textos = {
  heroTitulo: 'Um cantinho pra chamar de nosso.',
  heroSubtitulo: 'Chega mais, pega teu chimas e vem trocar ideia com a gente.',
  heroCta: 'Chega mais, bora pro chat',
  sobreTitulo: 'Prazer, eu sou a Carlinhavlr.',
  sobre: 'Sou gaúcha, gosto de pinguins, Valorant, chimarrão e de ficar de papo com o chat. Por aqui, a gameplay é só parte da diversão, o melhor é ter vocês por perto.',
};

export const horariosLive = [
  { dia: 'Segunda', horario: 'COLOCAR HORÁRIO' },
  { dia: 'Terça', horario: 'COLOCAR HORÁRIO' },
  { dia: 'Quarta', horario: 'COLOCAR HORÁRIO' },
  { dia: 'Quinta', horario: 'COLOCAR HORÁRIO' },
  { dia: 'Sexta', horario: 'COLOCAR HORÁRIO' },
  { dia: 'Sábado', horario: 'COLOCAR HORÁRIO' },
  { dia: 'Domingo', horario: 'COLOCAR HORÁRIO' },
];

export const cardsApoio = [
  { 
    id: 'sub', 
    titulo: 'Vire sub', 
    descricao: 'Apoie o canal e vem fazer parte do cantinho.', 
    imagem: '/assets/carlinha-pengu.png', 
    fallback: 'Arte VIRE SUB', 
    acao: 'Apoiar na Twitch', 
    href: links.twitch 
  },
  { 
    id: 'pix', 
    titulo: 'Pix', 
    descricao: 'clica aqui para mandar um pix e ajude a bater a metinha mensal <3', 
    imagem: '/assets/carlinha-coin.png', 
    fallback: 'Arte PIX', 
    acao: 'Mandar Pix via LivePix', // <-- Texto alterado
    href: links.livepix // <-- Adicionado o link do LivePix aqui
  },
  { 
    id: 'design', 
    titulo: 'Design / Créditos', 
    descricao: 'As artes do canal têm assinatura especial.', 
    imagem: '/assets/carlinha-design.png', 
    fallback: 'Arte DESIGN', 
    acao: 'Conhecer artista', 
    href: links.artista 
  },
];


export const steamAppIds = [
  1259420, // Valorant
  3558600, // Leafy Corner
  1260320, // Party Animals
];

export const jogosFallback = [
  {
    id: 'valorant',
    destaque: true,
    titulo: 'Valorant',
    descricao: 'A mira vem e vai. A resenha fica.',
    imagem: '',
    fallback: 'CAPA EM BREVE',
    href: 'https://www.twitch.tv/carlinhavlr',
  },
  {
    id: 'leafy-corner',
    destaque: false,
    titulo: 'Leafy Corner',
    descricao: 'Jogo cozy de cuidar de plantinhas.',
    imagem: '',
    fallback: 'CAPA EM BREVE',
    href: 'https://store.steampowered.com/app/3558600/Leafy_Corner/',
  },
  {
    id: 'party-animals',
    destaque: false,
    titulo: 'Party Animals',
    descricao: 'Briga de bichinhos fofos.',
    imagem: '',
    fallback: 'CAPA EM BREVE',
    href: 'https://store.steampowered.com/app/1260320/Party_Animals/',
  },
];

export const creditosTexto = `As artes do canal foram feitas pela ${nomeArtista}.`;
export const mostrarMiniJogo = true;

// export de imagens extras
export const imagensExtras = {
  pingo: '/assets/pingo-001-no-bg.png',
  pingo2: '/assets/pingo-002-no-bg.png',
  logo: '/assets/logo.png',
}