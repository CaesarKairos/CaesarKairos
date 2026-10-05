// ─── Armar animações ─────────────────────────────────────────────────────────
// Adiciona a classe "js" ao <html> logo no início. O CSS só esconde elementos
// quando html.js está presente, então se o JS falhar, o conteúdo fica visível.
document.documentElement.classList.add("js");

// ─── Skills Data ──────────────────────────────────────────────────────────────
const skillsData = {
  Cursos: [
    "Desenvolvimento de Sistemas (SENAI)",
    "JavaScript Moderno (Udemy)",
    "Node.js & APIs REST",
    "React do Zero ao Avançado",
  ],
  Ferramentas: [
    "VS Code", "Git & GitHub", "Postman", "Figma",
    "Vercel", "Railway", "Docker (básico)",
  ],
  Tecnologias: [
    "HTML / CSS", "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Express", "MongoDB", "SQL",
    "Tailwind CSS", "REST APIs",
  ],
  "Soft Skills": [
    "Curiosidade intelectual", "Escrita criativa",
    "Aprendizado autodidata", "Pensamento crítico",
    "Comunicação clara", "Interesse em compartilhar",
  ],
};

const skillVariant = {
  Cursos: "bg-[#ECF39E] text-[#31572C]",
  Ferramentas: "bg-[#90A955]/20 text-[#31572C]",
  Tecnologias: "bg-[#40916C]/15 text-[#40916C]",
  "Soft Skills": "bg-[#ECF39E] text-[#31572C]",
};

// ─── Hero: entrada da página ──────────────────────────────────────────────────
function initHeroEntrance() {
  const photo = document.querySelector(".hero-photo");
  const items = document.querySelectorAll(".hero-item");

  // Pequeno atraso para garantir que o CSS já foi aplicado
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (photo) photo.classList.add("hero-visible");
      items.forEach((item) => item.classList.add("hero-visible"));
    });
  });
}

// ─── Scroll-reveal genérico ───────────────────────────────────────────────────
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    // Fallback: se não houver suporte, mostra tudo imediatamente
    revealEls.forEach((el) => el.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target); // dispara uma vez só
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

// ─── Nav: estado sólido ao rolar ──────────────────────────────────────────────
function initNavScroll() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // estado inicial
}

// ─── Nav: scrollspy (link ativo) ──────────────────────────────────────────────
function initScrollSpy() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = ["sobre", "projetos", "skills", "artigos", "contato"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const setActive = (sectionId) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("data-section") === sectionId;
      link.classList.toggle("nav-active", isActive);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

// ─── Menu mobile animado ──────────────────────────────────────────────────────
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  if (!toggle || !menu) return;

  const openMenu = () => {
    menu.classList.remove("hidden");
    menu.classList.add("menu-open");
    if (iconMenu) iconMenu.classList.add("hidden");
    if (iconClose) iconClose.classList.remove("hidden");
  };

  const closeMenu = () => {
    menu.classList.remove("menu-open");
    if (iconMenu) iconMenu.classList.remove("hidden");
    if (iconClose) iconClose.classList.add("hidden");
    // Esconde após a transição terminar
    setTimeout(() => {
      if (!menu.classList.contains("menu-open")) {
        menu.classList.add("hidden");
      }
    }, 350);
  };

  toggle.addEventListener("click", () => {
    if (menu.classList.contains("menu-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Fecha ao clicar em um link
  const links = menu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// ─── Skills: render com crossfade ─────────────────────────────────────────────
function renderSkills(tab) {
  const container = document.getElementById("skills-content");
  const items = skillsData[tab] || [];

  // Fade-out rápido
  container.classList.add("skills-fading");

  setTimeout(() => {
    container.innerHTML = items
      .map((item, i) => {
        const variantClass = skillVariant[tab] || "bg-[#90A955]/20 text-[#31572C]";
        const delay = i * 40; // stagger de 40ms entre badges
        return `<span class="skill-badge inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide ${variantClass}" style="animation-delay:${delay}ms">${item}</span>`;
      })
      .join("");

    // Fade-in
    container.classList.remove("skills-fading");
  }, 120);
}

function renderArticleCard(article, staggerIndex) {
  const isExternal = article.url && article.url !== "#";
  const safeStagger = Math.min(staggerIndex, 4);
  const linkAttributes = isExternal
    ? `href="${article.url}" target="_blank" rel="noopener noreferrer"`
    : `href="#" onclick="event.preventDefault()" aria-disabled="true"`;
  const footerText = isExternal ? `Leia em ${article.source}` : "Em breve";

  return `
    <a ${linkAttributes} class="reveal group block bg-[#FAF9F6] border border-[#90A955]/25 rounded-2xl p-6 hover:border-[#40916C]/60 hover:shadow-lg hover:shadow-[#40916C]/10 transition-all duration-300" data-stagger="${safeStagger}">
      <div class="flex items-start justify-between gap-4 mb-3">
        <span class="text-xs font-semibold tracking-wider uppercase text-[#90A955] bg-[#ECF39E]/60 px-2 py-1 rounded-full">${article.source}</span>
        <span class="text-[#90A955] opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" x2="21" y1="14" y2="3" />
          </svg>
        </span>
      </div>
      <h3 class="display-font text-xl font-semibold text-[#31572C] mb-2 group-hover:text-[#40916C] transition-colors leading-snug">${article.title}</h3>
      <p class="text-sm text-[#31572C]/65 leading-relaxed mb-4">${article.excerpt}</p>
      <span class="text-xs text-[#90A955] font-medium">${footerText}</span>
    </a>`;
}

function initArticles() {
  if (!Array.isArray(articlesData)) return;

  const orderedArticles = [...articlesData].sort((a, b) => b.date.localeCompare(a.date));
  const previewGrid = document.getElementById("articles-grid");
  const allGrid = document.getElementById("all-articles-grid");

  if (previewGrid) {
    previewGrid.innerHTML = orderedArticles
      .slice(0, 4)
      .map((article, index) => renderArticleCard(article, index + 1))
      .join("");

    const moreLink = document.getElementById("more-articles-link");
    if (moreLink) {
      moreLink.style.display = orderedArticles.length > 4 ? "inline-flex" : "none";
    }
  }

  if (allGrid) {
    allGrid.innerHTML = orderedArticles
      .map((article, index) => renderArticleCard(article, index + 1))
      .join("");
  }
}

function renderProjectDetail(project) {
  const tags = project.tags
    .map(
      (tag) => `<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-[#90A955]/20 text-[#31572C]">${tag}</span>`
    )
    .join("");

  const features = project.detail.features
    .map(
      (item) => `<li class="text-sm leading-relaxed text-[#31572C]/75">${item}</li>`
    )
    .join("");

  return `
    <div class="reveal max-w-4xl mx-auto bg-[#FAF9F6] border border-[#90A955]/25 rounded-3xl p-8 hover:shadow-lg hover:shadow-[#40916C]/10 transition-all duration-300" data-stagger="1">
      <div class="mb-8">
        <p class="text-xs font-semibold tracking-[0.2em] uppercase text-[#90A955] mb-3">Projeto</p>
        <h1 class="display-font text-5xl font-bold text-[#31572C] leading-tight">${project.name}</h1>
        <p class="text-xl text-[#40916C] font-medium mt-4">${project.tagline}</p>
      </div>

      <p class="text-sm text-[#31572C]/75 leading-relaxed mb-8">${project.detail.summary}</p>

      <div class="grid gap-8 lg:grid-cols-[1.4fr_1fr] mb-8">
        <div>
          <h2 class="text-lg font-semibold text-[#31572C] mb-4">O que o projeto faz</h2>
          <ul class="space-y-3">${features}</ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-[#31572C] mb-4">Tecnologias</h2>
          <div class="flex flex-wrap gap-2">${tags}</div>
        </div>
      </div>

      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        ${project.siteUrl ? `<a href="${project.siteUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#40916C] text-[#FAF9F6] text-sm font-semibold hover:bg-[#31572C] transition-colors">
          Abrir projeto
        </a>` : ""}
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#40916C] text-[#FAF9F6] text-sm font-semibold hover:bg-[#31572C] transition-colors">
          Ver no GitHub
        </a>
        <a href="index.html#projetos" class="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#90A955]/40 bg-white text-[#31572C] text-sm font-semibold hover:bg-[#ECF39E] transition-colors">
          ← Voltar pro portfólio
        </a>
      </div>
    </div>`;
}

function renderProjectNotFound() {
  return `
    <div class="reveal max-w-3xl mx-auto bg-[#FAF9F6] border border-[#90A955]/25 rounded-3xl p-8 text-center" data-stagger="1">
      <p class="text-xs font-semibold tracking-[0.2em] uppercase text-[#90A955] mb-3">Projeto</p>
      <h1 class="display-font text-4xl font-bold text-[#31572C] leading-tight mb-4">Projeto não encontrado</h1>
      <p class="text-sm text-[#31572C]/75 leading-relaxed mb-8">O slug informado não corresponde a nenhum projeto existente. Volte ao portfólio para continuar navegando.</p>
      <a href="index.html#projetos" class="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#90A955]/40 bg-white text-[#31572C] text-sm font-semibold hover:bg-[#ECF39E] transition-colors">
        ← Voltar para o portfólio
      </a>
    </div>`;
}

function initProjectDetail() {
  const detailContainer = document.getElementById("project-detail");
  if (!detailContainer) return;

  const slug = new URLSearchParams(window.location.search).get("slug");
  const project = projectsData.find((item) => item.id === slug);

  detailContainer.innerHTML = project ? renderProjectDetail(project) : renderProjectNotFound();
}

// ─── Skills: troca de aba ─────────────────────────────────────────────────────
function initSkillsTabs() {
  const tabs = document.querySelectorAll(".skill-tab");

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach((t) => {
        t.classList.remove("bg-[#40916C]", "text-[#FAF9F6]");
        t.classList.add("bg-white", "border", "border-[#90A955]/30", "text-[#40916C]");
      });

      // Activate clicked tab
      btn.classList.remove("bg-white", "border", "border-[#90A955]/30", "text-[#40916C]");
      btn.classList.add("bg-[#40916C]", "text-[#FAF9F6]");

      // Render skills for selected tab
      const tab = btn.getAttribute("data-tab");
      renderSkills(tab);
    });
  });

  // Render default tab (Tecnologias)
  renderSkills("Tecnologias");
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initHeroEntrance();
  initArticles();
  initProjectDetail();
  initScrollReveal();
  initNavScroll();
  initScrollSpy();
  initMobileMenu();
  initSkillsTabs();
});
