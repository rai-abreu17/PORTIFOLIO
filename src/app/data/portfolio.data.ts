import {
  CompetitionPhoto,
  Experience,
  Milestone,
  PortfolioProject,
  ProfessionalLink,
  SkillGroup,
} from '../models/portfolio.models';

export const PROFESSIONAL_LINKS: readonly ProfessionalLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rai-abreu-machado',
    external: true,
  },
  {
    label: 'Lattes',
    href: 'https://lattes.cnpq.br/2018586865462502',
    external: true,
  },
  {
    label: 'E-mail',
    href: 'mailto:rai.abreu.machado@gmail.com',
  },
];

export const PROJECTS: readonly PortfolioProject[] = [
  {
    title: 'Plataforma de Governança de Acessos',
    context:
      'Em uma instituição com mais de 700 pessoas, uma mudança interna nem sempre leva à revisão dos acessos. Com isso, algumas permissões deixam de corresponder ao trabalho de cada pessoa.',
    solution:
      'A plataforma cruza os dados funcionais com os acessos concedidos. Ela identifica divergências e automatiza a correção dos casos já validados.',
    participation:
      'Reconstruí o front-end. No back-end, trabalhei nas regras de acesso e na integração de dados.',
    result:
      'Modernização de uma aplicação Java legada para uma arquitetura cliente-servidor atual.',
    year: '2026',
    category: 'TRE-MA · Software em produção',
    focus: ['Governança', 'Integração de dados', 'Automação'],
    technologies: ['Angular 21', 'Java 17', 'Spring Boot', 'Oracle', 'Apache Hop', 'Selenium'],
    evidence: 'Projeto institucional · detalhes sensíveis omitidos',
    caseStudy: {
      flow: [
        'Dados funcionais',
        'Apache Hop',
        'Motor de regras',
        'Inconsistências',
        'Ação validada',
      ],
      before:
        'Antes, os pedidos eram analisados e corrigidos manualmente, caso a caso. Também era difícil acompanhar o andamento dos ajustes.',
      after:
        'O cruzamento agora é automático. O sistema aponta as inconsistências para que cada caso seja tratado.',
      contributions: [
        { area: 'Front-end', detail: 'Reconstrução das interfaces em Angular 21.' },
        { area: 'Back-end', detail: 'Java 17, Spring Boot, APIs REST e regras de negócio.' },
        { area: 'Dados', detail: 'Oracle, Apache Hop e cruzamento de fontes institucionais.' },
        { area: 'Automação', detail: 'Robô Selenium para remoções pela interface autorizada.' },
        { area: 'Arquitetura', detail: 'Modernização progressiva da aplicação Java legada.' },
      ],
    },
    featured: true,
  },
  {
    title: 'PRISMA',
    context:
      'Um time de TI recebia cerca de mil chamados por dia em 80 grupos de WhatsApp. Nesse volume, era difícil identificar o que precisava de atenção primeiro.',
    solution:
      'A ferramenta reúne as mensagens, interpreta cada pedido e organiza a fila por prioridade. Dúvidas simples recebem uma resposta automática.',
    participation: 'Desenvolvi o projeto com a Equipe Maracá para o desafio do Grupo Mateus.',
    result: '1º lugar no Hackathon MGest 2026, na categoria Humanismo Digital.',
    year: '2026',
    category: 'Produto digital · IA aplicada',
    focus: ['Informação desestruturada', 'Priorização', 'Autoatendimento'],
    evidence: '1.000 chamados/dia · 80 grupos de WhatsApp',
    featured: true,
  },
  {
    title: 'Assistente de gestão por voz',
    context:
      'Cerca de 74% dos trabalhadores desse mercado têm baixa escolaridade. Muitos menus poderiam dificultar o uso do aplicativo.',
    solution:
      'O comerciante registra a venda por voz no WhatsApp. A IA organiza os dados e apresenta uma sugestão; a decisão fica com o usuário.',
    participation:
      'Participei do desenvolvimento do assistente e da proposta de um painel para a gestão pública.',
    result: '1º lugar no Hackathon do Mercado 2026.',
    year: '2026',
    category: 'Inclusão digital · IA',
    focus: ['Voice-first', 'WhatsApp', 'Inteligência preditiva'],
    technologies: ['NestJS', 'TypeScript', 'OpenAI GPT-4o', 'Evolution API', 'PostgreSQL', 'Redis'],
    evidence: '74% do público com baixa escolaridade',
    featured: true,
  },
  {
    title: 'Transparência em linguagem simples',
    context:
      'O portal recebe 320 mil usuários por ano e oferece mais de 115 tipos de informação. Para consultá-lo, porém, o cidadão precisava entender termos orçamentários.',
    solution:
      'Criamos um protótipo para celular. A navegação explica os termos durante a consulta e aceita perguntas por texto ou áudio.',
    participation:
      'Participei do desenvolvimento do protótipo para facilitar a consulta aos dados do portal.',
    result: '3º lugar no Hackathon da Transparência 2026.',
    year: '2026',
    category: 'Governo digital · Acessibilidade',
    focus: ['UX Gov', 'Linguagem simples', 'Consulta natural'],
    evidence: '320 mil usuários/ano · 4 milhões de visualizações',
    featured: true,
  },
  {
    title: 'Fall Alert',
    context: 'Projeto para detectar quedas de energia e avisar o usuário.',
    solution:
      'Montei o hardware e apresentei o protótipo em funcionamento no Maramaker.',
    result: 'Apresentado no Maramaker em 2022.',
    year: '2022',
    category: 'Hardware · Automação',
    focus: ['Detecção', 'Prototipagem', 'Inovação'],
  },
];

export const EXPERIENCES: readonly Experience[] = [
  {
    role: 'Estagiário de Desenvolvimento Full Stack',
    organization: 'Tribunal Regional Eleitoral do Maranhão',
    period: 'desde 2026',
    summary:
      'Modernizo e mantenho sistemas do tribunal. Trabalho com interfaces em Angular, APIs, regras de negócio e integração entre bases de dados.',
    technologies: ['Java 17', 'Spring Boot', 'Angular 21', 'Oracle', 'Apache Hop', 'Selenium'],
  },
  {
    role: 'Pesquisador Discente',
    organization: 'Projeto Sinapse · DARTiLab · UFMA',
    period: 'desde 2026',
    summary:
      'Desenvolvo software e protótipos de robótica em pesquisas sobre inteligência artificial e educação.',
    technologies: ['Software', 'Robótica', 'Inteligência artificial'],
  },
  {
    role: 'Jovem Aprendiz em Informática',
    organization: 'Rede SARAH',
    period: 'nov. 2023 a nov. 2025',
    summary:
      'Durante dois anos, prestei suporte aos usuários e diagnostiquei falhas de hardware e software. Eu também explicava cada problema sem recorrer a termos técnicos.',
    technologies: ['Suporte técnico', 'Diagnóstico', 'Atendimento'],
  },
];

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: 'Back-end',
    items: ['Java 17', 'Spring Boot', 'NestJS', 'APIs REST', 'JPA / Hibernate'],
  },
  {
    title: 'Front-end',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'UX/UI'],
  },
  {
    title: 'Dados',
    items: ['Oracle SQL', 'PostgreSQL', 'Redis', 'Apache Hop', 'Análise de desempenho'],
  },
  {
    title: 'Engenharia',
    items: ['Git / GitHub', 'Docker', 'SonarQube', 'Selenium', 'Testes', 'Segurança'],
  },
  {
    title: 'Hardware e inovação',
    items: ['Arduino', 'Sensores', 'Prototipagem', 'Robótica', 'Sistemas embarcados'],
  },
  {
    title: 'Linguagens',
    items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C', 'SQL'],
  },
];

export const MILESTONES: readonly Milestone[] = [
  {
    value: '4',
    label: 'premiações em hackathons',
    detail: 'MGest, Transparência, Mercado e CREA-MA.',
  },
  {
    value: '2',
    label: 'títulos internacionais',
    detail: 'DRC-Explorer e Cobertura FIRA na Robo World Cup 2022.',
  },
  {
    value: '720h',
    label: 'de formação full stack',
    detail: 'Programadores do Amanhã, concluída em 2024.',
  },
];

export const COMPETITION_PHOTOS: readonly CompetitionPhoto[] = [
  {
    src: '/images/competitions/mgest-2026-vencedores.jpg',
    alt: 'Raí e equipe no palco com o prêmio do Hackathon MGest 2026',
    caption: 'Equipe vencedora do Hackathon MGest',
    year: '2026',
    width: 800,
    height: 533,
  },
  {
    src: '/images/competitions/inovacao-equipe-2026-01.jpg',
    alt: 'Raí ao lado de participantes em um ambiente de inovação',
    caption: 'Equipe em evento de tecnologia',
    year: '2026',
    width: 800,
    height: 533,
  },
  {
    src: '/images/competitions/inovacao-equipe-2026-02.jpg',
    alt: 'Raí com equipe reunida em um evento de tecnologia',
    caption: 'Encontro com participantes do evento',
    year: '2026',
    width: 800,
    height: 533,
  },
  {
    src: '/images/competitions/fira-equipe-2023.jpg',
    alt: 'Equipe de robótica reunida no palco da FIRA 2023 com robô e troféu',
    caption: 'FIRA Brasil',
    year: '2023',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/competitions/robotica-encontro-2023.jpg',
    alt: 'Equipes de robótica do IEMA reunidas diante de um monumento',
    caption: 'Comunidade de robótica do IEMA',
    year: '2023',
    width: 1280,
    height: 1024,
  },
  {
    src: '/images/competitions/fira-celebracao-2022.jpg',
    alt: 'Equipe celebrando no palco da FIRA 2022 em São Luís',
    caption: 'Celebração na FIRA',
    year: '2022',
    width: 1296,
    height: 864,
  },
  {
    src: '/images/competitions/fira-equipe-2022-02.jpg',
    alt: 'Equipe de robótica exibindo bandeira e troféu em uma premiação',
    caption: 'Robótica em competição',
    year: '2022',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/competitions/feira-ciencias-2022.jpg',
    alt: 'Participantes premiados na Feira de Ciências, Sustentabilidade e Inovação',
    caption: '2º lugar na Feira de Ciências do Maranhão',
    year: '2022',
    width: 1280,
    height: 958,
  },
  {
    src: '/images/competitions/fira-equipe-2022-01.jpg',
    alt: 'Equipe do IEMA no pódio de uma competição de robótica',
    caption: 'Equipe IEMA em competição',
    year: '2022',
    width: 1115,
    height: 1280,
  },
  {
    src: '/images/competitions/robotica-premiacao-2021.jpg',
    alt: 'Equipe jovem de robótica reunida com troféu',
    caption: 'Primeiras competições nacionais',
    year: '2021',
    width: 1600,
    height: 901,
  },
  {
    src: '/images/competitions/robotica-construcao-2021.jpg',
    alt: 'Equipe do IEMA trabalhando ao redor de uma mesa com computador',
    caption: 'Construção e preparação em equipe',
    year: '2021',
    width: 1600,
    height: 901,
  },
];
