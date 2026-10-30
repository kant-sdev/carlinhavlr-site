# carlinhavlr-site

Site de página única da streamer Carla, em React, Vite e Tailwind CSS.

## Rodar localmente

Requer Node.js 20 ou superior e pnpm.

```sh
pnpm install
pnpm dev
```

Para verificar e gerar a versão de produção:

```sh
pnpm typecheck
pnpm build
pnpm preview
```

## Personalizar

- Edite nome, links, chave Pix, status da live, horários, textos, artes e jogos em `src/config.js`.
- Nos dias sem live, use `folga` como horário.
- Adicione as imagens originais em `public/assets/`; os nomes e fallbacks estão documentados em `public/assets/README.txt`.
- Os links e dados do canal continuam como placeholders até serem substituídos pelos dados reais.