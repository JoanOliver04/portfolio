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
        src: "/projects/minigame-hub/01-library.png",
        label: { en: "Game library", es: "Biblioteca de juegos" },
        caption: { en: "The library with 37 games, category filters and today’s puzzle", es: "La biblioteca con 37 juegos, filtros por categoría y el puzle diario" },
      },
      {
        src: "/projects/minigame-hub/03-pocket-curling.png",
        label: { en: "Pocket Curling", es: "Curling de bolsillo" },
        caption: { en: "Pocket Curling with two stones in the house and the next delivery lined up", es: "Curling de bolsillo con dos piedras en la diana y el siguiente tiro preparado" },
      },
      {
        src: "/projects/minigame-hub/22-friends-match.png",
        label: { en: "Live room", es: "Partida con amigos" },
        caption: { en: "Alex and Sam drafting numbers in a private Exact Fifteen room", es: "Alex y Sam eligen números en una sala privada de Quince exacto" },
      },
      {
        src: "/projects/minigame-hub/06-match-review.png",
        label: { en: "Match replay", es: "Repetición de partida" },
        caption: { en: "Scrubbing through a finished game of Exact Fifteen, one pick at a time", es: "Repetición de Quince exacto, número a número" },
      },
      {
        src: "/projects/minigame-hub/20-daily-puzzle.png",
        label: { en: "Daily puzzle", es: "Puzle diario" },
        caption: { en: "The daily sliding puzzle on a phone, with a suggested tile", es: "El puzle deslizante diario en móvil, con una ficha sugerida" },
      },
      {
        src: "/projects/minigame-hub/02-favorites.png",
        label: { en: "Favorites", es: "Favoritos" },
        caption: { en: "Six starred games and the Surprise me button in Favorites", es: "Seis juegos guardados y el botón Sorpréndeme en Favoritos" },
      },
      {
        src: "/projects/minigame-hub/05-continue-playing.png",
        label: { en: "Continue playing", es: "Seguir jugando" },
        caption: { en: "Continue playing links back to the saved Mancala and Curling boards", es: "Seguir jugando permite volver a los tableros guardados de Mancala y Curling" },
      },
      {
        src: "/projects/minigame-hub/04-mancala.png",
        label: { en: "Mancala", es: "Mancala" },
        caption: { en: "Mancala after sowing, with seed counts in the pits and stores", es: "Mancala después de sembrar, con las semillas de cada hoyo y granero" },
      },
      {
        src: "/projects/minigame-hub/09-ice-floe.png",
        label: { en: "Ice Floe", es: "Hielo a la deriva" },
        caption: { en: "Two penguins on a shrinking ice field with legal jumps marked", es: "Dos pingüinos sobre hielo que se hunde, con los saltos posibles marcados" },
      },
      {
        src: "/projects/minigame-hub/10-pirate-loot.png",
        label: { en: "Pirate Loot", es: "Botín pirata" },
        caption: { en: "Pirate Loot with treasure available at either end of the row", es: "Botín pirata con tesoros disponibles en los dos extremos de la fila" },
      },
      {
        src: "/projects/minigame-hub/11-dots-boxes.png",
        label: { en: "Dots and Boxes", es: "Puntos y cajas" },
        caption: { en: "A claimed box and the last edge drawn in Dots and Boxes", es: "Una caja cerrada y la última línea dibujada en Puntos y cajas" },
      },
      {
        src: "/projects/minigame-hub/12-mini-reversi.png",
        label: { en: "Mini Reversi", es: "Mini Reversi" },
        caption: { en: "Mini Reversi with legal moves showing how many discs they flip", es: "Mini Reversi muestra cuántas fichas voltea cada jugada posible" },
      },
      {
        src: "/projects/minigame-hub/13-hex-dominion.png",
        label: { en: "Hex Dominion", es: "Dominio Hex" },
        caption: { en: "Blue and red chains competing to connect opposite sides in Hex Dominion", es: "Las cadenas azul y roja intentan unir bordes opuestos en Dominio Hex" },
      },
      {
        src: "/projects/minigame-hub/07-connect-four.png",
        label: { en: "Connect Four", es: "Cuatro en raya" },
        caption: { en: "The four winning discs highlighted on the final Connect Four board", es: "Las cuatro fichas ganadoras resaltadas en el tablero final de Cuatro en raya" },
      },
      {
        src: "/projects/minigame-hub/14-diceforge-arena.png",
        label: { en: "Diceforge Arena", es: "Arena Diceforge" },
        caption: { en: "Choosing a die-face upgrade after a round in Diceforge Arena", es: "Elección de una mejora para el dado tras una ronda de Arena Diceforge" },
      },
      {
        src: "/projects/minigame-hub/16-fleet-command.png",
        label: { en: "Fleet Command", es: "Flota al Mando" },
        caption: { en: "Fleet Command showing enemy waters and the player’s own ships", es: "Flota al Mando muestra las aguas enemigas y los barcos del jugador" },
      },
      {
        src: "/projects/minigame-hub/15-windline-archery.png",
        label: { en: "Windline Archery", es: "Tiro con Viento" },
        caption: { en: "Windline Archery with the target, wind reading and shot result", es: "Tiro con Viento con la diana, el viento y el resultado del tiro" },
      },
      {
        src: "/projects/minigame-hub/17-tile-rummy.png",
        label: { en: "Tile Rummy", es: "Rummy de Fichas" },
        caption: { en: "Tile Rummy with melds on the table and tiles left on the rack", es: "Rummy de Fichas con combinaciones sobre la mesa y fichas en el atril" },
      },
      {
        src: "/projects/minigame-hub/18-invite-a-friend.png",
        label: { en: "Invite a friend", es: "Invitar a un amigo" },
        caption: { en: "Creating a private room with Pocket Curling selected", es: "Creación de una sala privada con Curling de bolsillo seleccionado" },
      },
      {
        src: "/projects/minigame-hub/19-join-on-mobile.png",
        label: { en: "Join on mobile", es: "Unirse desde el móvil" },
        caption: { en: "Joining a friend by room code on a phone", es: "Entrada a la sala de un amigo mediante un código desde el móvil" },
      },
      {
        src: "/projects/minigame-hub/21-mobile-treasure.png",
        label: { en: "Pirate Loot on mobile", es: "Botín pirata en móvil" },
        caption: { en: "The Pirate Loot treasure draft arranged for a phone screen", es: "El reparto de tesoros de Botín pirata en una pantalla de móvil" },
      },
      {
        src: "/projects/minigame-hub/08-scoreboard.png",
        label: { en: "My scoreboard", es: "Mi marcador" },
        caption: { en: "A win and a draw from two completed games on the personal scoreboard", es: "Una victoria y un empate de dos partidas en el marcador personal" },
      },
    ],
    tagline: {
      en: "Play 37 browser games, from a curling duel to a daily sliding puzzle. Invite a friend to a private room in 36 of them.",
      es: "37 juegos de navegador, desde un duelo de curling hasta un puzle deslizante diario. En 36 puedes invitar a un amigo a una sala privada.",
    },
    problem: {
      en: "Each game gives its opponent different information and time to act. A board game can search ahead, a card game can reason from public draws, and a racing opponent needs to react during each lap.",
      es: "Cada juego da a su rival información y tiempo distintos para decidir. Un juego de tablero permite anticipar jugadas, uno de cartas puede usar las cartas vistas y un rival de carreras debe reaccionar durante cada vuelta.",
    },
    product: {
      en: "Install the hub on a phone or computer. Once the library has downloaded, all 37 solo games work offline. Pick from favorites, resume a saved duel or review a finished match move by move.",
      es: "Puedes instalar la app en el móvil o el ordenador. Una vez descargada la biblioteca, los 37 juegos en solitario funcionan sin conexión. Elige entre tus favoritos, retoma un duelo guardado o repasa una partida jugada a jugada.",
    },
    highlights: {
      en: [
        "Connect Four uses a faster six-ply search, and Hex Dominion values paths connecting both edges of the board.",
        "Word Guess evaluates the positions a letter reveals. Diceforge Arena evaluates rerolls and upgrades against the match state.",
        "Blackjack recommends an action from visible cards. Sliding Puzzle suggests a legal move and lets the player make it.",
        "Eight turn-based games replay the original moves and dice rolls from a locally saved match.",
        "One room code works across 36 games. Friends can switch games or request a rematch in the same Firestore room.",
        "Search, help, controls and move histories are available in English and Spanish.",
      ],
      es: [
        "Cuatro en raya usa una búsqueda de seis medias jugadas más rápida y Hex Dominion valora las rutas que conectan ambos bordes del tablero.",
        "Adivina la palabra evalúa las posiciones que revela cada letra. Diceforge Arena valora las tiradas y las mejoras según el estado de la partida.",
        "Blackjack recomienda una acción con las cartas visibles. El rompecabezas sugiere un movimiento legal que el jugador puede ejecutar.",
        "Ocho duelos por turnos reconstruyen las jugadas y tiradas originales a partir de la partida guardada en el dispositivo.",
        "Las salas de Firestore admiten 36 juegos. Los dos jugadores pueden cambiar de juego o pedir la revancha sin salir de la sala.",
        "La búsqueda, la ayuda, los controles y el historial de jugadas están disponibles en inglés y español.",
      ],
    },
    metrics: [
      { en: "37 mini-games", es: "37 minijuegos" },
      { en: "36 with friend rooms", es: "36 con salas privadas" },
      { en: "8 replayable solo duels", es: "8 duelos con repetición" },
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
