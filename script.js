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
        return `<span class="skill-badge inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide ${variantClass}" style="animation-delay:${delay}ms">${item}</span>`;
      })
      .join("");

    // Fade-in
    container.classList.remove("skills-fading");
  }, 120);
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
  initScrollReveal();
  initNavScroll();
  initScrollSpy();
  initMobileMenu();
  initSkillsTabs();
});