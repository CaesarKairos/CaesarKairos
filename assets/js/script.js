// ============================================================
// Explorer.dev — interações leves (sem framework)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- relógio da taskbar (estilo Vista) ---- */
  const clockEl = document.getElementById('taskbarClock');
  function tick(){
    if(!clockEl) return;
    const d = new Date();
    const hh = String(d.getHours()).padStart(2,'0');
    const mm = String(d.getMinutes()).padStart(2,'0');
    const dias = ['dom','seg','ter','qua','qui','sex','sáb'];
    clockEl.textContent = `${hh}:${mm} — ${dias[d.getDay()]}`;
  }
  tick();
  setInterval(tick, 1000 * 15);

  /* ---- menu iniciar ---- */
  const startOrb = document.getElementById('startOrb');
  const startMenu = document.getElementById('startMenu');
  if (startOrb && startMenu) {
    startOrb.addEventListener('click', (e) => {
      e.stopPropagation();
      startMenu.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!startMenu.contains(e.target)) startMenu.classList.remove('open');
    });
    startMenu.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=> startMenu.classList.remove('open'));
    });
  }

  /* ---- abas ativas conforme a seção visível + atualiza "endereço" ---- */
  const tabs = Array.from(document.querySelectorAll('.tabstrip a'));
  const sections = tabs
    .map(t => document.querySelector(t.getAttribute('href')))
    .filter(Boolean);
  const addrPath = document.getElementById('addrPath');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        tabs.forEach(t => t.classList.toggle('active', t.getAttribute('href') === id));
        if (addrPath) {
          const label = entry.target.dataset.label || entry.target.id;
          addrPath.innerHTML = `Computador <b>›</b> Portfólio <b>›</b> ${label}`;
        }
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));

  /* ---- formulário de contato (placeholder, sem backend) ---- */
  const form = document.getElementById('contatoForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Mensagem enviada ✓';
      setTimeout(() => { btn.textContent = original; form.reset(); }, 2200);
    });
  }
});
