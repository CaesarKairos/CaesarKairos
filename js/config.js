// ─── Configuração global do site ─────────────────────────────────────────────
// Ponto único de controle para seções condicionais.
//
// ▸ showArticles: controla toda a área de escrita ("Escrita e reflexão" /
//   Artigos). Com `false`, a seção #artigos, os links do menu e a página
//   artigos.html deixam de ser exibidos (o código continua no projeto).
//
// ▸ hiddenSkillCategories: lista de categorias da seção Skills que devem
//   ficar ocultas (o botão/aba correspondente some). Use exatamente os nomes
//   das abas: "Cursos" | "Ferramentas" | "Tecnologias" | "Soft Skills".
//   Ex.: hiddenSkillCategories: ["Cursos", "Soft Skills"]
//   Se todas forem ocultadas, a seção Skills inteira some do site.
//
// Obs.: este arquivo é carregado de forma síncrona no <head> das páginas,
// antes do paint, para evitar o "flash" do conteúdo oculto.
const siteConfig = {
  showArticles: false,
  hiddenSkillCategories: ["Cursos"],
};
