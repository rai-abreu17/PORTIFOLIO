# Portfólio — Raí Abreu Machado

Portfólio profissional desenvolvido em Angular 21 para apresentar experiência em engenharia de software, pesquisa aplicada, robótica e inovação. O conteúdo foi curado a partir dos currículos e registros fornecidos no projeto.

## Executar localmente

```bash
npm install
npm start
```

A aplicação fica disponível em `http://localhost:4200`.

## Verificação

```bash
npm run build
npx ng test --watch=false
npx tsc -p tsconfig.app.json --noEmit
```

## Estrutura de conteúdo

- `src/app/data/portfolio.data.ts`: projetos, experiências, tecnologias, premiações e galeria.
- `src/app/features/home/components`: seções independentes da página.
- `src/app/shared`: navegação, rodapé e comportamentos compartilhados.
- `public/images`: fotografias e imagens otimizadas para publicação.
- `public/screenshots`: registros desktop/mobile e relatório do Lighthouse.
- `DESIGN.md`: direção visual, tokens e regras do sistema de design.

## Decisões principais

- Componentes standalone e dados tipados.
- Layout responsivo sem dependências visuais externas.
- Galeria com scroll-snap, teclado, arraste, pausa e respeito a `prefers-reduced-motion`.
- Fontes locais, imagem principal em WebP e `NgOptimizedImage`.
- Navegação por âncoras, foco visível, skip link e HTML semântico.
