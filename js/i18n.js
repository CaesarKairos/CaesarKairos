// Automatic browser-language localization. English is both the default and fallback.
(function () {
  "use strict";

  function detectLanguage() {
    const requested = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "en"];

    for (const locale of requested) {
      const language = String(locale).toLowerCase().split("-")[0];
      if (language === "pt") return "pt-BR";
      if (language === "es") return "es";
      if (language === "ja") return "ja";
      if (language === "zh") return "zh-CN";
      if (language === "en") return "en";
    }
    return "en";
  }

  const language = detectLanguage();
  document.documentElement.lang = language;

  // Keys are the original Portuguese copy. Missing translations deliberately fall
  // back to English, never to Portuguese.
  const messages = {
    "Cesar Batista — Portfólio": ["Cesar Batista — Portfolio", "Cesar Batista — Portafolio", "Cesar Batista — ポートフォリオ", "Cesar Batista — 作品集"],
    "Todos os artigos — Cesar Batista": ["All articles — Cesar Batista", "Todos los artículos — Cesar Batista", "すべての記事 — Cesar Batista", "所有文章 — Cesar Batista"],
    "Detalhes do projeto — Cesar Batista": ["Project details — Cesar Batista", "Detalles del proyecto — Cesar Batista", "プロジェクト詳細 — Cesar Batista", "项目详情 — Cesar Batista"],
    "Sobre": ["About", "Acerca de", "概要", "关于"],
    "Projetos": ["Projects", "Proyectos", "プロジェクト", "项目"],
    "Artigos": ["Articles", "Artículos", "記事", "文章"],
    "Contato": ["Contact", "Contacto", "お問い合わせ", "联系"],
    "Fale comigo": ["Contact me", "Hablemos", "お問い合わせ", "联系我"],
    "Desenvolvedor Full Stack": ["Full Stack Developer", "Desarrollador Full Stack", "フルスタック開発者", "全栈开发者"],
    "Port": ["Port", "Porta", "ポート", "作"],
    "fólio": ["folio", "folio", "フォリオ", "品集"],
    "Foto de Cesar Batista": ["Photo of Cesar Batista", "Foto de Cesar Batista", "Cesar Batistaの写真", "Cesar Batista 的照片"],
    "(Caesar Kairos) — estudante de Desenvolvimento de Sistemas e desenvolvedor Full Stack, com experiência em frontend, backend, APIs, bancos de dados e integração entre serviços e tecnologias.": [
      "(Caesar Kairos) — Systems Development student and Full Stack Developer with experience in frontend, backend, APIs, databases, and service and technology integration.",
      "(Caesar Kairos) — estudiante de Desarrollo de Sistemas y desarrollador Full Stack, con experiencia en frontend, backend, APIs, bases de datos e integración de servicios y tecnologías.",
      "（Caesar Kairos）— システム開発を学ぶフルスタック開発者。フロントエンド、バックエンド、API、データベース、サービス・技術連携の経験があります。",
      "（Caesar Kairos）— 系统开发专业学生和全栈开发者，拥有前端、后端、API、数据库以及服务与技术集成经验。"
    ],
    "APIs REST": ["REST APIs", "APIs REST", "REST API", "REST API"],
    "Automação": ["Automation", "Automatización", "自動化", "自动化"],
    "Quem sou": ["Who I am", "Quién soy", "自己紹介", "关于我"],
    "mim": ["me", "mí", "", ""],
    "Trajetória": ["Journey", "Trayectoria", "これまで", "成长历程"],
    "Meu interesse por programação começou através de vídeos na Internet. O que inicialmente parecia apenas uma área interessante acabou se tornando uma forma de criar coisas que, antes de existirem, eram apenas ideias. Hoje sou estudante de Desenvolvimento de Sistemas e desenvolvedor Full Stack — movido pelo prazer de transformar ideias em algo que realmente funciona, do primeiro código até uma aplicação que possa ser utilizada por alguém.": [
      "My interest in programming began with videos on the Internet. What first seemed like an interesting field became a way to create things that had once existed only as ideas. Today I study Systems Development and work as a Full Stack Developer, driven by the joy of turning ideas into something that truly works—from the first line of code to an application someone can use.",
      "Mi interés por la programación comenzó con videos en Internet. Lo que al principio parecía solo un área interesante se convirtió en una forma de crear cosas que antes solo eran ideas. Hoy estudio Desarrollo de Sistemas y soy desarrollador Full Stack, motivado por convertir ideas en algo que realmente funciona, desde la primera línea de código hasta una aplicación que alguien pueda usar.",
      "プログラミングへの興味は、インターネットの動画から始まりました。最初は面白そうな分野にすぎませんでしたが、やがて頭の中のアイデアを形にする手段になりました。現在はシステム開発を学びながら、最初の一行から誰かが使えるアプリケーションまで、アイデアを実際に動くものへ変えることを楽しむフルスタック開発者です。",
      "我对编程的兴趣始于互联网上的视频。起初它只是一个有趣的领域，后来却成为把想法变成现实的方式。如今我学习系统开发并从事全栈开发，享受将创意从第一行代码变成真正可供他人使用的应用程序。"
    ],
    "O que me move": ["What drives me", "Lo que me motiva", "原動力", "我的动力"],
    "Apesar de atuar em uma área de exatas, me considero profundamente ligado às humanas. Escrevo livros e histórias, tenho interesse por psicologia, arte, cinema, literatura e mitologia. Acredito que tecnologia deve ser acessível — não só no uso, mas no conhecimento para compreendê-la. Com o avanço da inteligência artificial, essa possibilidade de transformar ideias em ferramentas está se tornando cada vez mais real.": [
      "Although I work in a technical field, I feel deeply connected to the humanities. I write books and stories and am interested in psychology, art, film, literature, and mythology. I believe technology should be accessible—not only to use, but also to understand. As artificial intelligence advances, turning ideas into tools is becoming increasingly possible.",
      "Aunque trabajo en un área técnica, me siento profundamente conectado con las humanidades. Escribo libros e historias y me interesan la psicología, el arte, el cine, la literatura y la mitología. Creo que la tecnología debe ser accesible, no solo para usarla, sino también para comprenderla. Con el avance de la inteligencia artificial, convertir ideas en herramientas es cada vez más posible.",
      "技術分野に携わる一方で、人文学にも深いつながりを感じています。本や物語を書き、心理学、芸術、映画、文学、神話に関心があります。技術は使うだけでなく、理解するための知識も含めて身近であるべきだと考えています。AIの進歩により、アイデアをツールへ変える可能性はますます現実的になっています。",
      "虽然从事技术领域，我也与人文学科有着深厚联系。我创作书籍和故事，并对心理学、艺术、电影、文学和神话感兴趣。我认为技术不仅应该易于使用，也应该易于理解。随着人工智能的发展，将想法变成工具正越来越成为现实。"
    ],
    "Fora do código": ["Beyond code", "Fuera del código", "コードの外で", "代码之外"],
    "Gosto muito de cinema, especialmente de filmes que provavelmente passariam despercebidos em qualquer outra circunstância. Também gosto de jogos 2D, como OneShot, e de Minecraft — mesmo sem nunca ter chegado a zerá-lo. Amo a cor verde e aliens estereotipados do cinema: para mim, eles são um exemplo de como a arte molda a percepção coletiva. Uma representação criada décadas atrás que continua definindo o que imaginamos quando pensamos em algo que sequer sabemos se existe.": [
      "I love cinema, especially films that might otherwise go unnoticed. I also enjoy 2D games like OneShot and Minecraft—even though I have never finished it. I love the color green and stereotypical movie aliens: to me, they show how art shapes our collective perception. An image created decades ago still defines what we imagine when thinking about something we do not even know exists.",
      "Me encanta el cine, especialmente las películas que podrían pasar desapercibidas. También disfruto de juegos 2D como OneShot y de Minecraft, aunque nunca lo haya terminado. Me encantan el color verde y los alienígenas estereotipados del cine: para mí, muestran cómo el arte moldea la percepción colectiva. Una imagen creada hace décadas aún define lo que imaginamos de algo cuya existencia ni siquiera conocemos.",
      "映画が大好きで、特に普段なら見過ごされそうな作品に惹かれます。OneShotのような2Dゲームや、まだクリアしたことのないMinecraftも好きです。緑色と映画に登場する典型的な宇宙人も大好きです。それらは、芸術が集合的なイメージをどう形作るかを示しています。何十年も前に生まれた表現が、存在すら分からないものへの想像を今も決めているのです。",
      "我非常喜欢电影，尤其是那些在其他情况下可能被忽视的作品。我也喜欢 OneShot 等 2D 游戏和 Minecraft，尽管从未通关。我喜欢绿色和电影中刻板的外星人形象；它们体现了艺术如何塑造集体认知。几十年前创造的形象，至今仍定义着我们对一种甚至不确定是否存在的事物的想象。"
    ],
    "Visão de futuro": ["Looking ahead", "Visión de futuro", "これから", "未来愿景"],
    "Quero ser alguém a quem outras pessoas possam recorrer quando precisarem de ajuda — em desenvolvimento, na escrita ou na arte. Da mesma forma que comunidades tornaram possível que eu chegasse até aqui, quero poder compartilhar esse caminho. Mais do que acumular conhecimento, quero ser capaz de transmiti-lo.": [
      "I want to be someone people can turn to when they need help—with development, writing, or art. Just as communities made it possible for me to get this far, I want to share that path. More than accumulating knowledge, I want to be able to pass it on.",
      "Quiero ser alguien a quien otros puedan acudir cuando necesiten ayuda, ya sea en desarrollo, escritura o arte. Así como las comunidades hicieron posible que llegara hasta aquí, quiero compartir ese camino. Más que acumular conocimiento, quiero ser capaz de transmitirlo.",
      "開発、文章、芸術で助けが必要なときに頼ってもらえる人になりたいです。コミュニティのおかげでここまで来られたように、その道のりを共有したい。知識を蓄えるだけでなく、伝えられる人でありたいと思っています。",
      "我希望成为他人在开发、写作或艺术方面需要帮助时可以求助的人。正如社区帮助我走到今天，我也想分享这条道路。比起积累知识，我更希望能够传递知识。"
    ],
    "O que construí": ["What I have built", "Lo que he creado", "制作したもの", "我的作品"],
    "Ferramentas e saberes": ["Tools and knowledge", "Herramientas y conocimientos", "ツールとスキル", "工具与技能"],
    "Cursos": ["Education", "Formación", "学習歴", "教育经历"],
    "Ferramentas": ["Tools", "Herramientas", "ツール", "工具"],
    "Tecnologias": ["Technologies", "Tecnologías", "技術", "技术"],
    "Experiências": ["Experience", "Experiencia", "経験", "经历"],
    "Curiosidade intelectual": ["Intellectual curiosity", "Curiosidad intelectual", "知的好奇心", "求知欲"],
    "Escrita criativa": ["Creative writing", "Escritura creativa", "創作", "创意写作"],
    "Aprendizado autodidata": ["Self-directed learning", "Aprendizaje autodidacta", "独学", "自主学习"],
    "Pensamento crítico": ["Critical thinking", "Pensamiento crítico", "批判的思考", "批判性思维"],
    "Comunicação clara": ["Clear communication", "Comunicación clara", "明確なコミュニケーション", "清晰沟通"],
    "Interesse em compartilhar": ["Eagerness to share", "Interés en compartir", "共有への意欲", "乐于分享"],
    "Inglês": ["English", "Inglés", "英語", "英语"],
    "Francês": ["French", "Francés", "フランス語", "法语"],
    "Curso Técnico Integrado ao Ensino Médio em Análise e Desenvolvimento de Sistemas (ADS) — E.E. Profª Maria Aparecida Félix Porto": ["Integrated Technical High School Program in Systems Analysis and Development — E.E. Prof. Maria Aparecida Félix Porto", "Programa técnico integrado de secundaria en Análisis y Desarrollo de Sistemas — E.E. Prof. Maria Aparecida Félix Porto", "システム分析・開発 高校統合技術課程 — E.E. Prof. Maria Aparecida Félix Porto", "系统分析与开发综合技术高中课程 — E.E. Prof. Maria Aparecida Félix Porto"],
    "FECEG de Guarulhos — projeto O.F.F. vencedor, selecionado para representar a cidade na FEBRACE (desenvolvido em equipe)": ["Guarulhos FECEG — winning O.F.F. project, selected to represent the city at FEBRACE (team project)", "FECEG de Guarulhos — proyecto O.F.F. ganador, seleccionado para representar a la ciudad en FEBRACE (trabajo en equipo)", "グアルーリョスFECEG — O.F.F.が優勝し、市代表としてFEBRACEに選出（チーム制作）", "瓜鲁柳斯 FECEG — O.F.F. 项目获胜，并入选代表该市参加 FEBRACE（团队项目）"],
    "Escrita e reflexão": ["Writing and reflection", "Escritura y reflexión", "文章と思索", "写作与思考"],
    "Ver mais artigos": ["View more articles", "Ver más artículos", "記事をもっと見る", "查看更多文章"],
    "Todos os artigos": ["All articles", "Todos los artículos", "すべての記事", "所有文章"],
    "← Voltar para o portfólio": ["← Back to portfolio", "← Volver al portafolio", "← ポートフォリオに戻る", "← 返回作品集"],
    "Vamos conversar": ["Let's talk", "Hablemos", "お話ししましょう", "欢迎交流"],
    "Tem um projeto em mente?": ["Have a project in mind?", "¿Tienes un proyecto en mente?", "プロジェクトのアイデアがありますか？", "有项目想法吗？"],
    "Estou sempre aberto a novas oportunidades, colaborações e conversas sobre tecnologia, escrita ou ideias.": ["I am always open to new opportunities, collaborations, and conversations about technology, writing, or ideas.", "Siempre estoy abierto a nuevas oportunidades, colaboraciones y conversaciones sobre tecnología, escritura o ideas.", "新しい機会やコラボレーション、技術・文章・アイデアについてのお話をいつでも歓迎しています。", "我始终欢迎新的机会、合作，以及有关技术、写作或创意的交流。"],
    "Feito com": ["Made with", "Hecho con", "", "用"],
    "e muito café": ["and lots of coffee", "y mucho café", "とたくさんのコーヒーで制作", "和许多咖啡制作"],
    "Detalhes do projeto": ["Project details", "Detalles del proyecto", "プロジェクト詳細", "项目详情"],
    "Projeto": ["Project", "Proyecto", "プロジェクト", "项目"],
    "Reconhecimento": ["Recognition", "Reconocimiento", "受賞歴", "荣誉"],
    "O que o projeto faz": ["What the project does", "Qué hace el proyecto", "プロジェクトの機能", "项目功能"],
    "Abrir projeto": ["Open project", "Abrir proyecto", "プロジェクトを開く", "打开项目"],
    "Ver no GitHub": ["View on GitHub", "Ver en GitHub", "GitHubで見る", "在 GitHub 查看"],
    "Voltar pro portfólio": ["Back to portfolio", "Volver al portafolio", "ポートフォリオに戻る", "返回作品集"],
    "Voltar para o portfólio": ["Back to portfolio", "Volver al portafolio", "ポートフォリオに戻る", "返回作品集"],
    "Projeto não encontrado": ["Project not found", "Proyecto no encontrado", "プロジェクトが見つかりません", "未找到项目"],
    "O slug informado não corresponde a nenhum projeto existente. Volte ao portfólio para continuar navegando.": ["The provided slug does not match any existing project. Return to the portfolio to continue browsing.", "El identificador indicado no corresponde a ningún proyecto. Vuelve al portafolio para continuar.", "指定された識別子に一致するプロジェクトはありません。ポートフォリオに戻ってご覧ください。", "提供的标识与任何现有项目都不匹配。请返回作品集继续浏览。"],
    "Saiba mais": ["Learn more", "Más información", "詳しく見る", "了解更多"],
    "Abrir": ["Open", "Abrir", "開く", "打开"],
    "Leia em Substack": ["Read on Substack", "Leer en Substack", "Substackで読む", "在 Substack 阅读"],
    "Em breve": ["Coming soon", "Próximamente", "近日公開", "即将推出"],
    "Toggle menu": ["Toggle menu", "Abrir o cerrar menú", "メニューを切り替える", "切换菜单"],
    "Enviar mensagem para Cesar pelo WhatsApp": ["Message Cesar on WhatsApp", "Enviar un mensaje a Cesar por WhatsApp", "WhatsAppでCesarにメッセージを送る", "通过 WhatsApp 向 Cesar 发送消息"],

    // Project and article data
    "projeto escolar": ["school project", "proyecto escolar", "学校プロジェクト", "学校项目"],
    "projeto pessoal": ["personal project", "proyecto personal", "個人プロジェクト", "个人项目"],
    "Biblioteca Inteligente": ["Smart Library", "Biblioteca Inteligente", "スマート図書館", "智能图书馆"],
    "Música → Filme": ["Music → Film", "Música → Película", "音楽 → 映画", "音乐 → 电影"],
    "Seu gosto cinematográfico será julgado": ["Your taste in film will be judged", "Tu gusto cinematográfico será juzgado", "あなたの映画の好みを審査します", "你的电影品味将接受评判"],
    "Narrativa interativa e investigativa em 2D": ["Interactive investigative 2D narrative", "Narrativa interactiva y de investigación en 2D", "2Dインタラクティブ調査ストーリー", "2D 互动调查叙事"],
    "Narrativa interativa em pixel art sobre problemas socioambientais urbanos e periféricos, os ODS e o racismo ambiental. Projeto em desenvolvimento.": ["An interactive pixel-art narrative about urban and peripheral socio-environmental issues, the SDGs, and environmental racism. Currently in development.", "Narrativa interactiva en pixel art sobre problemas socioambientales urbanos y periféricos, los ODS y el racismo ambiental. Proyecto en desarrollo.", "都市部・周縁部の社会環境問題、SDGs、環境的人種差別を扱うピクセルアートのインタラクティブ作品。開発中。", "以像素艺术呈现的互动叙事，探讨城市及边缘地区的社会环境问题、可持续发展目标和环境种族主义。项目开发中。"],
    "Projeto vencedor da FECEG de Guarulhos, selecionado para representar a cidade na FEBRACE.": ["Winner at Guarulhos FECEG, selected to represent the city at FEBRACE.", "Proyecto ganador de la FECEG de Guarulhos, seleccionado para representar a la ciudad en FEBRACE.", "グアルーリョスFECEG優勝、市代表としてFEBRACEに選出。", "瓜鲁柳斯 FECEG 获奖项目，入选代表该市参加 FEBRACE。"],
    "FECEG de Guarulhos — seleção para a FEBRACE": ["Guarulhos FECEG — selected for FEBRACE", "FECEG de Guarulhos — selección para FEBRACE", "グアルーリョスFECEG — FEBRACE選出", "瓜鲁柳斯 FECEG — 入选 FEBRACE"],
    "O.F.F. — Onde Falta Futuro é uma narrativa interativa e investigativa em 2D, com estética pixel art. A equipe desenvolve o projeto para abordar problemas socioambientais em contextos urbanos e periféricos, relacionando os Objetivos de Desenvolvimento Sustentável (ODS) ao racismo ambiental.": ["O.F.F. — Where the Future Is Missing is an interactive investigative 2D narrative with a pixel-art aesthetic. The team is developing it to address socio-environmental issues in urban and peripheral settings, connecting the Sustainable Development Goals (SDGs) with environmental racism.", "O.F.F. — Donde Falta Futuro es una narrativa interactiva y de investigación en 2D con estética pixel art. El equipo desarrolla el proyecto para abordar problemas socioambientales urbanos y periféricos, relacionando los Objetivos de Desarrollo Sostenible (ODS) con el racismo ambiental.", "O.F.F. — Onde Falta Futuroは、ピクセルアートで描く2Dインタラクティブ調査ストーリーです。都市部や周縁部の社会環境問題を取り上げ、持続可能な開発目標（SDGs）と環境的人種差別を結び付けて考える作品です。", "O.F.F. — Onde Falta Futuro 是一部采用像素艺术风格的 2D 互动调查叙事。团队通过该项目探讨城市及边缘地区的社会环境问题，并将可持续发展目标（SDG）与环境种族主义联系起来。"],
    "Narrativa investigativa acompanhando Lyanna, uma jornalista que apura problemas enfrentados em sua cidade": ["An investigative narrative following Lyanna, a journalist looking into problems affecting her city", "Narrativa de investigación que acompaña a Lyanna, una periodista que investiga los problemas de su ciudad", "街が抱える問題を調べる記者Lyannaを追う調査ストーリー", "跟随记者 Lyanna 调查其所在城市问题的叙事"],
    "Abordagem de questões socioambientais e dos Objetivos de Desenvolvimento Sustentável": ["Exploration of socio-environmental issues and the Sustainable Development Goals", "Tratamiento de cuestiones socioambientales y de los Objetivos de Desarrollo Sostenible", "社会環境問題と持続可能な開発目標を扱う", "探讨社会环境问题与可持续发展目标"],
    "Projeto em desenvolvimento": ["Project in development", "Proyecto en desarrollo", "開発中のプロジェクト", "开发中的项目"],
    "Sistema para gerenciamento de bibliotecas físicas escolares, reunindo acervo, circulação, leitores, agenda e gestão em uma aplicação desktop com acesso complementar pelo navegador.": ["A management system for physical school libraries that brings collections, circulation, readers, scheduling, and administration together in a desktop app with supplementary browser access.", "Sistema de gestión de bibliotecas escolares físicas que reúne catálogo, circulación, lectores, agenda y administración en una aplicación de escritorio con acceso complementario desde el navegador.", "学校の物理図書館向け管理システム。蔵書、貸出、利用者、予定、運営をデスクトップアプリにまとめ、ブラウザからも補助的にアクセスできます。", "面向学校实体图书馆的管理系统，将馆藏、借阅、读者、日程和管理整合到桌面应用中，并支持通过浏览器辅助访问。"],
    "BIBI é uma solução para bibliotecas físicas escolares. O computador da biblioteca mantém os dados localmente e executa a aplicação desktop, enquanto leitores também podem acessar áreas permitidas pelo navegador. A evolução atual amplia o sistema com contas individuais, convites, perfil, reservas, notificações e ferramentas de gestão de dados.": ["BIBI is a solution for physical school libraries. The library computer stores data locally and runs the desktop app, while readers can access permitted areas through a browser. Its current evolution adds individual accounts, invitations, profiles, reservations, notifications, and data-management tools.", "BIBI es una solución para bibliotecas escolares físicas. El ordenador de la biblioteca guarda los datos localmente y ejecuta la aplicación de escritorio, mientras que los lectores acceden a las áreas permitidas desde el navegador. Su evolución añade cuentas individuales, invitaciones, perfiles, reservas, notificaciones y herramientas de gestión de datos.", "BIBIは学校の物理図書館向けソリューションです。図書館のPCがデータをローカル保存してデスクトップアプリを動かし、利用者は許可された範囲をブラウザから利用できます。個人アカウント、招待、プロフィール、予約、通知、データ管理機能を拡充しています。", "BIBI 是面向学校实体图书馆的解决方案。图书馆电脑在本地保存数据并运行桌面应用，读者也可通过浏览器访问获准区域。目前系统正在加入个人账户、邀请、个人资料、预约、通知和数据管理工具。"],
    "Acervo físico com pesquisa, disponibilidade, exemplares, localização, capas e cadastro por ISBN": ["Physical collection with search, availability, copies, locations, covers, and ISBN registration", "Catálogo físico con búsqueda, disponibilidad, ejemplares, ubicación, portadas y registro por ISBN", "検索、在庫、冊数、場所、表紙、ISBN登録を備えた物理蔵書管理", "支持搜索、可用状态、复本、位置、封面和 ISBN 登记的实体馆藏"],
    "Contas individuais para bibliotecários e leitores, com convites, perfil e permissões": ["Individual librarian and reader accounts with invitations, profiles, and permissions", "Cuentas individuales para bibliotecarios y lectores con invitaciones, perfiles y permisos", "招待、プロフィール、権限を備えた司書・利用者別アカウント", "面向图书管理员和读者的个人账户，包含邀请、资料和权限"],
    "Empréstimos, devoluções, renovações, reservas e histórico de circulação": ["Loans, returns, renewals, reservations, and circulation history", "Préstamos, devoluciones, renovaciones, reservas e historial de circulación", "貸出、返却、延長、予約、利用履歴", "借阅、归还、续借、预约和流通历史"],
    "Dashboard, agenda, notificações e recursos de gestão para a biblioteca": ["Dashboard, schedule, notifications, and library-management features", "Panel, agenda, notificaciones y funciones de gestión bibliotecaria", "ダッシュボード、予定、通知、図書館管理機能", "仪表板、日程、通知和图书馆管理功能"],
    "Importação por CSV e backup consistente dos dados, capas e configurações": ["CSV import and consistent backups of data, covers, and settings", "Importación por CSV y copias de seguridad coherentes de datos, portadas y ajustes", "CSVインポートとデータ・表紙・設定の一貫したバックアップ", "CSV 导入以及数据、封面和设置的一致备份"],
    "Recomendador que transforma a vibe de uma a três músicas em cinema, combinando análise emocional, busca vetorial e um catálogo próprio de filmes.": ["A recommender that turns the vibe of one to three songs into cinema by combining emotional analysis, vector search, and a custom film catalog.", "Un recomendador que transforma la vibra de una a tres canciones en cine combinando análisis emocional, búsqueda vectorial y un catálogo propio de películas.", "1〜3曲の雰囲気を、感情分析・ベクトル検索・独自の映画カタログを組み合わせて映画へ変換する推薦サービス。", "将一至三首歌曲的氛围转化为电影推荐，结合情感分析、向量搜索和自有电影目录。"],
    "Disponível online, o Moovibe recebe de uma a três músicas, analisa letra e contexto e transforma esse material em um perfil de vibe. A busca combina proximidade vetorial e comparação matemática, sempre dentro de um catálogo cinematográfico próprio; o Gemini atua somente como curador final dos candidatos encontrados.": ["Available online, Moovibe takes one to three songs, analyzes their lyrics and context, and turns them into a vibe profile. Search combines vector proximity and mathematical comparison within a proprietary film catalog; Gemini only performs the final curation of retrieved candidates.", "Disponible en línea, Moovibe recibe de una a tres canciones, analiza su letra y contexto y las convierte en un perfil de vibra. La búsqueda combina proximidad vectorial y comparación matemática dentro de un catálogo propio; Gemini solo realiza la selección final de los candidatos encontrados.", "オンラインで利用できるMoovibeは、1〜3曲の歌詞と背景を分析し、雰囲気のプロフィールに変換します。独自の映画カタログ内でベクトル近傍検索と数理比較を組み合わせ、Geminiは取得候補の最終選定だけを担当します。", "Moovibe 可在线使用，它接收一至三首歌曲，分析歌词和语境并生成氛围画像。搜索在自有电影目录内结合向量邻近度与数学比较；Gemini 仅负责对检索候选结果进行最终筛选。"],
    "Busca por uma a três músicas com análise de letra, contexto e dimensões emocionais": ["Search using one to three songs with analysis of lyrics, context, and emotional dimensions", "Búsqueda con una a tres canciones y análisis de letra, contexto y dimensiones emocionales", "1〜3曲の歌詞・背景・感情軸を分析して検索", "通过一至三首歌曲搜索，并分析歌词、语境和情感维度"],
    "Recomendação híbrida que une busca vetorial e comparação matemática de vibe": ["Hybrid recommendations combining vector search and mathematical vibe comparison", "Recomendación híbrida que combina búsqueda vectorial y comparación matemática de vibra", "ベクトル検索と雰囲気の数理比較を組み合わせたハイブリッド推薦", "结合向量搜索与氛围数学比较的混合推荐"],
    "Curadoria final restrita aos filmes reais recuperados do catálogo próprio": ["Final curation restricted to real films retrieved from the custom catalog", "Selección final limitada a películas reales recuperadas del catálogo propio", "独自カタログから取得した実在映画だけを最終選定", "最终筛选仅限于从自有目录检索到的真实电影"],
    "Pipeline autônomo que descobre, enriquece e indexa novos filmes continuamente": ["An autonomous pipeline that continuously discovers, enriches, and indexes new films", "Pipeline autónomo que descubre, enriquece e indexa nuevas películas continuamente", "新しい映画を継続的に発見・拡充・索引化する自律パイプライン", "持续发现、丰富并索引新电影的自主流水线"],
    "Experiência interativa que transforma o export de uma conta do Letterboxd em um julgamento cinematográfico personalizado, usando padrões reais da conta como evidência.": ["An interactive experience that turns a Letterboxd account export into a personalized film verdict, using real account patterns as evidence.", "Una experiencia interactiva que convierte la exportación de una cuenta de Letterboxd en un juicio cinematográfico personalizado, usando patrones reales de la cuenta como evidencia.", "Letterboxdアカウントのエクスポートを、実際の視聴傾向を証拠にした個別の映画批評へ変えるインタラクティブ体験。", "一种互动体验，将 Letterboxd 账户导出内容转化为个性化电影评判，并以账户中的真实模式作为依据。"],
    "Judge My Letterboxd recebe o ZIP oficial exportado pelo Letterboxd, interpreta o histórico cinematográfico da conta e transforma estatísticas, notas, reviews, rewatches, listas, tags e outros padrões em uma apresentação narrativa conduzida por IA. O conteúdo e a apresentação são separados: o backend seleciona e valida evidências, enquanto a interface encena o julgamento com eventos estruturados.": ["Judge My Letterboxd accepts the official ZIP exported by Letterboxd, interprets the account's viewing history, and turns statistics, ratings, reviews, rewatches, lists, tags, and other patterns into an AI-led narrative. Content and presentation are separate: the backend selects and validates evidence while the interface stages the verdict through structured events.", "Judge My Letterboxd recibe el ZIP oficial exportado por Letterboxd, interpreta el historial cinematográfico de la cuenta y convierte estadísticas, notas, reseñas, repeticiones, listas, etiquetas y otros patrones en una narrativa dirigida por IA. El backend selecciona y valida las pruebas, mientras la interfaz escenifica el juicio con eventos estructurados.", "Judge My LetterboxdはLetterboxd公式のZIPを受け取り、視聴履歴を解析して統計、評価、レビュー、再視聴、リスト、タグなどをAIによる物語形式の審査に変えます。バックエンドが証拠を選定・検証し、画面が構造化イベントで審査を演出します。", "Judge My Letterboxd 接收 Letterboxd 官方导出的 ZIP，解析账户观影历史，并将统计、评分、评论、重看、列表、标签等模式转化为 AI 驱动的叙事展示。后端选择并验证证据，界面则通过结构化事件呈现评判过程。"],
    "Upload e análise do ZIP oficial exportado pelo Letterboxd diretamente no navegador": ["Upload and analysis of the official Letterboxd export ZIP directly in the browser", "Carga y análisis del ZIP oficial de Letterboxd directamente en el navegador", "Letterboxd公式ZIPをブラウザで直接アップロード・解析", "直接在浏览器中上传并分析 Letterboxd 官方导出 ZIP"],
    "Leitura de filmes vistos, notas, reviews, rewatches, listas, tags, likes e outros padrões da conta": ["Reads watched films, ratings, reviews, rewatches, lists, tags, likes, and other account patterns", "Lee películas vistas, notas, reseñas, repeticiones, listas, etiquetas, likes y otros patrones", "視聴作品、評価、レビュー、再視聴、リスト、タグ、いいね等を解析", "读取已看电影、评分、评论、重看、列表、标签、点赞等账户模式"],
    "Análise determinística combinada com Gemini para construir um julgamento baseado em evidências reais": ["Deterministic analysis combined with Gemini to build a verdict from real evidence", "Análisis determinista combinado con Gemini para crear un juicio basado en pruebas reales", "決定論的分析とGeminiを組み合わせ、実際の証拠に基づく審査を生成", "将确定性分析与 Gemini 结合，依据真实证据构建评判"],
    "Apresentação estruturada com mensagens, filmes, pares, grupos, reviews, estatísticas e efeitos de ritmo": ["Structured presentation with messages, films, pairs, groups, reviews, statistics, and pacing effects", "Presentación estructurada con mensajes, películas, pares, grupos, reseñas, estadísticas y efectos de ritmo", "メッセージ、作品、ペア、グループ、レビュー、統計、テンポ効果による構造化表示", "通过消息、电影、配对、分组、评论、统计和节奏效果进行结构化展示"],
    "Resolução de pôsteres via TMDB com fallback visual quando nenhuma imagem é encontrada": ["Poster resolution through TMDB with a visual fallback when no image is found", "Resolución de pósteres mediante TMDB con alternativa visual cuando no hay imagen", "TMDBからポスターを取得し、画像がない場合は代替表示", "通过 TMDB 获取海报，未找到图片时使用视觉备用方案"],
    "Interface disponível em português e inglês, com atenção a teclado, responsividade e reduced motion": ["Interface available in Portuguese and English, with keyboard accessibility, responsive design, and reduced-motion support", "Interfaz disponible en portugués e inglés, con accesibilidad por teclado, diseño adaptable y movimiento reducido", "ポルトガル語・英語対応。キーボード操作、レスポンシブ表示、動きを減らす設定にも配慮", "界面支持葡萄牙语和英语，并兼顾键盘操作、响应式设计和减少动态效果"],
    "A urgência da regulamentação da Internet brasileira diante da normalização do crime e do assédio nas redes sociais": ["The urgency of regulating the Brazilian Internet amid the normalization of crime and harassment on social media", "La urgencia de regular Internet en Brasil ante la normalización del delito y el acoso en las redes sociales", "SNSで犯罪と嫌がらせが常態化する中、ブラジルのインターネット規制が急務である理由", "面对社交媒体上犯罪与骚扰常态化，巴西互联网监管迫在眉睫"],
    "Quando o virtual reproduz o real: violência, impunidade e a urgência de leis eficazes.": ["When the virtual mirrors reality: violence, impunity, and the urgent need for effective laws.", "Cuando lo virtual reproduce lo real: violencia, impunidad y la urgencia de leyes eficaces.", "仮想空間が現実を映すとき：暴力、不処罰、そして実効性ある法律の必要性。", "当虚拟世界映照现实：暴力、有罪不罚，以及制定有效法律的迫切需要。"],
    "Nós nunca vimos um alienígena!": ["We have never seen an alien!", "¡Nunca hemos visto un alienígena!", "私たちは宇宙人を見たことがない！", "我们从未见过外星人！"],
    "Sobre como a arte constrói as imagens com que imaginamos aquilo que não conhecemos, moldando o imaginário comum.": ["How art creates the images through which we imagine the unknown, shaping our shared imagination.", "Sobre cómo el arte construye las imágenes con las que imaginamos lo desconocido y moldea el imaginario colectivo.", "芸術が未知のものを想像するためのイメージを作り、共通の想像力を形作ることについて。", "关于艺术如何构建我们想象未知事物的图像，并塑造共同想象。"]
  };

  const localeIndex = { en: 0, es: 1, ja: 2, "zh-CN": 3 };
  function translate(value) {
    if (language === "pt-BR" || typeof value !== "string") return value;
    const normalized = value.trim().replace(/\s+/g, " ");
    const entry = messages[normalized];
    if (!entry) return value;
    return entry[localeIndex[language]] || entry[0];
  }

  function translateObject(value, seen) {
    if (!value || typeof value !== "object") return value;
    const visited = seen || new WeakSet();
    if (visited.has(value)) return value;
    visited.add(value);
    Object.keys(value).forEach((key) => {
      if (typeof value[key] === "string") value[key] = translate(value[key]);
      else translateObject(value[key], visited);
    });
    return value;
  }

  function translateDocument(root) {
    const scope = root || document;
    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(parent.tagName) || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const original = node.nodeValue;
      const trimmed = original.trim();
      const localized = translate(trimmed);
      if (localized !== trimmed) {
        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];
        node.nodeValue = leading + localized + trailing;
      }
    });

    scope.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
      ["aria-label", "alt", "title"].forEach((attribute) => {
        if (element.hasAttribute(attribute)) {
          element.setAttribute(attribute, translate(element.getAttribute(attribute)));
        }
      });
    });
    if (document.title) document.title = translate(document.title);
  }

  window.siteI18n = { language, t: translate, translateObject, translateDocument };
  document.addEventListener("DOMContentLoaded", () => translateDocument(document));
})();
