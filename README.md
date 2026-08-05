# portfolio-vista

Portfólio de desenvolvedor com linguagem visual de Windows Vista/Aero
(barra de título em vidro, barra de menu, barra de endereço, abas e
taskbar com menu iniciar) aplicada a uma composição editorial em
scrapbook, no estilo do Carrd/perfis pessoais dos anos 2000, em
paleta verde sálvia/oliva.

## estrutura

```
portfolio-vista/
├── index.html              → estrutura da página (todas as seções/painéis)
├── assets/
│   ├── css/
│   │   └── style.css       → tokens de cor/tipografia + todo o estilo
│   ├── js/
│   │   └── script.js       → relógio da taskbar, menu iniciar, aba ativa
│   └── img/                → coloque aqui sua foto/avatar e capturas de projetos
└── README.md
```

## como abrir

Basta abrir `index.html` em qualquer navegador — não precisa de servidor
nem de build. Para publicar, suba a pasta inteira (mantendo a estrutura
de `assets/`) em qualquer host estático (GitHub Pages, Netlify, Vercel).

## o que personalizar

- Troque todo texto entre colchetes `[assim]` pelo seu conteúdo real
  (nome, cidade, projetos, livros, filmes, jogos, artigos, redes).
- `.avatar` em `style.css`: troque o `☺` por uma imagem real —
  substitua o bloco `.avatar` por `<img src="assets/img/foto.jpg">`
  dentro do `index.html`.
- Os itens de `.galeria` (livros/filmes/jogos) podem virar capas reais:
  troque o `background` do `.galeria-item` por
  `background:url('assets/img/capa-x.jpg') center/cover;`.
- As bolinhas de nível em `#tecnologias` (`.lvl i.on`) são manuais —
  adicione/retire a classe `on` para refletir seu nível real em cada tecnologia.
- O formulário de contato em `#contato` não tem backend; para receber
  mensagens de verdade, ligue-o a um serviço tipo Formspree, ou troque
  por `mailto:` / link direto para seu e-mail.

## paleta usada

| token         | cor       |
|---------------|-----------|
| `--sage`      | `#9CB380` |
| `--sage-light`| `#C4D6AE` |
| `--olive`     | `#6E7F4A` |
| `--olive-dark`| `#47552E` |
| `--cream`     | `#F8F6EC` |
| `--gold`      | `#DCD2A0` |

Tipografia: **Fredoka** (títulos, arredondada, clima Frutiger Aero/Web 2.0),
**Nunito Sans** (texto corrido) e **JetBrains Mono** (endereço, tags, dados).
