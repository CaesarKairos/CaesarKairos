import { useState } from "react";

// ─── Icons ───────────────────────────────────────────────────────────────────

function IconGithub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconExternalLink() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  );
}

function IconAlien() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 2 5 5.5 5 9c0 5 3 9 7 9s7-4 7-9c0-3.5-3-7-7-7z" />
      <ellipse cx="9" cy="10" rx="1.5" ry="2" fill="currentColor" stroke="none" />
      <ellipse cx="15" cy="10" rx="1.5" ry="2" fill="currentColor" stroke="none" />
      <path d="M9.5 14.5s.9 1 2.5 1 2.5-1 2.5-1" />
      <path d="M5 9 2 7M19 9l3-2" />
    </svg>
  );
}

// ─── Badge ───────────────────────────────────────────────────────────────────

function Badge({ children, variant = "leaf" }: { children: React.ReactNode; variant?: "leaf" | "moss" | "grass" | "forest" }) {
  const styles: Record<string, string> = {
    leaf: "bg-[#ECF39E] text-[#31572C]",
    moss: "bg-[#90A955]/20 text-[#31572C]",
    grass: "bg-[#40916C]/15 text-[#40916C]",
    forest: "bg-[#31572C] text-[#FAF9F6]",
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide ${styles[variant]}`}>
      {children}
    </span>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Sobre", "Projetos", "Skills", "Artigos", "Contato"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-[#90A955]/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="display-font text-[#31572C] font-semibold text-lg tracking-tight hover:text-[#40916C] transition-colors">
          Caesar Kairos
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-[#40916C] hover:text-[#31572C] transition-colors font-medium"
            >
              {l}
            </a>
          ))}
          <a
            href="#contato"
            className="ml-2 px-4 py-2 rounded-full bg-[#40916C] text-[#FAF9F6] text-sm font-semibold hover:bg-[#31572C] transition-colors"
          >
            Fale comigo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#31572C] hover:text-[#40916C] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAF9F6] border-t border-[#90A955]/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-[#40916C] font-medium hover:text-[#31572C] transition-colors"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contato"
            className="px-4 py-2 rounded-full bg-[#40916C] text-[#FAF9F6] text-sm font-semibold text-center hover:bg-[#31572C] transition-colors"
            onClick={() => setOpen(false)}
          >
            Fale comigo
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const techStack = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "APIs REST", "Autenticação", "Web Services"],
  Database: ["MongoDB", "SQL", "Modelagem de dados"],
  Tools: ["Git", "GitHub", "Postman", "Figma"],
  AI: ["OpenAI API", "OpenRouter", "Prompt Engineering", "Automação"],
};

const variantMap: Record<string, "leaf" | "moss" | "grass" | "forest"> = {
  Frontend: "leaf",
  Backend: "moss",
  Database: "grass",
  Tools: "leaf",
  AI: "moss",
};

function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Photo placeholder */}
        <div className="relative">
          <div className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl border-2 border-[#90A955]/40 bg-[#ECF39E]/30 overflow-hidden flex items-end justify-center">
            <div className="w-full h-full bg-gradient-to-br from-[#ECF39E]/50 via-[#90A955]/20 to-[#40916C]/30 flex items-center justify-center">
              <div className="text-center opacity-40">
                <div className="w-24 h-24 rounded-full border-2 border-[#40916C] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-[#40916C]">CB</span>
                </div>
                <p className="text-[#40916C] text-sm font-medium tracking-wider uppercase">Foto</p>
              </div>
            </div>
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#ECF39E] -z-10 lg:block hidden" />
          <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#90A955]/30 -z-10 lg:block hidden" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#90A955] mb-3">Desenvolvedor Full Stack</p>
            <h1 className="display-font text-6xl lg:text-7xl font-bold text-[#31572C] leading-[0.95] mb-4">
              Port<em className="not-italic text-[#40916C]">fólio</em>
            </h1>
          </div>

          <p className="text-base text-[#31572C]/80 leading-relaxed max-w-lg">
            <strong className="text-[#31572C] font-semibold">Cesar Batista</strong> (Caesar Kairos) — estudante de Desenvolvimento de Sistemas e desenvolvedor Full Stack, com experiência em frontend, backend, APIs, bancos de dados e integração entre serviços e tecnologias.
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            {[
              { icon: <IconGithub />, label: "GitHub", href: "#" },
              { icon: <IconLinkedin />, label: "LinkedIn", href: "#" },
              { icon: <IconMail />, label: "E-mail", href: "#contato" },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#90A955]/40 text-[#40916C] text-sm font-medium hover:bg-[#40916C] hover:text-[#FAF9F6] hover:border-[#40916C] transition-all"
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mt-2 space-y-3">
            {Object.entries(techStack).map(([cat, items]) => (
              <div key={cat} className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#90A955] w-20 shrink-0 tracking-wide">{cat}</span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <Badge key={item} variant={variantMap[cat]}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

const aboutBlocks = [
  {
    num: "01",
    heading: "Trajetória",
    body: "Meu interesse por programação começou através de vídeos na Internet. O que inicialmente parecia apenas uma área interessante acabou se tornando uma forma de criar coisas que, antes de existirem, eram apenas ideias. Hoje sou estudante de Desenvolvimento de Sistemas e desenvolvedor Full Stack — movido pelo prazer de transformar ideias em algo que realmente funciona, do primeiro código até uma aplicação que possa ser utilizada por alguém.",
  },
  {
    num: "02",
    heading: "O que me move",
    body: "Apesar de atuar em uma área de exatas, me considero profundamente ligado às humanas. Escrevo livros e histórias, tenho interesse por psicologia, arte, cinema, literatura e mitologia. Acredito que tecnologia deve ser acessível — não só no uso, mas no conhecimento para compreendê-la. Com o avanço da inteligência artificial, essa possibilidade de transformar ideias em ferramentas está se tornando cada vez mais real.",
  },
  {
    num: "03",
    heading: "Fora do código",
    body: "Gosto muito de cinema, especialmente de filmes que provavelmente passariam despercebidos em qualquer outra circunstância. Também gosto de jogos 2D, como OneShot, e de Minecraft — mesmo sem nunca ter chegado a zerá-lo. Amo a cor verde e aliens estereotipados do cinema: para mim, eles são um exemplo de como a arte molda a percepção coletiva. Uma representação criada décadas atrás que continua definindo o que imaginamos quando pensamos em algo que sequer sabemos se existe.",
  },
  {
    num: "04",
    heading: "Visão de futuro",
    body: "Quero ser alguém a quem outras pessoas possam recorrer quando precisarem de ajuda — em desenvolvimento, na escrita ou na arte. Da mesma forma que comunidades tornaram possível que eu chegasse até aqui, quero poder compartilhar esse caminho. Mais do que acumular conhecimento, quero ser capaz de transmiti-lo.",
  },
];

function About() {
  return (
    <section id="sobre" className="py-20 px-6 bg-[#31572C]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#90A955] mb-3">Quem sou</p>
            <h2 className="display-font text-5xl font-bold text-[#ECF39E] leading-tight">
              Sobre<br />mim
            </h2>
            <div className="mt-6 flex items-center gap-3 text-[#90A955]">
              <IconAlien />
              <span className="text-sm font-medium opacity-80">César Augusto Batista dos Santos</span>
            </div>
          </div>

          <div className="space-y-10">
            {aboutBlocks.map(({ num, heading, body }) => (
              <div key={num} className="flex gap-6 group">
                <span className="display-font text-[#90A955]/30 text-4xl font-bold leading-none shrink-0 select-none group-hover:text-[#90A955]/60 transition-colors">
                  {num}
                </span>
                <div className="border-t border-[#90A955]/20 pt-4 flex-1">
                  <h3 className="display-font text-xl font-semibold text-[#ECF39E] mb-3">{heading}</h3>
                  <p className="text-[#FAF9F6]/75 leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "BIBI",
    subtitle: "Biblioteca Inteligente",
    description: "Sistema feito para facilitar o gerenciamento de bibliotecas escolares — controle de acervo, empréstimos, devoluções e relatórios, tudo em um só lugar.",
    stack: ["Node.js", "React", "MongoDB", "APIs REST"],
    status: "projeto",
  },
  {
    id: 2,
    title: "Moovibe",
    subtitle: "Música → Filme",
    description: "Plataforma com IA que recomenda um filme a partir de uma música, cruzando letras, contexto cultural e dados do filme para encontrar a mesma \"vibe\".",
    stack: ["Next.js", "OpenAI API", "Tailwind CSS", "MongoDB"],
    status: "projeto",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group bg-[#FAF9F6] border border-[#90A955]/25 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#40916C]/60 hover:shadow-lg hover:shadow-[#40916C]/10 transition-all duration-300">
      <div>
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="display-font text-2xl font-bold text-[#31572C] leading-tight">{project.title}</h3>
          <span className="text-xs font-semibold tracking-wider uppercase text-[#90A955] bg-[#ECF39E]/60 px-2 py-1 rounded-full shrink-0">
            {project.status}
          </span>
        </div>
        <p className="text-sm text-[#40916C] font-medium mb-3">{project.subtitle}</p>
        <p className="text-sm text-[#31572C]/70 leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.stack.map((t) => (
          <Badge key={t} variant="moss">{t}</Badge>
        ))}
      </div>

      <div className="flex gap-3 pt-2 border-t border-[#90A955]/20">
        <button className="flex-1 py-2 rounded-full bg-[#40916C] text-[#FAF9F6] text-sm font-semibold hover:bg-[#31572C] transition-colors text-center">
          Saiba mais
        </button>
        <a
          href="#"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#90A955]/40 text-[#40916C] text-sm font-medium hover:border-[#40916C] transition-colors"
        >
          <IconGithub />
          <span>GitHub</span>
          <IconExternalLink />
        </a>
      </div>
    </div>
  );
}

function PlaceholderCard() {
  return (
    <div className="bg-[#ECF39E]/20 border border-dashed border-[#90A955]/40 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 min-h-[260px] text-center">
      <div className="w-10 h-10 rounded-full border border-[#90A955]/40 flex items-center justify-center text-[#90A955] text-xl">
        +
      </div>
      <p className="text-sm text-[#90A955] font-medium">Próximo projeto</p>
      <p className="text-xs text-[#90A955]/60">Em breve</p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projetos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#90A955] mb-3">O que construí</p>
            <h2 className="display-font text-5xl font-bold text-[#31572C] leading-tight">Projetos</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          <PlaceholderCard />
          <PlaceholderCard />
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

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

const skillVariant: Record<string, "leaf" | "moss" | "grass" | "forest"> = {
  Cursos: "leaf",
  Ferramentas: "moss",
  Tecnologias: "grass",
  "Soft Skills": "leaf",
};

type SkillTab = keyof typeof skillsData;

function Skills() {
  const tabs = Object.keys(skillsData) as SkillTab[];
  const [active, setActive] = useState<SkillTab>("Tecnologias");

  return (
    <section id="skills" className="py-20 px-6 bg-[#ECF39E]/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#90A955] mb-3">Ferramentas e saberes</p>
          <h2 className="display-font text-5xl font-bold text-[#31572C] leading-tight">Skills</h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === tab
                  ? "bg-[#40916C] text-[#FAF9F6]"
                  : "bg-white border border-[#90A955]/30 text-[#40916C] hover:border-[#40916C]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 min-h-[80px]">
          {skillsData[active].map((skill) => (
            <Badge key={skill} variant={skillVariant[active]}>
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Articles ─────────────────────────────────────────────────────────────────

const articles = [
  {
    title: "Como a arte molda o que imaginamos antes de ver",
    excerpt: "Sobre aliens estereotipados, percepção coletiva e o poder das representações criadas décadas atrás.",
    date: "Em breve",
    platform: "Substack",
    href: "#",
  },
  {
    title: "Programar é transformar ideias em possibilidades",
    excerpt: "Reflexão sobre como a programação e a inteligência artificial estão tornando o conhecimento mais acessível.",
    date: "Em breve",
    platform: "Substack",
    href: "#",
  },
];

function Articles() {
  return (
    <section id="artigos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#90A955] mb-3">Escrita e reflexão</p>
          <h2 className="display-font text-5xl font-bold text-[#31572C] leading-tight">Artigos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#FAF9F6] border border-[#90A955]/25 rounded-2xl p-6 hover:border-[#40916C]/60 hover:shadow-lg hover:shadow-[#40916C]/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#90A955] bg-[#ECF39E]/60 px-2 py-1 rounded-full">
                  {a.platform}
                </span>
                <span className="text-[#90A955] opacity-60 group-hover:opacity-100 transition-opacity">
                  <IconExternalLink />
                </span>
              </div>
              <h3 className="display-font text-xl font-semibold text-[#31572C] mb-2 group-hover:text-[#40916C] transition-colors leading-snug">
                {a.title}
              </h3>
              <p className="text-sm text-[#31572C]/65 leading-relaxed mb-4">{a.excerpt}</p>
              <span className="text-xs text-[#90A955] font-medium">{a.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer id="contato" className="bg-[#31572C] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#90A955] mb-4">Vamos conversar</p>
          <h2 className="display-font text-4xl md:text-5xl font-bold text-[#ECF39E] mb-4 leading-tight">
            Tem um projeto em mente?
          </h2>
          <p className="text-[#FAF9F6]/70 max-w-md mx-auto text-sm leading-relaxed">
            Estou sempre aberto a novas oportunidades, colaborações e conversas sobre tecnologia, escrita ou ideias.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { icon: <IconGithub />, label: "GitHub", href: "#" },
            { icon: <IconLinkedin />, label: "LinkedIn", href: "#" },
            { icon: <IconMail />, label: "E-mail", href: "mailto:contato@example.com" },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#90A955]/40 text-[#ECF39E] text-sm font-medium hover:bg-[#40916C] hover:border-[#40916C] transition-all"
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-[#90A955]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#90A955]/60">
          <span>© 2025 Cesar Batista · Caesar Kairos</span>
          <span className="flex items-center gap-2">
            Feito com{" "}
            <span className="text-[#ECF39E]">♥</span>
            {" "}e muito café
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Articles />
      <Footer />
    </div>
  );
}
