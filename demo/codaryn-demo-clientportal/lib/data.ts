export type ProjectStatus = 'En cours' | 'Terminé' | 'En pause'
export type DocumentType = 'Spécification' | 'Design' | 'Contrat' | 'Technique' | 'Livraison' | 'Commercial'
export type InvoiceStatus = 'Payée' | 'En attente' | 'En retard'

export interface Milestone {
  id: string
  label: string
  dueDate: string
  completed: boolean
}

export interface Activity {
  id: string
  date: string
  description: string
  author: string
  type: 'meeting' | 'delivery' | 'review' | 'update' | 'deploy'
}

export interface Message {
  id: string
  author: string
  isClient: boolean
  avatar: string
  content: string
  date: string
  time: string
}

export interface Notification {
  id: string
  title: string
  description: string
  date: string
  read: boolean
  type: 'delivery' | 'invoice' | 'meeting' | 'update'
}

export interface Project {
  id: string
  slug: string
  title: string
  status: ProjectStatus
  progress: number
  startDate: string
  endDate?: string
  description: string
  teamSize: number
  teamRoles: string[]
  tags: string[]
  milestones: Milestone[]
  activities: Activity[]
  messages: Message[]
  nextMilestone?: { label: string; dueDate: string }
  budget: number
  budgetConsumed: number
  manager: { name: string; role: string; avatar: string }
}

export interface Document {
  id: string
  filename: string
  type: DocumentType
  date: string
  size: string
  project?: string
}

export interface Invoice {
  id: string
  number: string
  date: string
  dueDate: string
  amount: number
  status: InvoiceStatus
  description: string
  lines: { label: string; qty: number; unit: number }[]
}

export const client = {
  name: 'Atelier Dubois',
  initials: 'AD',
  sector: 'Design mobilier',
  location: 'Paris, France',
  since: 'Janvier 2024',
  email: 'contact@atelierdubois.fr',
  phone: '+33 1 42 86 12 34',
}

export const notifications: Notification[] = [
  {
    id: 'n1',
    title: 'Livraison configurateur 3D',
    description: 'Le module configurateur 3D v1 a été livré sur staging.',
    date: 'Il y a 2h',
    read: false,
    type: 'delivery',
  },
  {
    id: 'n2',
    title: 'Facture FAC-2025-003 émise',
    description: '4 500 € — Mars 2025. Échéance au 31 mars.',
    date: 'Il y a 1j',
    read: false,
    type: 'invoice',
  },
  {
    id: 'n3',
    title: 'Réunion de sprint planifiée',
    description: 'Planification Q2 — jeudi 27 mars à 10h00.',
    date: 'Il y a 3j',
    read: true,
    type: 'meeting',
  },
  {
    id: 'n4',
    title: 'Maquettes app mobile disponibles',
    description: 'Sophie M. a partagé les maquettes UI v1 dans les documents.',
    date: 'Il y a 5j',
    read: true,
    type: 'update',
  },
]

export const projects: Project[] = [
  {
    id: 'proj-001',
    slug: 'plateforme-ecommerce',
    title: 'Plateforme e-commerce',
    status: 'En cours',
    progress: 68,
    startDate: 'Jan 2025',
    description: 'Boutique en ligne sur mesure avec configurateur de meubles 3D',
    teamSize: 3,
    teamRoles: ['2 développeurs', '1 designer'],
    tags: ['Web', 'E-commerce', 'API'],
    budget: 18000,
    budgetConsumed: 12240,
    manager: { name: 'Thomas D.', role: 'Chef de projet', avatar: 'TD' },
    nextMilestone: { label: 'Intégration paiement', dueDate: '28 mars 2025' },
    milestones: [
      { id: 'm1', label: 'Lancement du projet', dueDate: '10 jan 2025', completed: true },
      { id: 'm2', label: 'Maquettes UI validées', dueDate: '3 fév 2025', completed: true },
      { id: 'm3', label: 'Développement frontend', dueDate: '28 fév 2025', completed: true },
      { id: 'm4', label: 'Intégration paiement', dueDate: '28 mars 2025', completed: false },
      { id: 'm5', label: 'Mise en production', dueDate: '30 avr 2025', completed: false },
    ],
    activities: [
      { id: 'a1', date: '18 mars 2025', description: 'Revue de code — module panier', author: 'Thomas D.', type: 'review' },
      { id: 'a2', date: '12 mars 2025', description: 'Livraison du configurateur 3D v1', author: 'Sophie M.', type: 'delivery' },
      { id: 'a3', date: '5 mars 2025', description: 'Réunion de sprint — planification Q2', author: 'Thomas D.', type: 'meeting' },
      { id: 'a4', date: '26 fév 2025', description: 'Frontend catalogue validé par le client', author: 'Équipe Codaryn', type: 'update' },
      { id: 'a5', date: '18 fév 2025', description: 'Déploiement environnement de staging', author: 'Marc L.', type: 'deploy' },
    ],
    messages: [
      { id: 'msg1', author: 'Thomas D.', isClient: false, avatar: 'TD', content: 'Bonjour, le configurateur 3D est maintenant disponible sur staging. Vous pouvez le tester à l\'adresse que je vous ai transmise par email. Retours bienvenus avant vendredi !', date: '18 mars 2025', time: '09:42' },
      { id: 'msg2', author: 'Atelier Dubois', isClient: true, avatar: 'AD', content: 'Merci Thomas ! On a testé le configurateur, c\'est vraiment impressionnant. On a quelques retours mineurs sur les textures bois, je vous envoie un doc récap.', date: '18 mars 2025', time: '14:15' },
      { id: 'msg3', author: 'Thomas D.', isClient: false, avatar: 'TD', content: 'Parfait, on attend votre document. Pour l\'intégration paiement, on commence la semaine prochaine. Stripe est déjà configuré côté API.', date: '19 mars 2025', time: '10:03' },
      { id: 'msg4', author: 'Sophie M.', isClient: false, avatar: 'SM', content: 'J\'ai mis à jour les maquettes avec vos retours sur les textures. Le fichier est disponible dans les documents du projet.', date: '20 mars 2025', time: '16:30' },
      { id: 'msg5', author: 'Atelier Dubois', isClient: true, avatar: 'AD', content: 'Super Sophie, les nouvelles textures sont parfaites ! On valide. On peut prévoir un point la semaine prochaine pour le module paiement ?', date: '21 mars 2025', time: '11:20' },
    ],
  },
  {
    id: 'proj-002',
    slug: 'application-mobile',
    title: 'Application mobile',
    status: 'En cours',
    progress: 32,
    startDate: 'Fév 2025',
    description: 'App iOS/Android pour suivi des commandes clients',
    teamSize: 1,
    teamRoles: ['1 développeur mobile'],
    tags: ['Mobile', 'iOS', 'Android'],
    budget: 9500,
    budgetConsumed: 3040,
    manager: { name: 'Marc L.', role: 'Développeur mobile', avatar: 'ML' },
    nextMilestone: { label: 'Maquettes validées', dueDate: '5 avr 2025' },
    milestones: [
      { id: 'm1', label: 'Cadrage projet', dueDate: '5 fév 2025', completed: true },
      { id: 'm2', label: 'Architecture technique', dueDate: '20 fév 2025', completed: true },
      { id: 'm3', label: 'Maquettes validées', dueDate: '5 avr 2025', completed: false },
      { id: 'm4', label: 'Développement v1', dueDate: '30 mai 2025', completed: false },
      { id: 'm5', label: 'Beta test', dueDate: '30 juin 2025', completed: false },
    ],
    activities: [
      { id: 'a1', date: '20 mars 2025', description: 'Présentation des maquettes v1 en atelier', author: 'Sophie M.', type: 'meeting' },
      { id: 'a2', date: '10 mars 2025', description: 'Choix de la stack React Native validé', author: 'Marc L.', type: 'update' },
      { id: 'a3', date: '28 fév 2025', description: 'Setup environnement de développement', author: 'Marc L.', type: 'deploy' },
      { id: 'a4', date: '20 fév 2025', description: 'Architecture technique approuvée', author: 'Équipe Codaryn', type: 'delivery' },
      { id: 'a5', date: '5 fév 2025', description: 'Réunion de lancement du projet', author: 'Thomas D.', type: 'meeting' },
    ],
    messages: [
      { id: 'msg1', author: 'Marc L.', isClient: false, avatar: 'ML', content: 'Bonjour ! L\'architecture React Native est posée et l\'environnement de dev est prêt. Je commence les maquettes cette semaine avec Sophie.', date: '10 mars 2025', time: '08:55' },
      { id: 'msg2', author: 'Atelier Dubois', isClient: true, avatar: 'AD', content: 'Parfait Marc. Pour les maquettes, on souhaite que l\'app reprenne exactement les codes couleurs de notre site web. On vous envoie la charte graphique.', date: '10 mars 2025', time: '11:30' },
      { id: 'msg3', author: 'Marc L.', isClient: false, avatar: 'ML', content: 'Reçu ! On va reprendre votre identité visuelle pour assurer la cohérence. Les maquettes seront prêtes pour présentation le 20 mars.', date: '11 mars 2025', time: '09:15' },
    ],
  },
  {
    id: 'proj-003',
    slug: 'refonte-api-interne',
    title: 'Refonte API interne',
    status: 'Terminé',
    progress: 100,
    startDate: 'Oct 2024',
    endDate: 'Déc 2024',
    description: 'Migration et modernisation de l\'API REST vers GraphQL',
    teamSize: 2,
    teamRoles: ['2 développeurs backend'],
    tags: ['API', 'Backend'],
    budget: 6500,
    budgetConsumed: 6500,
    manager: { name: 'Thomas D.', role: 'Chef de projet', avatar: 'TD' },
    milestones: [
      { id: 'm1', label: 'Audit de l\'existant', dueDate: '15 oct 2024', completed: true },
      { id: 'm2', label: 'Conception du schéma GraphQL', dueDate: '1 nov 2024', completed: true },
      { id: 'm3', label: 'Migration des endpoints', dueDate: '30 nov 2024', completed: true },
      { id: 'm4', label: 'Tests & documentation', dueDate: '15 déc 2024', completed: true },
      { id: 'm5', label: 'Mise en production', dueDate: '20 déc 2024', completed: true },
    ],
    activities: [
      { id: 'a1', date: '20 déc 2024', description: 'Mise en production — API GraphQL v1.0', author: 'Marc L.', type: 'deploy' },
      { id: 'a2', date: '15 déc 2024', description: 'Rapport de livraison remis au client', author: 'Thomas D.', type: 'delivery' },
      { id: 'a3', date: '5 déc 2024', description: 'Tests de charge validés — 99.8% uptime', author: 'Marc L.', type: 'review' },
      { id: 'a4', date: '20 nov 2024', description: 'Migration des 42 endpoints terminée', author: 'Équipe Codaryn', type: 'update' },
      { id: 'a5', date: '1 nov 2024', description: 'Schéma GraphQL approuvé', author: 'Thomas D.', type: 'meeting' },
    ],
    messages: [
      { id: 'msg1', author: 'Thomas D.', isClient: false, avatar: 'TD', content: 'La migration est terminée et l\'API GraphQL est en production. Les 42 endpoints sont migrés, les performances sont excellentes. Rapport de livraison disponible dans vos documents.', date: '20 déc 2024', time: '14:00' },
      { id: 'msg2', author: 'Atelier Dubois', isClient: true, avatar: 'AD', content: 'Excellent travail à toute l\'équipe ! La nouvelle API est bien plus rapide. Merci pour la documentation très complète.', date: '20 déc 2024', time: '16:45' },
    ],
  },
]

export const documents: Document[] = [
  { id: 'doc-001', filename: 'Cahier des charges — E-commerce.pdf', type: 'Spécification', date: '3 fév 2025', size: '1.4 Mo', project: 'Plateforme e-commerce' },
  { id: 'doc-002', filename: 'Maquettes UI v2.figma', type: 'Design', date: '18 fév 2025', size: '8.2 Mo', project: 'Plateforme e-commerce' },
  { id: 'doc-003', filename: 'Contrat de prestation.pdf', type: 'Contrat', date: '10 jan 2025', size: '420 Ko', project: undefined },
  { id: 'doc-004', filename: 'Architecture technique.pdf', type: 'Technique', date: '20 jan 2025', size: '980 Ko', project: 'Application mobile' },
  { id: 'doc-005', filename: 'Rapport de livraison — API.pdf', type: 'Livraison', date: '15 déc 2024', size: '2.1 Mo', project: 'Refonte API interne' },
  { id: 'doc-006', filename: 'Devis App Mobile.pdf', type: 'Commercial', date: '28 jan 2025', size: '310 Ko', project: 'Application mobile' },
  { id: 'doc-007', filename: 'Charte graphique Atelier Dubois.pdf', type: 'Design', date: '8 mar 2025', size: '4.7 Mo', project: undefined },
  { id: 'doc-008', filename: 'Spécifications API GraphQL.pdf', type: 'Technique', date: '15 nov 2024', size: '1.1 Mo', project: 'Refonte API interne' },
]

export const invoices: Invoice[] = [
  {
    id: 'inv-001',
    number: 'FAC-2025-001',
    date: '31 jan 2025',
    dueDate: '28 fév 2025',
    amount: 4200,
    status: 'Payée',
    description: 'Développement e-commerce — Janvier 2025',
    lines: [
      { label: 'Développement frontend (catalogue + panier)', qty: 12, unit: 250 },
      { label: 'Intégration API produits', qty: 4, unit: 250 },
      { label: 'Frais de déploiement staging', qty: 1, unit: 200 },
    ],
  },
  {
    id: 'inv-002',
    number: 'FAC-2025-002',
    date: '28 fév 2025',
    dueDate: '28 mar 2025',
    amount: 3800,
    status: 'Payée',
    description: 'Développement e-commerce + App mobile — Février 2025',
    lines: [
      { label: 'Développement configurateur 3D', qty: 10, unit: 280 },
      { label: 'Cadrage & architecture App mobile', qty: 4, unit: 250 },
      { label: 'Maquettes UI mobile v1', qty: 2, unit: 300 },
    ],
  },
  {
    id: 'inv-003',
    number: 'FAC-2025-003',
    date: '31 mars 2025',
    dueDate: '30 avr 2025',
    amount: 4500,
    status: 'En attente',
    description: 'Développement e-commerce + App mobile — Mars 2025',
    lines: [
      { label: 'Intégration paiement Stripe', qty: 10, unit: 280 },
      { label: 'Développement écrans App mobile', qty: 6, unit: 250 },
      { label: 'Tests & corrections', qty: 4, unit: 175 },
    ],
  },
  {
    id: 'inv-004',
    number: 'FAC-2024-012',
    date: '31 déc 2024',
    dueDate: '31 jan 2025',
    amount: 2100,
    status: 'Payée',
    description: 'Refonte API interne — Décembre 2024',
    lines: [
      { label: 'Migration endpoints GraphQL', qty: 6, unit: 250 },
      { label: 'Tests de charge & documentation', qty: 3, unit: 200 },
    ],
  },
]

export const invoiceSummary = {
  total: 14600,
  paid: 10100,
  pending: 4500,
}

export const monthlySpend = [
  { month: 'Oct', amount: 1800 },
  { month: 'Nov', amount: 2400 },
  { month: 'Déc', amount: 2100 },
  { month: 'Jan', amount: 4200 },
  { month: 'Fév', amount: 3800 },
  { month: 'Mar', amount: 4500 },
]
