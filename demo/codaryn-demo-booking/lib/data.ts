export type ServiceColor = 'blue' | 'violet' | 'amber' | 'emerald' | 'rose' | 'cyan'

export interface Service {
  id: string
  name: string
  duration: number
  price: number
  description: string
  color: ServiceColor
}

export interface Booking {
  id: string
  client: string
  service: string
  date: string
  time: string
  duration: number
  status: 'confirmé' | 'en attente' | 'terminé' | 'annulé'
  phone: string
  email: string
  notes: string
}

export interface Client {
  id: string
  name: string
  email: string
  phone: string
  bookingCount: number
  lastVisit: string
  totalSpent: number
}

export interface TimeSlot {
  time: string
  available: boolean
}

// Services
export const services: Service[] = [
  { id: 's1', name: 'Portrait Studio', duration: 60, price: 120, description: 'Séance portrait en studio avec éclairage professionnel', color: 'blue' },
  { id: 's2', name: 'Shooting Produit', duration: 90, price: 180, description: 'Photos produits sur fond blanc ou coloré, retouche incluse', color: 'violet' },
  { id: 's3', name: 'Reportage Événement', duration: 180, price: 350, description: 'Couverture complète de votre événement privé ou professionnel', color: 'amber' },
  { id: 's4', name: 'Séance Couple / Famille', duration: 90, price: 150, description: 'Séance en studio ou en extérieur, livraison sous 7 jours', color: 'emerald' },
  { id: 's5', name: 'Book Professionnel', duration: 120, price: 220, description: 'Portraits corporate pour LinkedIn, CV, presse', color: 'rose' },
  { id: 's6', name: 'Séance Nouveau-né', duration: 120, price: 200, description: 'Photos souvenir dans les premières semaines de vie', color: 'cyan' },
]

// Bookings (mix of statuses)
export const bookings: Booking[] = [
  { id: 'b1', client: 'Marie Dupont', service: 'Portrait Studio', date: '2025-03-25', time: '10:00', duration: 60, status: 'confirmé', phone: '+33 6 12 34 56 78', email: 'marie@email.fr', notes: '' },
  { id: 'b2', client: 'Jean-Pierre Martin', service: 'Book Professionnel', date: '2025-03-25', time: '14:00', duration: 120, status: 'confirmé', phone: '+33 6 23 45 67 89', email: 'jp.martin@corp.fr', notes: 'Tenue formelle prévue' },
  { id: 'b3', client: 'Atelier Dubois', service: 'Shooting Produit', date: '2025-03-26', time: '09:00', duration: 90, status: 'confirmé', phone: '+33 1 42 86 12 34', email: 'contact@atelierdubois.fr', notes: '15 produits à photographier' },
  { id: 'b4', client: 'Sophie Bernard', service: 'Séance Couple / Famille', date: '2025-03-26', time: '11:00', duration: 90, status: 'en attente', phone: '+33 6 34 56 78 90', email: 'sophie.b@gmail.com', notes: '' },
  { id: 'b5', client: 'Lucas Moreau', service: 'Portrait Studio', date: '2025-03-27', time: '09:30', duration: 60, status: 'confirmé', phone: '+33 7 45 67 89 01', email: 'lucas.m@email.fr', notes: '' },
  { id: 'b6', client: 'Entreprise Nexia', service: 'Reportage Événement', date: '2025-03-28', time: '18:00', duration: 180, status: 'confirmé', phone: '+33 1 56 78 90 12', email: 'events@nexia.fr', notes: 'Soirée de lancement produit' },
  { id: 'b7', client: 'Clara Petit', service: 'Séance Nouveau-né', date: '2025-03-29', time: '10:00', duration: 120, status: 'en attente', phone: '+33 6 67 89 01 23', email: 'clara.p@gmail.com', notes: 'Bébé de 3 semaines' },
  { id: 'b8', client: 'Thomas Leroy', service: 'Book Professionnel', date: '2025-03-24', time: '11:00', duration: 120, status: 'terminé', phone: '+33 6 78 90 12 34', email: 't.leroy@startup.io', notes: '' },
  { id: 'b9', client: 'Nadia Hamdi', service: 'Portrait Studio', date: '2025-03-21', time: '14:30', duration: 60, status: 'terminé', phone: '+33 7 89 01 23 45', email: 'nadia.h@gmail.com', notes: '' },
  { id: 'b10', client: 'Fabrice Durand', service: 'Shooting Produit', date: '2025-03-20', time: '10:00', duration: 90, status: 'annulé', phone: '+33 6 90 12 34 56', email: 'f.durand@boutique.fr', notes: '' },
]

// Clients (derived + extras)
export const clients: Client[] = [
  { id: 'c1', name: 'Marie Dupont', email: 'marie@email.fr', phone: '+33 6 12 34 56 78', bookingCount: 3, lastVisit: '25 mars 2025', totalSpent: 360 },
  { id: 'c2', name: 'Jean-Pierre Martin', email: 'jp.martin@corp.fr', phone: '+33 6 23 45 67 89', bookingCount: 1, lastVisit: '25 mars 2025', totalSpent: 220 },
  { id: 'c3', name: 'Atelier Dubois', email: 'contact@atelierdubois.fr', phone: '+33 1 42 86 12 34', bookingCount: 4, lastVisit: '26 mars 2025', totalSpent: 720 },
  { id: 'c4', name: 'Sophie Bernard', email: 'sophie.b@gmail.com', phone: '+33 6 34 56 78 90', bookingCount: 2, lastVisit: '26 mars 2025', totalSpent: 300 },
  { id: 'c5', name: 'Lucas Moreau', email: 'lucas.m@email.fr', phone: '+33 7 45 67 89 01', bookingCount: 1, lastVisit: '27 mars 2025', totalSpent: 120 },
  { id: 'c6', name: 'Entreprise Nexia', email: 'events@nexia.fr', phone: '+33 1 56 78 90 12', bookingCount: 2, lastVisit: '28 mars 2025', totalSpent: 700 },
  { id: 'c7', name: 'Clara Petit', email: 'clara.p@gmail.com', phone: '+33 6 67 89 01 23', bookingCount: 1, lastVisit: '29 mars 2025', totalSpent: 200 },
  { id: 'c8', name: 'Thomas Leroy', email: 't.leroy@startup.io', phone: '+33 6 78 90 12 34', bookingCount: 2, lastVisit: '24 mars 2025', totalSpent: 440 },
]

// Time slots for booking flow
export const timeSlots: TimeSlot[] = [
  { time: '09:00', available: true },
  { time: '09:30', available: false },
  { time: '10:00', available: false },
  { time: '10:30', available: true },
  { time: '11:00', available: false },
  { time: '11:30', available: true },
  { time: '14:00', available: false },
  { time: '14:30', available: true },
  { time: '15:00', available: true },
  { time: '15:30', available: false },
  { time: '16:00', available: true },
  { time: '16:30', available: true },
]

export const studio = {
  name: 'Studio Photo Lumière',
  address: '14 rue de la Paix, 75002 Paris',
  phone: '+33 1 42 60 85 00',
  email: 'contact@studiolumiere.fr',
}

export const stats = {
  bookingsThisWeek: 7,
  bookingsThisMonth: 23,
  revenueThisMonth: 3840,
  occupancyRate: 78,
}
