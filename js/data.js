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
    description: "Sistema feito para facilitar o gerenciamento de bibliotecas escolares — controle de acervo, empréstimos, devoluções e relatórios, tudo em um só lugar.",
    tags: ["Node.js", "React", "MongoDB", "APIs REST"],
    githubUrl: "https://github.com/CaesarKairos/BIBI-Biblioteca-Inteligente",
    detail: {
      summary: "BIBI é uma solução de gestão para bibliotecas escolares que traz controle centralizado de acervo, fluxo de empréstimos e devoluções, além de relatórios para apoiar a rotina de professores e bibliotecários.",
      features: [
        "Cadastro e pesquisa de livros com metadados essenciais",
        "Controle de empréstimos e devoluções com histórico de usuários",
        "Relatórios de acervo, disponibilidade e movimentação de itens"
      ]
    }
  },
  {
    id: "moovibe",
    name: "Moovibe",
    tagline: "Música → Filme",
    description: "Recomendador que transforma a vibe de uma a três músicas em cinema, combinando análise emocional, busca vetorial e um catálogo próprio de filmes.",
    tags: ["JavaScript", "Cloudflare", "Gemini", "D1", "Vectorize"],
    githubUrl: "https://github.com/CaesarKairos/Moovibe",
    siteUrl: "https://moovibe.pages.dev/",
    detail: {
      summary: "Disponível online, o Moovibe recebe de uma a três músicas, analisa letra e contexto e transforma esse material em um perfil de vibe. A busca combina proximidade vetorial e comparação matemática, sempre dentro de um catálogo cinematográfico próprio; o Gemini atua somente como curador final dos candidatos encontrados.",
      features: [
        "Busca por uma a três músicas com análise de letra, contexto e dimensões emocionais",
        "Recomendação híbrida que une busca vetorial e comparação matemática de vibe",
        "Curadoria final restrita aos filmes reais recuperados do catálogo próprio",
        "Pipeline autônomo que descobre, enriquece e indexa novos filmes continuamente"
      ]
    }
  },
];
