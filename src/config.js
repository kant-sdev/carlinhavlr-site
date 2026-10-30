export const nome = 'Carla';
export const artes = { mascote: '/assets/mascote.png' };
export const interesses = ['Pinguins', 'Valorant', 'Chimarrão', 'Papo com o chat'];

export const links = {
  twitch: 'https://www.twitch.tv/COLOCAR_LINK_AQUI',
  instagram: 'https://www.instagram.com/COLOCAR_LINK_AQUI/',
  youtube: 'https://www.youtube.com/@COLOCAR_LINK_AQUI',
  tiktok: 'https://www.tiktok.com/@COLOCAR_LINK_AQUI',
  artista: 'https://lexieart.carrd.co/',
  artistaInstagram: 'https://www.instagram.com/lexiearts_/',
};

export const chavePix = 'COLOCAR_CHAVE_PIX_AQUI';
export const statusLive = { online: false, textoOnline: 'AO VIVO', textoOffline: 'OFFLINE' };
export const nomeArtista = '@lexiearts_';

export const textos = {
  heroTitulo: 'Um cantinho pra chamar de nosso.',
  heroSubtitulo: 'Chega mais, pega teu chimas e vem trocar ideia com a gente.',
  heroCta: 'Chega mais, bora pro chat',
  sobreTitulo: 'Prazer, eu sou a Carla.',
  sobre: 'Sou gaúcha, gosto de pinguins, Valorant, chimarrão e de ficar de papo com o chat. Por aqui, a gameplay é só parte da diversão — o melhor é ter vocês por perto.',
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
  { id: 'sub', titulo: 'Vire sub', descricao: 'Apoie o canal e vem fazer parte do cantinho.', imagem: '/assets/painel-sub.png', fallback: 'Arte VIRE SUB — adicione /public/assets/painel-sub.png', acao: 'Apoiar na Twitch', href: links.twitch },
  { id: 'pix', titulo: 'Pix', descricao: 'clica aqui para mandar um pix e ajude a bater a metinha mensal <3', imagem: '/assets/painel-pix.png', fallback: 'Arte PIX — adicione /public/assets/painel-pix.png', acao: 'Copiar chave Pix' },
  { id: 'design', titulo: 'Design / Créditos', descricao: 'As artes do canal têm assinatura especial.', imagem: '/assets/painel-design.png', fallback: 'Arte DESIGN — adicione /public/assets/painel-design.png', acao: 'Conhecer artista', href: links.artista },
];

export const jogos = [
  { id: 'valorant', nome: 'Valorant', imagem: '/assets/jogo-valorant.png', descricao: 'A mira vem e vai. A resenha fica.', destaque: true },
  { id: 'jogo-futuro-1', nome: 'Jogo futuro', imagem: '', descricao: 'Edite este espaço em src/config.js.', destaque: false },
  { id: 'jogo-futuro-2', nome: 'Jogo futuro', imagem: '', descricao: 'Edite este espaço em src/config.js.', destaque: false },
];

export const creditosTexto = `As artes do canal foram feitas pela ${nomeArtista}.`;
export const mostrarMiniJogo = true;
