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

// ─── Render Skills ────────────────────────────────────────────────────────────
function renderSkills(tab) {
  const container = document.getElementById("skills-content");
  const items = skillsData[tab] || [];
  container.innerHTML = items
    .map((item) => {
      const variantClass = skillVariant[tab] || "bg-[#90A955]/20 text-[#31572C]";
      return `<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide ${variantClass}">${item}</span>`;
    })
    .join("");
}

// ─── Skills Tab Switching ─────────────────────────────────────────────────────
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

// ─── Mobile Menu Toggle ───────────────────────────────────────────────────────
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");

    // Swap icons
    if (iconMenu) iconMenu.classList.toggle("hidden");
    if (iconClose) iconClose.classList.toggle("hidden");
  });

  // Close menu when clicking a link
  const links = menu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      if (iconMenu) iconMenu.classList.remove("hidden");
      if (iconClose) iconClose.classList.add("hidden");
    });
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initSkillsTabs();
});