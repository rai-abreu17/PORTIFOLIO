---
version: alpha
name: 'Raí Abreu Machado — Portfolio'
description: 'Portfólio pessoal com apresentação direta, projetos legíveis e fotografias da trajetória de Raí.'
colors:
  paper: '#F4F8FD'
  surface: '#FFFFFF'
  panel: '#FFFFFF'
  ink: '#061A33'
  muted: '#52677F'
  primary: '#0A5BEA'
  action: '#0A5BEA'
  action-hover: '#084DC6'
  deep: '#051F46'
  line: '#C8D7E9'
  soft-blue: '#DCEBFF'
  focus: '#8FC0FF'
darkColors:
  paper: '#0B1728'
  panel: '#14283E'
  ink: '#EEF5FF'
  muted: '#B1C4D9'
  primary: '#94C1FF'
  action: '#2156A5'
  action-hover: '#2867C2'
  deep: '#0D2949'
  line: '#36506A'
  soft-blue: '#1C3654'
  focus: '#B3D5FF'
typography:
  display:
    fontFamily: 'Sora Variable, Sora, Arial, sans-serif'
  body:
    fontFamily: 'Manrope Variable, Manrope, Arial, sans-serif'
  utility:
    fontFamily: 'IBM Plex Mono, Cascadia Mono, Consolas, monospace'
rounded:
  DEFAULT: '0.25rem'
  small: '0.125rem'
  media: '1.125rem'
spacing:
  unit: '0.5rem'
  section-gap: 'clamp(3.5rem, 6vw, 6rem)'
  page-gutter: 'clamp(1.25rem, 4vw, 4.5rem)'
  page-max: '74rem'
components:
  button:
    backgroundColor: '{colors.action}'
    textColor: '{colors.surface}'
    typography: '{typography.body}'
    rounded: '{rounded.DEFAULT}'
    height: '3rem'
  project-row:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.ink}'
    rounded: '{rounded.small}'
  media-frame:
    backgroundColor: '{colors.deep}'
    rounded: '{rounded.media}'
  supporting-copy:
    textColor: '{colors.muted}'
    typography: '{typography.utility}'
  secondary-action:
    backgroundColor: '{colors.soft-blue}'
    textColor: '{colors.primary-hover}'
  divider:
    backgroundColor: '{colors.line}'
    height: '1px'
  focus-ring:
    backgroundColor: '{colors.focus}'
    size: '3px'
---

# Raí Abreu Machado — Design

## Direção

A apresentação deve parecer um portfólio pessoal: nome, ocupação, foto e trabalhos. A paleta azul original permanece. O tema escuro usa fundos azul-marinho, texto claro e azul mais luminoso para links; botões e a seção de contato usam um azul mais profundo para manter o texto branco legível. O botão no cabeçalho alterna os temas e guarda a escolha no navegador. O conteúdo usa linguagem direta em primeira pessoa, apoiada nos dados existentes, sem slogans ou promessas genéricas.

## Organização

Apresentação → projetos → experiência → tecnologias → competições → sobre → contato. A largura máxima é de 74rem e as margens são fluidas. Seções usam espaçamento entre 3.5rem e 6rem. O nome tem a maior escala; títulos de seção variam entre 1.8rem e 2.7rem. Sora e Manrope continuam locais.

Projetos são linhas com ano, contexto, solução, participação e resultado. Os detalhes técnicos do primeiro projeto ficam em um disclosure nativo acessível por teclado. Tecnologias aparecem em listas compactas. Experiência usa fundo branco no tema claro e um painel azul-marinho no escuro; galeria usa azul-marinho; contato usa azul. Não há recortes diagonais, coordenadas fictícias, numeração decorativa ou frases de efeito.

## Fotografia e interação

O retrato tem proporção 4:5 e cantos discretos. A galeria mantém as fotos reais, navegação por botões, teclado e arraste. Começa pausada e oferece avanço automático opcional. Links e botões mantêm estados de foco e interação. O menu mobile fecha por seleção e Escape. A preferência por movimento reduzido é respeitada.

## Responsividade

A apresentação se empilha abaixo de 700px; projetos abaixo de 620px. Listas de tecnologias passam para uma coluna abaixo de 800px. A navegação mobile entra abaixo de 950px. Conteúdo e imagens não devem produzir rolagem horizontal na página; a galeria mantém sua própria área rolável.

## Conteúdo

Preservar cargos, instituições, datas e conquistas documentadas. Preferir “Participei do desenvolvimento…” a descrições abstratas. Não inventar métricas, depoimentos, clientes ou imagens de projetos. Novos trabalhos devem ser editados em `src/app/data/portfolio.data.ts`. O tom é conversacional, evitando encadear muitos termos técnicos em uma frase só.

## Divisórias e ferramentas

Linhas divisórias (entre projetos, experiências, ferramentas e marcos) esmaecem nas pontas com gradiente em vez de cortar reto de ponta a ponta. As mudanças de cor entre seções (para a galeria escura, para o contato azul, para o rodapé) continuam sendo um corte direto — uma tentativa de esmaecer esse corte com gradiente ficou com aparência de mancha e foi revertida. Ferramentas e tecnologias citadas (stack, projetos, experiência) mostram o ícone da marca quando existe um reconhecível — via `app-tool-chip` — mantendo o nome como texto quando não há ícone preciso (evita inventar ícone genérico para conceitos como "Testes" ou "Robótica").
