import type { Project } from "@/types";

/**
 * Every claim here is drawn from each project's own README. Metrics are only
 * included where the repository documents them. Priority order is intentional:
 * Data Fuel leads as the flagship case study.
 */
export const projects: Project[] = [
  {
    id: "data-fuel",
    name: "Data Fuel",
    category: "ai",
    flagship: true,
    repoType: "source",
    github: "https://github.com/JoanOliver04/Data_Fuel",
    badge: { en: "Source available", es: "Código disponible" },
    tech: [
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "React",
      "TypeScript",
      "scikit-learn",
      "SHAP",
      "Leaflet",
      "Clean Architecture",
    ],
    images: [
      {
        src: "/projects/data-fuel/01-dashboard.png",
        caption: { en: "Stations ranked by real total cost", es: "Gasolineras ordenadas por coste total real" },
      },
      {
        src: "/projects/data-fuel/02-shap.png",
        caption: { en: "Explainable AI verdict with exact SHAP attributions", es: "Veredicto de IA explicable con atribuciones SHAP exactas" },
      },
      {
        src: "/projects/data-fuel/03-simulator.png",
        caption: { en: "Total-cost simulator: fuel plus the drive", es: "Simulador de coste total: combustible más el trayecto" },
      },
      {
        src: "/projects/data-fuel/04-traffic.png",
        caption: { en: "Live traffic and price heatmap", es: "Mapa de calor de precios y tráfico en tiempo real" },
      },
      {
        src: "/projects/data-fuel/05-model.png",
        caption: { en: "Global feature importance of the forecast model", es: "Importancia global de las variables del modelo" },
      },
      {
        src: "/projects/data-fuel/06-dark.png",
        caption: { en: "Full dark mode", es: "Modo oscuro completo" },
      },
    ],
    tagline: {
      en: "Find the cheapest fill-up by total cost — not by price per litre.",
      es: "Encuentra el repostaje más barato por coste total, no por precio por litro.",
    },
    problem: {
      en: "Driving 15 km to save two cents a litre can cost you more than it saves. Data Fuel optimises the number that actually matters: the total cost of refuelling — the fuel plus the drive to get there.",
      es: "Conducir 15 km para ahorrar dos céntimos por litro puede costarte más de lo que ahorras. Data Fuel optimiza el número que de verdad importa: el coste total de repostar — el combustible más el trayecto hasta la gasolinera.",
    },
    product: {
      en: "A full-stack platform built on official Spanish MITECO fuel data. It ranks stations by total cost, factors in distance and live traffic, predicts where prices are heading, and explains every recommendation.",
      es: "Una plataforma full-stack construida sobre los datos oficiales de carburantes del MITECO. Ordena las gasolineras por coste total, tiene en cuenta la distancia y el tráfico en tiempo real, predice hacia dónde van los precios y explica cada recomendación.",
    },
    highlights: {
      en: [
        "Clean Architecture backend in FastAPI with strict, async, one-way layering.",
        "Machine-learning price forecasts (scikit-learn) validated with a leakage-free, time-based split.",
        "Explainable AI: exact SHAP attributions behind every “refuel now / wait” verdict.",
        "690 automated tests (backend + frontend) at 86% coverage, with strict typing on both sides.",
        "Route-aware optimisation: distance, ETA and traffic priced into a single score.",
        "Performance pass — SQL prefiltering, TTL caching and lazy-loaded frontend chunks.",
      ],
      es: [
        "Backend con Clean Architecture en FastAPI y capas asíncronas estrictas en una sola dirección.",
        "Predicción de precios con machine learning (scikit-learn) validada con una partición temporal sin fuga de datos.",
        "IA explicable: atribuciones SHAP exactas detrás de cada veredicto «repostar ahora / esperar».",
        "690 tests automatizados (backend + frontend) con 86% de cobertura y tipado estricto en ambos lados.",
        "Optimización consciente de la ruta: distancia, tiempo estimado y tráfico integrados en una sola puntuación.",
        "Optimización de rendimiento: prefiltrado en SQL, caché TTL y carga diferida en el frontend.",
      ],
    },
    metrics: [
      { en: "690 automated tests", es: "690 tests automatizados" },
      { en: "86% coverage", es: "86% de cobertura" },
      { en: "Official MITECO data", es: "Datos oficiales MITECO" },
      { en: "SHAP explainability", es: "Explicabilidad con SHAP" },
    ],
  },
  {
    id: "fitprompt",
    name: "FitPrompt",
    category: "ai",
    repoType: "source",
    github: "https://github.com/JoanOliver04/FitPrompt",
    badge: { en: "Source available", es: "Código disponible" },
    team: { en: "Team project · 2 developers", es: "Proyecto en equipo · 2 desarrolladores" },
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Groq · Llama 3.3 70B",
      "NextAuth",
      "Stripe",
      "Zod",
    ],
    images: [
      {
        src: "/projects/fitprompt/01-home.png",
        caption: { en: "Home dashboard", es: "Panel principal" },
      },
      {
        src: "/projects/fitprompt/02-chat-routine.png",
        caption: { en: "Conversational AI building a training routine", es: "IA conversacional creando una rutina de entrenamiento" },
      },
      {
        src: "/projects/fitprompt/03-chat-diet.png",
        caption: { en: "AI nutrition plan grounded in the user profile", es: "Plan de nutrición con IA basado en el perfil del usuario" },
      },
      {
        src: "/projects/fitprompt/04-dashboard.png",
        caption: { en: "Workout tracking and progress", es: "Registro de entrenamientos y progreso" },
      },
      {
        src: "/projects/fitprompt/05-achievements.png",
        caption: { en: "Gamification and achievements", es: "Gamificación y logros" },
      },
      {
        src: "/projects/fitprompt/06-social.png",
        caption: { en: "Social layer", es: "Capa social" },
      },
    ],
    tagline: {
      en: "A conversational AI coach that turns your profile into a real training and nutrition plan.",
      es: "Un entrenador conversacional con IA que convierte tu perfil en un plan real de entrenamiento y nutrición.",
    },
    problem: {
      en: "Generic fitness apps hand everyone the same program. FitPrompt grounds every AI response in the user's actual profile — goals, level, equipment, schedule, injuries and dietary needs.",
      es: "Las apps de fitness genéricas dan el mismo programa a todo el mundo. FitPrompt fundamenta cada respuesta de la IA en el perfil real del usuario — objetivos, nivel, material, horario, lesiones y necesidades dietéticas.",
    },
    product: {
      en: "Users get personalized workout and nutrition plans through a chat experience, plus workout tracking, progress, gamification and a social graph. Plans come back as structured data the app turns into saveable routines, shopping lists and PDF exports.",
      es: "Los usuarios obtienen planes personalizados de entrenamiento y nutrición mediante un chat, además de registro de entrenamientos, progreso, gamificación y un grafo social. Los planes vuelven como datos estructurados que la app convierte en rutinas guardables, listas de la compra y exportación a PDF.",
    },
    highlights: {
      en: [
        "Profile-grounded prompting — macros and energy targets are computed deterministically in code, not invented by the model.",
        "26-table PostgreSQL schema (Prisma) covering training, gamification and social features.",
        "Groq + Llama 3.3 70B pipeline with prompt-injection hardening and input sanitisation.",
        "One hardened request pipeline: auth, validation, rate limiting and plan gating in a single layer.",
        "Free / Premium product model with Stripe checkout.",
      ],
      es: [
        "Prompts fundamentados en el perfil — las macros y los objetivos energéticos se calculan de forma determinista en código, no los inventa el modelo.",
        "Esquema PostgreSQL de 26 tablas (Prisma) que cubre entrenamiento, gamificación y funciones sociales.",
        "Pipeline con Groq + Llama 3.3 70B, con protección frente a inyección de prompts y saneamiento de entradas.",
        "Un único pipeline de peticiones reforzado: autenticación, validación, límite de tasa y control de plan en una sola capa.",
        "Modelo de producto Free / Premium con pago vía Stripe.",
      ],
    },
    metrics: [
      { en: "26-table schema", es: "Esquema de 26 tablas" },
      { en: "Groq · Llama 3.3 70B", es: "Groq · Llama 3.3 70B" },
      { en: "Stripe billing", es: "Pagos con Stripe" },
    ],
  },
  {
    id: "data-detective",
    name: "Data Detective",
    category: "ai",
    repoType: "source",
    github: "https://github.com/JoanOliver04/Data_Detective",
    badge: { en: "Open source · MIT", es: "Open source · MIT" },
    tech: [
      "Python",
      "pandas",
      "Streamlit",
      "Parquet",
      "Plotly",
      "Folium",
      "NumPy",
      "GitHub Actions",
    ],
    images: [
      {
        src: "/projects/data-detective/01-home.png",
        caption: { en: "Platform overview", es: "Visión general de la plataforma" },
      },
      {
        src: "/projects/data-detective/02-events.png",
        caption: { en: "Quasi-experimental mass-event impact", es: "Impacto cuasi-experimental de eventos masivos" },
      },
      {
        src: "/projects/data-detective/03-air-map.png",
        caption: { en: "Air-quality map", es: "Mapa de calidad del aire" },
      },
      {
        src: "/projects/data-detective/04-forecast.png",
        caption: { en: "Interpretable 72-hour forecast", es: "Pronóstico interpretable a 72 horas" },
      },
      {
        src: "/projects/data-detective/05-anomalies.png",
        caption: { en: "Anomaly detection", es: "Detección de anomalías" },
      },
      {
        src: "/projects/data-detective/06-comparator.png",
        caption: { en: "Baseline day comparator", es: "Comparador con días de línea base" },
      },
    ],
    tagline: {
      en: "How much does a mass event actually move a city's air?",
      es: "¿Cuánto altera realmente el aire de una ciudad un evento multitudinario?",
    },
    problem: {
      en: "Most air-quality dashboards plot a pollutant and stop. The real question is causal: does a festival like Fallas actually raise pollution, or is it just a busy spring week that would have looked the same anyway?",
      es: "La mayoría de paneles de calidad del aire dibujan un contaminante y se quedan ahí. La pregunta real es causal: ¿unas Fallas suben de verdad la contaminación, o es solo una semana ajetreada de primavera que se habría visto igual de todos modos?",
    },
    product: {
      en: "A Big Data platform that fuses decades of environmental archives with live sensor streams to measure — quasi-experimentally — the real impact of Fallas, concerts and city festivities on Valencia's air quality and traffic.",
      es: "Una plataforma de Big Data que fusiona décadas de archivos ambientales con datos de sensores en tiempo real para medir —de forma cuasi-experimental— el impacto real de las Fallas, los conciertos y las fiestas de la ciudad sobre la calidad del aire y el tráfico de Valencia.",
    },
    highlights: {
      en: [
        "Quasi-experimental design: each event is compared against a baseline of matched, comparable days (same month and weekday, dry, event-free) — controlling for season, weekly rhythm and weather before any impact is reported.",
        "Nine official data sources fused into one schema, with a 121K-row pollution dataset in columnar Parquet.",
        "Composite air-quality and urban-quality indices, plus an interpretable next-day forecast.",
        "123 automated tests at 90% coverage, type-checked, with CI running on every push.",
        "Honest about its limits — a documented quasi-experiment, not a randomised one.",
      ],
      es: [
        "Diseño cuasi-experimental: cada evento se compara con una línea base de días equiparables (mismo mes y día de la semana, secos y sin eventos), controlando estación, ritmo semanal y meteorología antes de calcular ningún impacto.",
        "Nueve fuentes oficiales fusionadas en un mismo esquema, con un conjunto de 121K filas de contaminación en Parquet columnar.",
        "Índices compuestos de calidad del aire y calidad urbana, y una previsión interpretable a un día.",
        "123 tests automatizados con 90% de cobertura, tipado y CI en cada push.",
        "Honesto con sus límites — un cuasi-experimento documentado, no un experimento aleatorizado.",
      ],
    },
    metrics: [
      { en: "123 tests · 90% coverage", es: "123 tests · 90% cobertura" },
      { en: "9 official data sources", es: "9 fuentes oficiales" },
      { en: "70+ years of data", es: "70+ años de datos" },
    ],
  },
  {
    id: "minigame-hub",
    name: "Mini-Game Hub",
    category: "ai",
    repoType: "source",
    github: "https://github.com/JoanOliver04/minigame-hub",
    liveUrl: "https://minigame-hub-orcin.vercel.app/",
    badge: { en: "Source available", es: "Código disponible" },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "Cloud Firestore",
      "Web Audio API",
      "CSS",
    ],
    images: [
      {
        src: "/projects/minigame-hub/01-home.png",
        caption: { en: "The hub — 22 mini-games, one scoreboard", es: "El hub — 22 minijuegos, un marcador" },
      },
      {
        src: "/projects/minigame-hub/02-connect-four.png",
        caption: { en: "Connect Four vs a 6-ply minimax opponent", es: "Cuatro en raya contra una IA minimax de 6 niveles" },
      },
      {
        src: "/projects/minigame-hub/03-higher-or-lower.png",
        caption: { en: "Higher or Lower — Hard counts the real deck", es: "Mayor o menor — en difícil cuenta la baraja real" },
      },
      {
        src: "/projects/minigame-hub/04-penalty.png",
        caption: { en: "Penalty Shootout with a pre-commit keeper", es: "Tanda de penaltis con un portero que decide antes" },
      },
      {
        src: "/projects/minigame-hub/05-create-room.png",
        caption: { en: "Create a room and share the code", es: "Crea una sala y comparte el código" },
      },
      {
        src: "/projects/minigame-hub/06-join-room.png",
        caption: { en: "A friend joins live with a 6-char code", es: "Un amigo se une en directo con un código de 6 letras" },
      },
    ],
    tagline: {
      en: "Twenty-two browser mini-games, each with an AI opponent built on a real algorithm — and every one playable live against a friend.",
      es: "Veintidós minijuegos de navegador, cada uno con una IA basada en un algoritmo real — y todos jugables en directo contra un amigo.",
    },
    problem: {
      en: "Game AI is usually a difficulty slider faking a challenge with inflated stats. Mini-Game Hub asks the opposite: can every 'Hard' opponent be an actual algorithm computing its best move in real time, entirely client-side?",
      es: "La IA de los juegos suele ser un control de dificultad que finge un reto inflando estadísticas. Mini-Game Hub plantea lo contrario: ¿puede cada rival en 'difícil' ser un algoritmo real que calcula su mejor jugada en tiempo real, íntegramente en el cliente?",
    },
    product: {
      en: "One bilingual hub over 22 solo games — from minimax and Monte Carlo tree search to XOR nim-sum game theory, A* pathfinding and exact card counting. Every game also runs as a live multiplayer room: a friend joins with a short code and you play head-to-head, backed by a thin Firebase layer with no server of the project's own.",
      es: "Un hub bilingüe sobre 22 juegos en solitario — desde minimax y Monte Carlo tree search hasta teoría de juegos con nim-sum (XOR), pathfinding A* y conteo exacto de cartas. Cada juego funciona además como sala multijugador en directo: un amigo entra con un código corto y jugáis cara a cara, apoyado en una fina capa de Firebase sin servidor propio.",
    },
    highlights: {
      en: [
        "Difficulty is an algorithm, not a multiplier — minimax + alpha-beta, MCTS (UCT), XOR nim-sum optimal play, A* pathfinding, expectimax, information-gain and exact card counting, each running live in a React render loop.",
        "Logic isolated from React: every game's pure rules and AI live in framework-free TypeScript modules, unit-testable and reused verbatim by the multiplayer layer.",
        "Live multiplayer for all 22 games via a game-agnostic Cloud Firestore room layer covering five sync patterns (turn-based, simultaneous-move, lockstep, shared-seed score-attack and live-synced duel) — with zero server compute, on Firebase's free Spark plan.",
        "Access control lives in Firestore Security Rules — seat membership, per-turn ownership and soft room expiry — not in the client.",
        "Type-checked bilingual dictionary (`satisfies`): an EN/ES key drift is a compile error, not a runtime blank.",
        "Registry-driven architecture — the hub grid, routes and scoreboard all derive from one game list, so a new game is an additive, three-file change.",
      ],
      es: [
        "La dificultad es un algoritmo, no un multiplicador — minimax + alfa-beta, MCTS (UCT), juego óptimo con nim-sum (XOR), pathfinding A*, expectimax, ganancia de información y conteo exacto de cartas, todo en tiempo real dentro del render de React.",
        "Lógica aislada de React: las reglas puras y la IA de cada juego viven en módulos de TypeScript sin framework, testables por unidad y reutilizados tal cual por el multijugador.",
        "Multijugador en directo para los 22 juegos mediante una capa de salas en Cloud Firestore agnóstica al juego, con cinco patrones de sincronización (por turnos, movimiento simultáneo, lockstep, score-attack con semilla compartida y duelo sincronizado en vivo) — sin cómputo en servidor, en el plan gratuito Spark de Firebase.",
        "El control de acceso vive en las Security Rules de Firestore — pertenencia al asiento, propiedad del turno y expiración blanda de la sala — no en el cliente.",
        "Diccionario bilingüe con comprobación de tipos (`satisfies`): un desajuste de claves EN/ES es un error de compilación, no un hueco en tiempo de ejecución.",
        "Arquitectura dirigida por registro — la parrilla del hub, las rutas y el marcador derivan de una única lista de juegos, así que añadir un juego es un cambio aditivo de tres ficheros.",
      ],
    },
    metrics: [
      { en: "22 mini-games", es: "22 minijuegos" },
      { en: "22 live multiplayer", es: "22 con multijugador" },
      { en: "6+ real AI algorithms", es: "6+ algoritmos de IA reales" },
      { en: "EN · ES bilingual", es: "Bilingüe EN · ES" },
    ],
  },
  {
    id: "book-piece",
    name: "Book Piece",
    category: "web",
    repoType: "showcase",
    github: "https://github.com/JoanOliver04/book-piece-showcase",
    badge: { en: "Showcase", es: "Muestra" },
    tech: ["Angular", "TypeScript", "RxJS", "PHP", "MySQL", "REST"],
    images: [
      {
        src: "/projects/book-piece/01-home.png",
        caption: { en: "Home, signed in", es: "Pantalla principal con sesión iniciada" },
      },
      {
        src: "/projects/book-piece/02-store.png",
        caption: { en: "Store running on an in-app currency", es: "Tienda con moneda propia de la app" },
      },
      {
        src: "/projects/book-piece/03-library.png",
        caption: { en: "Personal reading library", es: "Biblioteca de lectura personal" },
      },
      {
        src: "/projects/book-piece/04-journal.png",
        caption: { en: "Monthly reading journal", es: "Diario de lecturas mensual" },
      },
      {
        src: "/projects/book-piece/05-social.png",
        caption: { en: "Social layer — find other readers", es: "Capa social — buscar otros lectores" },
      },
      {
        src: "/projects/book-piece/06-admin.png",
        caption: { en: "Role-based admin panel", es: "Panel de administración por roles" },
      },
    ],
    tagline: {
      en: "A marketplace and reading companion for books, comics and manga.",
      es: "Un marketplace y compañero de lectura para libros, cómics y manga.",
    },
    problem: {
      en: "Readers juggle separate apps for buying, organising, tracking and discussing what they read. Book Piece brings all four into one product.",
      es: "Los lectores hacen malabares con apps separadas para comprar, organizar, registrar y comentar lo que leen. Book Piece reúne las cuatro en un solo producto.",
    },
    product: {
      en: "A store, a personal library, a reading journal and a social layer for readers — one product running on an in-app currency, with role-based admin behind it.",
      es: "Una tienda, una biblioteca personal, un diario de lectura y una capa social para lectores — un solo producto con una moneda propia y administración por roles detrás.",
    },
    highlights: {
      en: [
        "Angular 19 single-page app talking to a dependency-free PHP REST API over a relational MySQL schema.",
        "Server-authoritative rules — prepared statements, validated input and ownership checks live in the API, never the UI alone.",
        "Reading library with custom and ranked lists, a monthly journal and per-title reading state.",
      ],
      es: [
        "SPA en Angular 19 que se comunica con una API REST en PHP sin frameworks sobre un esquema relacional en MySQL.",
        "Reglas con autoridad en el servidor — consultas preparadas, validación de entradas y comprobaciones de propiedad viven en la API, nunca solo en la interfaz.",
        "Biblioteca de lectura con listas personalizadas y ordenadas, diario mensual y estado de lectura por título.",
      ],
    },
    note: {
      en: "A public showcase of a completed project; the application source is kept private.",
      es: "Una muestra pública de un proyecto terminado; el código de la aplicación se mantiene privado.",
    },
    origin: {
      en: "Originally built as a Web Application Development (DAW) final project.",
      es: "Desarrollado originalmente como proyecto final del ciclo de Desarrollo de Aplicaciones Web (DAW).",
    },
  },
  {
    id: "brain-craft",
    name: "Brain Craft",
    category: "multiplatform",
    repoType: "showcase",
    github: "https://github.com/JoanOliver04/brain-craft-showcase",
    badge: { en: "Showcase", es: "Muestra" },
    tech: ["JavaScript", "HTML5", "CSS3", "Firebase", "Firestore"],
    images: [
      {
        src: "/projects/brain-craft/01-home.png",
        caption: { en: "Start screen", es: "Pantalla de inicio" },
      },
      {
        src: "/projects/brain-craft/02-battle.png",
        caption: { en: "Each answer is a move in a turn-based duel", es: "Cada respuesta es un movimiento en un duelo por turnos" },
      },
      {
        src: "/projects/brain-craft/03-upgrade.png",
        caption: { en: "Level up and upgrade attributes", es: "Sube de nivel y mejora atributos" },
      },
      {
        src: "/projects/brain-craft/04-roulette.png",
        caption: { en: "Category roulette", es: "Ruleta de categorías" },
      },
      {
        src: "/projects/brain-craft/05-phase1.png",
        caption: { en: "Phase 1 screen", es: "Pantalla de la fase 1" },
      },
      {
        src: "/projects/brain-craft/06-victory.png",
        caption: { en: "Victory screen", es: "Pantalla de victoria" },
      },
    ],
    tagline: {
      en: "A trivia quiz reimagined as a turn-based RPG.",
      es: "Un quiz de trivia reinventado como RPG por turnos.",
    },
    problem: {
      en: "Trivia is usually flat — a list of questions and a score. Brain Craft adds progression and stakes by making each answer a move in a battle.",
      es: "La trivia suele ser plana — una lista de preguntas y una puntuación. Brain Craft añade progresión y tensión convirtiendo cada respuesta en un movimiento de una batalla.",
    },
    product: {
      en: "Answer questions across eight categories where each one is a turn in a duel — level up your character, upgrade health and damage, and fight through four phases to a final boss.",
      es: "Responde preguntas de ocho categorías donde cada una es un turno de un duelo — sube de nivel a tu personaje, mejora vida y daño y avanza por cuatro fases hasta un jefe final.",
    },
    highlights: {
      en: [
        "Client-side game in vanilla JavaScript (ES modules) — no framework, no build step.",
        "Firebase for auth, Firestore persistence and hosting, with per-user access enforced by security rules.",
        "Resilient state — progress in Firestore, an in-progress match mirrored to localStorage so a mid-battle reload resumes instead of restarting.",
      ],
      es: [
        "Juego de cliente en JavaScript vanilla (módulos ES) — sin framework ni paso de compilación.",
        "Firebase para autenticación, persistencia en Firestore y hosting, con acceso por usuario garantizado por reglas de seguridad.",
        "Estado resiliente — el progreso en Firestore y la partida en curso reflejada en localStorage, de modo que recargar a mitad de batalla reanuda en lugar de reiniciar.",
      ],
    },
    note: {
      en: "A public showcase of a completed project; the game source is kept private.",
      es: "Una muestra pública de un proyecto terminado; el código del juego se mantiene privado.",
    },
    origin: {
      en: "Originally built as a Multiplatform Application Development (DAM) final project.",
      es: "Desarrollado originalmente como proyecto final del ciclo de Desarrollo de Aplicaciones Multiplataforma (DAM).",
    },
  },
];
