// Types pour les projets
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
  description: string;
  longDescription: string;
  context: string;
  challenge: string;
  solution: string;
  features: ProjectFeature[];
  technologies: string[];
  architecture: string[];
  challenges: ProjectChallenge[];
  results: ProjectResult[];
  role: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  color: string;
  gradientFrom: string;
  gradientTo: string;
  iconName: string;
  duration: string;
  year: string;
}

// Donnees des projets reels (anonymisees)
export const projects: Project[] = [
  {
    id: "tracking-logistique",
    slug: "tracking-logistique",
    title: "Solution de Tracking Logistique",
    subtitle: "Suivi de tournees et livraisons en temps reel",
    category: "Application metier",
    sector: "Transport & Logistique",
    description:
      "Systeme complet de gestion des tournees de livraison avec application mobile pour les chauffeurs, suivi temps reel des colis et tableau de bord administratif.",
    longDescription:
      "Face aux defis croissants de la logistique du dernier kilometre, notre client avait besoin d'une solution complete pour digitaliser et optimiser ses operations de livraison. Nous avons concu et developpe un ecosysteme complet comprenant une application mobile pour les chauffeurs, un backend robuste et un tableau de bord web pour les gestionnaires.",
    context:
      "Une entreprise de transport regionale gerant plusieurs centaines de livraisons quotidiennes rencontrait des difficultes a suivre l'etat des tournees en temps reel. Les processus papier generaient des erreurs, des retards dans la facturation et un manque de visibilite pour les clients finaux.",
    challenge:
      "Le principal defi etait de creer une solution capable de fonctionner dans des conditions reseau instables (zones rurales, parkings souterrains) tout en garantissant la tracabilite complete de chaque colis. L'application devait etre intuitive pour des chauffeurs peu familiers avec les outils numeriques.",
    solution:
      "Nous avons developpe une architecture resiliente avec synchronisation offline-first, permettant aux chauffeurs de travailler sans connexion et de synchroniser leurs donnees des le retour du reseau. Le scan par code-barres et la capture photo automatisee ont simplifie les processus de preuve de livraison.",
    features: [
      {
        iconName: "ScanBarcode",
        title: "Scan intelligent",
        description:
          "Scan des colis par code-barres avec validation instantanee et gestion des anomalies.",
      },
      {
        iconName: "WifiOff",
        title: "Mode hors-ligne",
        description:
          "Fonctionnement complet sans connexion avec synchronisation automatique.",
      },
      {
        iconName: "BarChart3",
        title: "Tableau de bord temps reel",
        description:
          "Suivi en direct des tournees, alertes et indicateurs de performance.",
      },
      {
        iconName: "FileText",
        title: "Preuve de livraison",
        description:
          "Capture photo, signature electronique et generation automatique des documents.",
      },
      {
        iconName: "Users",
        title: "Gestion des litiges",
        description:
          "Signalement et suivi des incidents avec photos et commentaires.",
      },
      {
        iconName: "Clock",
        title: "Historique complet",
        description:
          "Tracabilite complete de chaque colis avec horodatage precis.",
      },
    ],
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "AsyncStorage",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    architecture: [
      "Application mobile cross-platform (iOS/Android)",
      "API REST securisee avec authentification JWT",
      "Base de donnees relationnelle PostgreSQL",
      "Dashboard web responsive pour l'administration",
      "Systeme de synchronisation offline/online",
    ],
    challenges: [
      {
        title: "Fiabilite reseau",
        description:
          "Implementation d'un systeme de file d'attente pour les requetes en mode degrade avec reprise automatique.",
      },
      {
        title: "Performance mobile",
        description:
          "Optimisation de la gestion memoire et du stockage local pour des milliers d'elements.",
      },
      {
        title: "Experience utilisateur",
        description:
          "Interface simplifiee avec retours haptiques et visuels pour une utilisation terrain efficace.",
      },
      {
        title: "Securite des donnees",
        description:
          "Chiffrement des donnees sensibles et gestion fine des permissions par role.",
      },
    ],
    results: [
      {
        metric: "-60%",
        description: "de temps de traitement administratif",
      },
      {
        metric: "99.5%",
        description: "de colis traces en temps reel",
      },
      {
        metric: "-40%",
        description: "de litiges non resolus",
      },
      {
        metric: "+25%",
        description: "de satisfaction client",
      },
    ],
    role: [
      "Analyse des besoins et conception fonctionnelle",
      "Architecture technique et choix technologiques",
      "Developpement full-stack (mobile, backend, frontend)",
      "Tests et deploiement",
      "Formation des equipes et documentation",
      "Maintenance evolutive",
    ],
    testimonial: {
      quote:
        "L'application a transforme notre quotidien. Nos chauffeurs sont autonomes et nos clients informes en temps reel. Le retour sur investissement a ete visible des les premiers mois.",
      author: "Directeur des Operations",
      position: "Entreprise de transport regionale",
    },
    color: "from-blue-500/20 to-cyan-500/20",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
    iconName: "Truck",
    duration: "6 mois",
    year: "2024",
  },
  {
    id: "medisync-sante",
    slug: "medisync-sante",
    title: "Application de Suivi Medical",
    subtitle: "Gestion de patientele et coordination des soins",
    category: "Application mobile",
    sector: "Sante & Medical",
    description:
      "Application mobile complete pour professionnels de sante : gestion des patients, planning des rendez-vous, messagerie securisee et gestion documentaire.",
    longDescription:
      "Les professionnels de sante en exercice liberal jonglent quotidiennement entre la prise en charge des patients et les taches administratives. Cette application leur offre un outil centralise pour gerer leur activite de maniere efficace et securisee, tout en respectant les contraintes reglementaires du secteur medical.",
    context:
      "Un reseau de professionnels de sante liberaux avait besoin d'un outil mobile pour centraliser la gestion de leur patientele, coordonner les rendez-vous et communiquer de maniere securisee. Les solutions existantes etaient soit trop complexes, soit non conformes aux exigences de confidentialite medicale.",
    challenge:
      "Le secteur medical impose des contraintes strictes en matiere de protection des donnees personnelles et de sante. L'application devait etre a la fois simple d'utilisation pour des praticiens peu technophiles et suffisamment securisee pour manipuler des donnees sensibles.",
    solution:
      "Nous avons developpe une application native avec une architecture securisee by design : authentification biometrique, chiffrement des donnees, stockage securise et communication chiffree. L'interface epuree permet une prise en main immediate.",
    features: [
      {
        iconName: "Users",
        title: "Dossiers patients",
        description:
          "Fiches patients completes avec historique, pathologies et documents associes.",
      },
      {
        iconName: "Calendar",
        title: "Planning intelligent",
        description:
          "Gestion des rendez-vous avec vue calendrier, rappels et gestion des tournees.",
      },
      {
        iconName: "MessageSquare",
        title: "Messagerie securisee",
        description:
          "Communication chiffree entre professionnels avec indicateurs de lecture.",
      },
      {
        iconName: "FileText",
        title: "Gestion documentaire",
        description:
          "Stockage et organisation des documents avec dossiers et recherche.",
      },
      {
        iconName: "Shield",
        title: "Authentification renforcee",
        description:
          "Biometrie (Face ID / Touch ID) et code PIN pour securiser l'acces.",
      },
      {
        iconName: "Wifi",
        title: "Synchronisation cloud",
        description:
          "Donnees synchronisees en temps reel avec sauvegarde securisee.",
      },
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "React Navigation",
      "Zustand",
      "React Query",
      "Socket.io",
      "Expo Secure Store",
      "Expo Local Authentication",
    ],
    architecture: [
      "Application mobile native iOS et Android",
      "State management avec Zustand",
      "Cache et synchronisation avec React Query",
      "Communication temps reel via WebSockets",
      "Stockage securise des donnees sensibles",
    ],
    challenges: [
      {
        title: "Conformite RGPD et HDS",
        description:
          "Architecture respectant les normes de protection des donnees de sante avec hebergement certifie.",
      },
      {
        title: "Securite applicative",
        description:
          "Authentification multi-facteurs, chiffrement E2E et detection des dispositifs compromis.",
      },
      {
        title: "Experience utilisateur medicale",
        description:
          "Interface adaptee aux contraintes terrain : consultation rapide, saisie minimale, mode une main.",
      },
      {
        title: "Performance et fiabilite",
        description:
          "Application fluide meme avec des milliers de patients et connexion intermittente.",
      },
    ],
    results: [
      {
        metric: "-45%",
        description: "de temps administratif quotidien",
      },
      {
        metric: "100%",
        description: "de conformite reglementaire",
      },
      {
        metric: "+30%",
        description: "de patients suivis par praticien",
      },
      {
        metric: "4.8/5",
        description: "de satisfaction utilisateurs",
      },
    ],
    role: [
      "Audit des besoins et contraintes reglementaires",
      "Conception UX orientee praticiens",
      "Developpement mobile React Native",
      "Integration des services de securite",
      "Tests de penetration et audit securite",
      "Deploiement et accompagnement",
    ],
    testimonial: {
      quote:
        "Enfin une application pensee pour notre metier. Simple, securisee et efficace. Je gagne un temps precieux chaque jour et mes donnees sont protegees.",
      author: "Praticien liberal",
      position: "Utilisateur de l'application",
    },
    color: "from-emerald-500/20 to-teal-500/20",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-500",
    iconName: "Stethoscope",
    duration: "4 mois",
    year: "2024",
  },
];

// Helper pour recuperer un projet par son slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Helper pour recuperer tous les slugs (pour generateStaticParams)
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
