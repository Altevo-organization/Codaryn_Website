export interface ProjectFeature {
  iconName: string;
  title: string;
  description: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectResult {
  metric: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  sector: string;
  tags: string[];
  description: string;
  longDescription: string;
  context: string;
  challenge: string;
  solution: string;
  features: ProjectFeature[];
  technologies: string[];
  techLogos: string[];
  architecture: string[];
  challenges: ProjectChallenge[];
  results: ProjectResult[];
  role: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  gradientFrom: string;
  gradientTo: string;
  iconName: string;
  duration: string;
  year: string;
  demoType: "live" | "interactive" | "screens";
  demoUrl?: string;
  confidentialityLevel: "public" | "anonymized";
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "tracking-logistique",
    slug: "tracking-logistique",
    title: "Solution de Tracking Logistique",
    subtitle: "Suivi de tournées et livraisons en temps réel",
    category: "Application métier",
    sector: "Transport & Logistique",
    tags: ["Mobile", "Web", "API", "Temps réel"],
    description:
      "Système complet de gestion des tournées de livraison avec application mobile pour les chauffeurs, suivi temps réel des colis et tableau de bord administratif.",
    longDescription:
      "Face aux défis croissants de la logistique du dernier kilomètre, nous avons conçu et développé un écosystème complet comprenant une application mobile pour les chauffeurs, un backend robuste et un tableau de bord web pour les gestionnaires.",
    context:
      "Une entreprise de transport régionale gérant plusieurs centaines de livraisons quotidiennes rencontrait des difficultés à suivre l'état des tournées en temps réel. Les processus papier généraient des erreurs, des retards dans la facturation et un manque de visibilité pour les clients finaux.",
    challenge:
      "Créer une solution capable de fonctionner dans des conditions réseau instables tout en garantissant la traçabilité complète de chaque colis. L'application devait être intuitive pour des chauffeurs peu familiers avec les outils numériques.",
    solution:
      "Architecture résiliente avec synchronisation offline-first, permettant aux chauffeurs de travailler sans connexion. Le scan par code-barres et la capture photo automatisée simplifient les preuves de livraison.",
    features: [
      { iconName: "ScanBarcode", title: "Scan intelligent", description: "Scan des colis par code-barres avec validation instantanée et gestion des anomalies." },
      { iconName: "WifiOff", title: "Mode hors-ligne", description: "Fonctionnement complet sans connexion avec synchronisation automatique." },
      { iconName: "BarChart3", title: "Dashboard temps réel", description: "Suivi en direct des tournées, alertes et indicateurs de performance." },
      { iconName: "FileText", title: "Preuve de livraison", description: "Capture photo, signature électronique et génération automatique des documents." },
      { iconName: "Users", title: "Gestion des litiges", description: "Signalement et suivi des incidents avec photos et commentaires." },
      { iconName: "Clock", title: "Historique complet", description: "Traçabilité complète de chaque colis avec horodatage précis." },
    ],
    technologies: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "Sequelize", "JWT", "React", "TypeScript", "Tailwind CSS"],
    techLogos: ["react", "expo", "nodejs", "postgresql", "typescript", "tailwindcss"],
    architecture: [
      "Application mobile cross-platform (iOS/Android)",
      "API REST sécurisée avec authentification JWT",
      "Base de données relationnelle PostgreSQL",
      "Dashboard web responsive pour l'administration",
      "Système de synchronisation offline/online",
    ],
    challenges: [
      { title: "Fiabilité réseau", description: "Système de file d'attente pour les requêtes en mode dégradé avec reprise automatique." },
      { title: "Performance mobile", description: "Optimisation de la gestion mémoire et du stockage local pour des milliers d'éléments." },
      { title: "Expérience utilisateur", description: "Interface simplifiée avec retours haptiques et visuels pour une utilisation terrain efficace." },
      { title: "Sécurité des données", description: "Chiffrement des données sensibles et gestion fine des permissions par rôle." },
    ],
    results: [
      { metric: "-60%", description: "de temps de traitement administratif" },
      { metric: "99.5%", description: "de colis tracés en temps réel" },
      { metric: "-40%", description: "de litiges non résolus" },
      { metric: "+25%", description: "de satisfaction client" },
    ],
    role: [
      "Analyse des besoins et conception fonctionnelle",
      "Architecture technique et choix technologiques",
      "Développement full-stack (mobile, backend, frontend)",
      "Tests et déploiement",
      "Formation des équipes et documentation",
      "Maintenance évolutive",
    ],
    testimonial: {
      quote: "L'application a transformé notre quotidien. Nos chauffeurs sont autonomes et nos clients informés en temps réel.",
      author: "Directeur des Opérations",
      position: "Entreprise de transport régionale",
    },
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
    iconName: "Truck",
    duration: "6 mois",
    year: "2024",
    demoType: "screens",
    confidentialityLevel: "anonymized",
    screenshots: [],
  },
  {
    id: "medisync-sante",
    slug: "medisync-sante",
    title: "Application de Suivi Médical",
    subtitle: "Gestion de patientèle et coordination des soins",
    category: "Application mobile",
    sector: "Santé & Médical",
    tags: ["Mobile", "Sécurité", "Santé", "RGPD"],
    description:
      "Application mobile complète pour professionnels de santé : gestion des patients, planning des rendez-vous, messagerie sécurisée et gestion documentaire.",
    longDescription:
      "Les professionnels de santé en exercice libéral jonglent quotidiennement entre la prise en charge des patients et les tâches administratives. Cette application leur offre un outil centralisé pour gérer leur activité de manière efficace et sécurisée.",
    context:
      "Un réseau de professionnels de santé libéraux avait besoin d'un outil mobile pour centraliser la gestion de leur patientèle, coordonner les rendez-vous et communiquer de manière sécurisée.",
    challenge:
      "Le secteur médical impose des contraintes strictes en matière de protection des données. L'application devait être simple d'utilisation et suffisamment sécurisée pour manipuler des données sensibles.",
    solution:
      "Application native avec architecture sécurisée by design : authentification biométrique, chiffrement des données, stockage sécurisé et communication chiffrée. Interface épurée pour une prise en main immédiate.",
    features: [
      { iconName: "Users", title: "Dossiers patients", description: "Fiches patients complètes avec historique, pathologies et documents associés." },
      { iconName: "Calendar", title: "Planning intelligent", description: "Gestion des rendez-vous avec vue calendrier, rappels et gestion des tournées." },
      { iconName: "MessageSquare", title: "Messagerie sécurisée", description: "Communication chiffrée entre professionnels avec indicateurs de lecture." },
      { iconName: "FileText", title: "Gestion documentaire", description: "Stockage et organisation des documents avec dossiers et recherche." },
      { iconName: "Shield", title: "Authentification renforcée", description: "Biométrie (Face ID / Touch ID) et code PIN pour sécuriser l'accès." },
      { iconName: "Wifi", title: "Synchronisation cloud", description: "Données synchronisées en temps réel avec sauvegarde sécurisée." },
    ],
    technologies: ["React Native", "Expo", "TypeScript", "React Navigation", "Zustand", "React Query", "Socket.io", "Expo Secure Store"],
    techLogos: ["react", "expo", "typescript", "socketio"],
    architecture: [
      "Application mobile native iOS et Android",
      "State management avec Zustand",
      "Cache et synchronisation avec React Query",
      "Communication temps réel via WebSockets",
      "Stockage sécurisé des données sensibles",
    ],
    challenges: [
      { title: "Conformité RGPD et HDS", description: "Architecture respectant les normes de protection des données de santé." },
      { title: "Sécurité applicative", description: "Authentification multi-facteurs, chiffrement E2E et détection des dispositifs compromis." },
      { title: "UX médicale", description: "Interface adaptée aux contraintes terrain : consultation rapide, saisie minimale." },
      { title: "Performance", description: "Application fluide même avec des milliers de patients et connexion intermittente." },
    ],
    results: [
      { metric: "-45%", description: "de temps administratif quotidien" },
      { metric: "100%", description: "de conformité réglementaire" },
      { metric: "+30%", description: "de patients suivis par praticien" },
      { metric: "4.8/5", description: "de satisfaction utilisateurs" },
    ],
    role: [
      "Audit des besoins et contraintes réglementaires",
      "Conception UX orientée praticiens",
      "Développement mobile React Native",
      "Intégration des services de sécurité",
      "Tests de pénétration et audit sécurité",
      "Déploiement et accompagnement",
    ],
    testimonial: {
      quote: "Enfin une application pensée pour notre métier. Simple, sécurisée et efficace.",
      author: "Praticien libéral",
      position: "Utilisateur de l'application",
    },
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-500",
    iconName: "Stethoscope",
    duration: "4 mois",
    year: "2024",
    demoType: "screens",
    confidentialityLevel: "anonymized",
    screenshots: [],
  },
  {
    id: "codaryn-manager",
    slug: "codaryn-manager",
    title: "ERP / PGI de Gestion",
    subtitle: "Plateforme de gestion d'entreprise complète",
    category: "Application métier",
    sector: "Gestion d'entreprise",
    tags: ["Web", "ERP", "API", "Docker"],
    description:
      "Progiciel de gestion intégré (PGI) modulaire et évolutif : gestion des projets, des clients, facturation, suivi des opérations et tableau de bord décisionnel.",
    longDescription:
      "Un outil de gestion interne conçu pour centraliser l'ensemble des opérations métier. Architecture monorepo moderne avec API performante et interface web réactive, déployable via Docker.",
    context:
      "Besoin d'un outil centralisé pour piloter les activités quotidiennes : projets, contacts, facturation, métriques. Les solutions généralistes ne correspondaient pas aux workflows spécifiques.",
    challenge:
      "Concevoir un PGI modulaire capable d'évoluer avec l'entreprise, tout en restant léger et rapide. L'architecture devait permettre d'ajouter de nouveaux modules sans refonte.",
    solution:
      "Architecture monorepo avec packages partagés, API Fastify ultra-performante et frontend React avec Zustand. Base de données gérée par Prisma ORM pour une évolutivité maximale.",
    features: [
      { iconName: "LayoutDashboard", title: "Dashboard décisionnel", description: "Vue d'ensemble avec KPIs, graphiques et alertes personnalisables." },
      { iconName: "Users", title: "Gestion des contacts", description: "CRM intégré avec fiches clients, historique et suivi des interactions." },
      { iconName: "FileText", title: "Facturation", description: "Création de devis et factures, suivi des paiements et relances automatiques." },
      { iconName: "FolderKanban", title: "Gestion de projets", description: "Suivi des projets avec tâches, jalons et allocation des ressources." },
      { iconName: "BarChart3", title: "Reporting avancé", description: "Rapports personnalisables et exports pour la prise de décision." },
      { iconName: "Settings", title: "Modulaire", description: "Architecture extensible permettant d'ajouter de nouveaux modules métier." },
    ],
    technologies: ["React", "Vite", "Fastify", "Prisma", "PostgreSQL", "TypeScript", "Tailwind CSS", "Zustand", "Docker"],
    techLogos: ["react", "vite", "nodejs", "postgresql", "typescript", "tailwindcss", "docker"],
    architecture: [
      "Monorepo (apps/api + apps/web + packages/shared)",
      "API REST Fastify avec validation de schéma",
      "ORM Prisma avec migrations versionnées",
      "Frontend SPA React avec routing avancé",
      "Déploiement containerisé via Docker Compose",
    ],
    challenges: [
      { title: "Modularité", description: "Architecture plugin permettant d'activer/désactiver des modules sans impacter le reste." },
      { title: "Performance API", description: "Fastify pour des temps de réponse inférieurs à 50ms sur les endpoints critiques." },
      { title: "Type-safety", description: "Partage de types entre frontend et backend via le monorepo." },
      { title: "Migration données", description: "Système de migrations Prisma robuste pour les évolutions de schéma." },
    ],
    results: [
      { metric: "-50%", description: "de temps de gestion administrative" },
      { metric: "< 50ms", description: "de temps de réponse API" },
      { metric: "100%", description: "de couverture type-safety" },
      { metric: "1 clic", description: "pour déployer via Docker" },
    ],
    role: [
      "Analyse des processus métier",
      "Architecture monorepo et choix techniques",
      "Développement full-stack",
      "Containerisation Docker",
      "Documentation technique complète",
      "Formation utilisateurs",
    ],
    gradientFrom: "from-yellow-500",
    gradientTo: "to-amber-500",
    iconName: "Building2",
    duration: "En continu",
    year: "2024-2025",
    demoType: "live",
    demoUrl: "https://manager-demo.codaryn.com",
    confidentialityLevel: "public",
    screenshots: [],
  },
  {
    id: "codaryn-booking",
    slug: "codaryn-booking",
    title: "Plateforme de Réservation en Ligne",
    subtitle: "Solution de booking personnalisée pour professionnels",
    category: "Application web",
    sector: "Services & Commerce",
    tags: ["Web", "SaaS", "Multi-tenant", "Réservation"],
    description:
      "Solution de réservation en ligne multi-tenant permettant aux professionnels (artisans, cabinets, studios) de proposer un système de prise de rendez-vous personnalisé.",
    longDescription:
      "Plateforme SaaS de réservation conçue pour être déployée rapidement par tout professionnel. Chaque utilisateur dispose de sa propre page de réservation avec gestion des services, des disponibilités et des clients.",
    context:
      "Les petits professionnels (artisans, coiffeurs, consultants) avaient besoin d'une solution de réservation simple, sans abonnement excessif ni complexité. Les outils existants étaient trop génériques ou trop coûteux.",
    challenge:
      "Créer une plateforme multi-tenant où chaque professionnel a son propre espace avec URL personnalisée, tout en partageant la même infrastructure pour minimiser les coûts.",
    solution:
      "Architecture Next.js avec routing dynamique par slug, base de données Prisma multi-tenant, et dashboard professionnel complet avec gestion des créneaux, services et historique client.",
    features: [
      { iconName: "Calendar", title: "Réservation en ligne", description: "Interface de réservation intuitive avec sélection de service, date et créneau." },
      { iconName: "LayoutDashboard", title: "Dashboard pro", description: "Tableau de bord professionnel avec vue planning, statistiques et gestion." },
      { iconName: "Users", title: "Gestion clients", description: "Base clients avec historique des rendez-vous et préférences." },
      { iconName: "Clock", title: "Disponibilités flexibles", description: "Règles de disponibilité personnalisables par jour, service et exception." },
      { iconName: "Download", title: "Export ICS", description: "Synchronisation calendrier via export ICS pour Google Calendar, Outlook, etc." },
      { iconName: "Palette", title: "Page personnalisée", description: "Chaque professionnel a sa page de réservation avec son branding." },
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Zod", "date-fns"],
    techLogos: ["nextjs", "typescript", "postgresql", "tailwindcss", "prisma"],
    architecture: [
      "Next.js App Router avec routing dynamique",
      "API Routes pour le backend intégré",
      "Prisma ORM avec multi-tenancy par slug",
      "Système de seed pour données de démonstration",
      "Déploiement optimisé via Vercel ou serveur Node",
    ],
    challenges: [
      { title: "Multi-tenancy", description: "Isolation des données par professionnel avec URL personnalisée." },
      { title: "Gestion des créneaux", description: "Algorithme de disponibilité tenant compte des durées, pauses et exceptions." },
      { title: "UX simplifiée", description: "Parcours de réservation en 3 étapes pour maximiser la conversion." },
      { title: "Données de démo", description: "Système de seed complet pour tester avec des entreprises fictives réalistes." },
    ],
    results: [
      { metric: "3 étapes", description: "pour réserver un créneau" },
      { metric: "< 2s", description: "de temps de chargement" },
      { metric: "100%", description: "responsive mobile" },
      { metric: "Multi-pro", description: "architecture multi-tenant" },
    ],
    role: [
      "Conception UX du parcours de réservation",
      "Architecture multi-tenant Next.js",
      "Développement full-stack",
      "Système de gestion des disponibilités",
      "Dashboard professionnel",
      "Déploiement et documentation",
    ],
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
    iconName: "CalendarCheck",
    duration: "3 mois",
    year: "2025",
    demoType: "live",
    demoUrl: "https://booking-demo.codaryn.com",
    confidentialityLevel: "public",
    screenshots: [],
  },
  {
    id: "codaryn-client-portal",
    slug: "portail-client",
    title: "Portail Client Sécurisé",
    subtitle: "Espace client B2B avec suivi de projets",
    category: "Application web",
    sector: "B2B / Services",
    tags: ["Web", "B2B", "Portail", "Sécurité"],
    description:
      "Portail client sécurisé permettant le suivi des projets en cours, la communication avec l'équipe, la gestion documentaire et le suivi de facturation.",
    longDescription:
      "Espace client B2B développé pour offrir une transparence totale sur l'avancement des projets. Les clients accèdent à un tableau de bord personnalisé avec suivi en temps réel, documents partagés et historique des échanges.",
    context:
      "Besoin d'un espace centralisé pour que les clients puissent suivre leurs projets sans multiplier les échanges d'emails. Objectif : professionnaliser la relation client et gagner en efficacité.",
    challenge:
      "Sécuriser l'accès aux données projet par client tout en offrant une expérience fluide. Chaque client ne doit voir que ses propres projets et documents.",
    solution:
      "Portail Next.js avec authentification JWT, gestion des rôles et permissions fines. Interface soignée avec notifications et historique complet des interactions.",
    features: [
      { iconName: "LayoutDashboard", title: "Dashboard projet", description: "Vue d'ensemble de l'avancement avec jalons, tâches et statuts." },
      { iconName: "FileText", title: "Documents partagés", description: "Espace documentaire sécurisé pour partager livrables et spécifications." },
      { iconName: "MessageSquare", title: "Messagerie intégrée", description: "Fil de discussion par projet pour centraliser les échanges." },
      { iconName: "Receipt", title: "Suivi facturation", description: "Visualisation des devis, factures et historique des paiements." },
      { iconName: "Shield", title: "Authentification sécurisée", description: "JWT + bcrypt avec gestion des sessions et expiration." },
      { iconName: "Bell", title: "Notifications", description: "Alertes en temps réel sur les mises à jour de projets." },
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Framer Motion", "JWT", "bcrypt"],
    techLogos: ["nextjs", "typescript", "postgresql", "tailwindcss", "prisma"],
    architecture: [
      "Next.js App Router avec middleware d'authentification",
      "API Routes sécurisées avec JWT",
      "Prisma ORM avec relations complexes",
      "Système de permissions par rôle (admin, client, viewer)",
      "Stockage sécurisé des documents",
    ],
    challenges: [
      { title: "Isolation des données", description: "Chaque client accède uniquement à ses propres projets et documents." },
      { title: "Authentification robuste", description: "JWT avec refresh tokens, bcrypt et protection contre les attaques courantes." },
      { title: "UX professionnelle", description: "Interface B2B épurée inspirée des meilleurs outils de gestion de projet." },
      { title: "Performance", description: "Chargement optimisé des données avec pagination et cache intelligent." },
    ],
    results: [
      { metric: "-70%", description: "d'emails échangés" },
      { metric: "100%", description: "de traçabilité projet" },
      { metric: "24/7", description: "d'accès client autonome" },
      { metric: "+40%", description: "de satisfaction client" },
    ],
    role: [
      "Conception de l'architecture sécurisée",
      "Développement du système d'authentification",
      "Interface utilisateur B2B",
      "Système de permissions et rôles",
      "Tests de sécurité",
      "Déploiement et maintenance",
    ],
    gradientFrom: "from-red-500",
    gradientTo: "to-rose-500",
    iconName: "Lock",
    duration: "2 mois",
    year: "2025",
    demoType: "live",
    demoUrl: "https://codaryn-demo-clientportal.vercel.app/login",
    confidentialityLevel: "public",
    screenshots: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((p) => p.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
