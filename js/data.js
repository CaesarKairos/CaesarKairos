const articlesData = [
  {
    id: "regulamentacao-internet",
    title: "A urgência da regulamentação da Internet brasileira diante da normalização do crime e do assédio nas redes sociais",
    excerpt: "Quando o virtual reproduz o real: violência, impunidade e a urgência de leis eficazes.",
    url: "https://caesarkairos.substack.com/p/a-urgencia-da-regulamentacao-da-internet",
    source: "Substack",
    date: "2025-10-12"
  },
  {
    id: "programar-e-transformar-ideias",
    title: "Nós nunca vimos um alienígena!",
    excerpt: "Sobre como a arte constrói as imagens com que imaginamos aquilo que não conhecemos, moldando o imaginário comum.",
    url: "#",
    source: "Substack",
    date: "#s"
  },
];

const projectsData = [
  {
    id: "bibi",
    name: "BIBI",
    tagline: "Biblioteca Inteligente",
    description:
      "Sistema para gerenciamento de bibliotecas físicas escolares, reunindo acervo, circulação, leitores, agenda e gestão em uma aplicação desktop com acesso complementar pelo navegador.",
    tags: ["Python", "Flask", "SQLite", "PyWebView"],
    githubUrl: "https://github.com/CaesarKairos/BIBI-Biblioteca-Inteligente",
    detail: {
      summary:
        "BIBI é uma solução para bibliotecas físicas escolares. O computador da biblioteca mantém os dados localmente e executa a aplicação desktop, enquanto leitores também podem acessar áreas permitidas pelo navegador. A evolução atual amplia o sistema com contas individuais, convites, perfil, reservas, notificações e ferramentas de gestão de dados.",
      features: [
        "Acervo físico com pesquisa, disponibilidade, exemplares, localização, capas e cadastro por ISBN",
        "Contas individuais para bibliotecários e leitores, com convites, perfil e permissões",
        "Empréstimos, devoluções, renovações, reservas e histórico de circulação",
        "Dashboard, agenda, notificações e recursos de gestão para a biblioteca",
        "Importação por CSV e backup consistente dos dados, capas e configurações"
      ]
    }
  },

  {
    id: "moovibe",
    name: "Moovibe",
    tagline: "Música → Filme",
    description:
      "Recomendador que transforma a vibe de uma a três músicas em cinema, combinando análise emocional, busca vetorial e um catálogo próprio de filmes.",
    tags: ["JavaScript", "Cloudflare", "Gemini", "D1", "Vectorize"],
    githubUrl: "https://github.com/CaesarKairos/Moovibe",
    siteUrl: "https://moovibe.pages.dev/",
    detail: {
      summary:
        "Disponível online, o Moovibe recebe de uma a três músicas, analisa letra e contexto e transforma esse material em um perfil de vibe. A busca combina proximidade vetorial e comparação matemática, sempre dentro de um catálogo cinematográfico próprio; o Gemini atua somente como curador final dos candidatos encontrados.",
      features: [
        "Busca por uma a três músicas com análise de letra, contexto e dimensões emocionais",
        "Recomendação híbrida que une busca vetorial e comparação matemática de vibe",
        "Curadoria final restrita aos filmes reais recuperados do catálogo próprio",
        "Pipeline autônomo que descobre, enriquece e indexa novos filmes continuamente"
      ]
    }
  },

  {
    id: "judge-my-letterboxd",
    name: "Judge My Letterboxd",
    tagline: "Seu gosto cinematográfico será julgado",
    description:
      "Experiência interativa que transforma o export de uma conta do Letterboxd em um julgamento cinematográfico personalizado, usando padrões reais da conta como evidência.",
    tags: ["JavaScript", "Cloudflare", "Gemini", "TMDB"],
    githubUrl: "https://github.com/CaesarKairos/Judge-my-Letterboxd",
    siteUrl: "https://judge-my-letterboxd.pages.dev/",
    detail: {
      summary:
        "Judge My Letterboxd recebe o ZIP oficial exportado pelo Letterboxd, interpreta o histórico cinematográfico da conta e transforma estatísticas, notas, reviews, rewatches, listas, tags e outros padrões em uma apresentação narrativa conduzida por IA. O conteúdo e a apresentação são separados: o backend seleciona e valida evidências, enquanto a interface encena o julgamento com eventos estruturados.",
      features: [
        "Upload e análise do ZIP oficial exportado pelo Letterboxd diretamente no navegador",
        "Leitura de filmes vistos, notas, reviews, rewatches, listas, tags, likes e outros padrões da conta",
        "Análise determinística combinada com Gemini para construir um julgamento baseado em evidências reais",
        "Apresentação estruturada com mensagens, filmes, pares, grupos, reviews, estatísticas e efeitos de ritmo",
        "Resolução de pôsteres via TMDB com fallback visual quando nenhuma imagem é encontrada",
        "Interface disponível em português e inglês, com atenção a teclado, responsividade e reduced motion"
      ]
    }
  },
];