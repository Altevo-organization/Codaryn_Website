import {
  Code2,
  Globe,
  Smartphone,
  GitMerge,
  Server,
  Wrench,
} from "lucide-react";

// Services data
export const services = [
  {
    id: "logiciel",
    icon: Code2,
    title: "Logiciel sur mesure",
    description:
      "Développement de solutions métier adaptées à vos processus : PGI, ERP, CRM, outils de gestion internes. Nous analysons vos besoins et créons un logiciel qui vous ressemble.",
    features: ["Analyse fonctionnelle", "Architecture évolutive", "Formation utilisateurs"],
  },
  {
    id: "web",
    icon: Globe,
    title: "Applications web",
    description:
      "Applications web modernes et performantes : plateformes SaaS, intranets, extranets, portails clients. Technologies de pointe pour une expérience utilisateur optimale.",
    features: ["Progressive Web Apps", "Responsive design", "Performance optimisée"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Applications mobiles",
    description:
      "Applications iOS et Android natives ou cross-platform. De la conception UX à la publication sur les stores, nous vous accompagnons à chaque étape.",
    features: ["iOS & Android", "Cross-platform", "Publication stores"],
  },
  {
    id: "integration",
    icon: GitMerge,
    title: "Intégrations & API",
    description:
      "Connectez vos outils et automatisez vos flux de données. Nous développons des API robustes et intégrons vos logiciels existants pour une meilleure productivité.",
    features: ["API REST / GraphQL", "Webhooks", "ETL & automatisation"],
  },
  {
    id: "hebergement",
    icon: Server,
    title: "Hébergement & Déploiement",
    description:
      "Infrastructure cloud sécurisée et scalable. Nous déployons et hébergeons vos applications avec des garanties de disponibilité et de performance.",
    features: ["Cloud privé/public", "CI/CD", "Monitoring 24/7"],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Accompagnement continu pour garantir la pérennité de vos solutions. Mises à jour, évolutions fonctionnelles, support technique réactif.",
    features: ["Support prioritaire", "Mises à jour sécurité", "Évolutions continues"],
  },
];

// Testimonials data - Vrais témoignages clients
export const testimonials = [
  {
    quote:
      "L'application a transformé notre quotidien. Nos chauffeurs sont autonomes et nos clients informés en temps réel. Le retour sur investissement a été visible dès les premiers mois.",
    author: "Directeur des Opérations",
    role: "Client - Tracking Logistique",
    company: "Entreprise de transport régionale",
  },
  {
    quote:
      "Enfin une application pensée pour notre métier. Simple, sécurisée et efficace. Je gagne un temps précieux chaque jour et mes données sont protégées.",
    author: "Praticien libéral",
    role: "Client - Application Santé",
    company: "Professionnel de santé",
  },
];

// FAQ data
export const faqs = [
  {
    question: "Comment se déroule une demande de devis ?",
    answer:
      "Tout commence par un échange (téléphone, visio ou en personne) pour comprendre vos besoins. Nous analysons ensuite votre projet et vous remettons un devis détaillé sous quelques jours, incluant le périmètre fonctionnel, l'architecture technique, le planning prévisionnel et le budget. Ce devis est gratuit et sans engagement.",
  },
  {
    question: "Quels sont vos délais de réalisation ?",
    answer:
      "Les délais varient selon la complexité du projet. Un site vitrine peut être livré en 2-4 semaines, une application métier simple en 2-3 mois, et un ERP complet en 6-12 mois. Nous définissons ensemble un planning réaliste lors de la phase de cadrage, avec des jalons intermédiaires pour suivre l'avancement.",
  },
  {
    question: "Proposez-vous des contrats de maintenance ?",
    answer:
      "Oui, nous proposons plusieurs formules de maintenance adaptées à vos besoins : maintenance corrective (correction de bugs), maintenance évolutive (nouvelles fonctionnalités), et support technique avec différents niveaux de SLA. Ces contrats garantissent la pérennité et l'évolution de votre solution.",
  },
  {
    question: "Où sont hébergées les applications ?",
    answer:
      "Nous travaillons avec des hébergeurs cloud français et européens (OVH, Scaleway, AWS région Paris) pour garantir la conformité RGPD et la souveraineté de vos données. Selon vos contraintes, nous pouvons aussi déployer sur votre infrastructure on-premise ou sur un cloud privé.",
  },
  {
    question: "Comment sont protégées mes données ?",
    answer:
      "La sécurité est au cœur de nos développements : chiffrement des données, authentification forte, audits de sécurité réguliers, sauvegardes automatiques. Nous respectons les bonnes pratiques OWASP et sommes conformes au RGPD. Vos données vous appartiennent et restent sous votre contrôle.",
  },
  {
    question: "Puis-je modifier le logiciel après sa livraison ?",
    answer:
      "Absolument. Nos développements sont documentés et suivent les standards de l'industrie. Vous êtes propriétaire du code source et pouvez le faire évoluer librement, que ce soit par nos soins ou par une autre équipe. Nous privilégions les technologies open source pour éviter tout enfermement propriétaire.",
  },
  {
    question: "Travaillez-vous avec des clients hors de France ?",
    answer:
      "Oui, nous accompagnons des clients dans toute l'Europe francophone et au-delà. Nous travaillons régulièrement en visioconférence et nos outils de gestion de projet permettent une collaboration efficace à distance. Les réunions de cadrage importantes peuvent être organisées en présentiel si nécessaire.",
  },
];
