# Altévo - Site Vitrine

Site vitrine premium pour Altévo, entreprise de création de logiciels sur mesure.

## 🚀 Stack Technique

- **Framework** : [Next.js 14](https://nextjs.org/) (App Router)
- **Langage** : TypeScript
- **Styles** : [Tailwind CSS](https://tailwindcss.com/)
- **Composants UI** : [shadcn/ui](https://ui.shadcn.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Formulaires** : React Hook Form + Zod
- **Email** : Nodemailer
- **Icônes** : Lucide React

## 📁 Structure du Projet

```
altevo-website/
├── app/                    # Pages Next.js (App Router)
│   ├── api/               # API Routes
│   │   └── contact/       # Endpoint formulaire contact
│   ├── services/          # Page services
│   ├── realisations/      # Page portfolio
│   ├── apropos/           # Page à propos
│   ├── contact/           # Page contact
│   ├── mentions-legales/  # Mentions légales
│   ├── politique-confidentialite/
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── not-found.tsx      # Page 404
│   ├── sitemap.ts         # Génération sitemap
│   ├── robots.ts          # Génération robots.txt
│   └── globals.css        # Styles globaux
├── components/
│   ├── ui/                # Composants shadcn/ui
│   ├── layout/            # Navbar, Footer, BackToTop
│   ├── sections/          # Hero, Services, Process, etc.
│   ├── forms/             # Formulaire de contact
│   ├── Logo.tsx           # Composant logo
│   ├── ThemeToggle.tsx    # Toggle thème clair/sombre
│   ├── AnimatedBackground.tsx
│   └── MotionWrapper.tsx  # Wrappers Framer Motion
├── lib/                   # Utilitaires
│   ├── utils.ts           # Fonctions helpers
│   ├── validations.ts     # Schémas Zod
│   ├── rate-limit.ts      # Rate limiting
│   └── seo.ts             # Configuration SEO
├── hooks/                 # Hooks React personnalisés
├── types/                 # Types TypeScript
└── public/                # Assets statiques
```

## 🛠️ Installation

### Prérequis

- Node.js 18+
- npm ou yarn ou pnpm

### Installation des dépendances

```bash
npm install
```

### Configuration de l'environnement

1. Copier le fichier d'exemple :
```bash
cp .env.example .env.local
```

2. Configurer les variables d'environnement dans `.env.local` :

```env
# Email de destination pour le formulaire de contact
EMAIL_TO=votre-email@example.com

# Configuration SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-application

# URL du site (pour le sitemap et les métadonnées)
NEXT_PUBLIC_SITE_URL=https://altevo.fr
```

#### Configuration Gmail

Pour utiliser Gmail comme serveur SMTP :
1. Activez la validation en deux étapes sur votre compte Google
2. Générez un "mot de passe d'application" : [Paramètres Google](https://myaccount.google.com/apppasswords)
3. Utilisez ce mot de passe dans `SMTP_PASS`

### Lancement en développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
npm start
```

## 🎨 Personnalisation

### Remplacer le logo

1. Placez votre fichier logo dans `/public/logo.svg` (ou .png, .webp)
2. Modifiez le composant `components/Logo.tsx` :
   - Décommentez le bloc `<Image>`
   - Commentez le bloc placeholder
   - Ajustez `width` et `height` selon votre logo

### Modifier les couleurs

Les couleurs sont définies dans `tailwind.config.ts` :

```ts
altevo: {
  dark: "#0A1628",           // Fond principal
  "dark-light": "#0F2847",   // Cartes, sections
  "dark-accent": "#1E3A5F",  // Hover states
  violet: "#7C3AED",         // Accents, CTA
  "violet-light": "#A78BFA", // Hover, gradients
  "violet-dark": "#5B21B6",  // Pressed states
},
```

### Modifier les textes

- **Services** : `components/sections/Services.tsx`
- **Réalisations** : `components/sections/Portfolio.tsx`
- **Témoignages** : `components/sections/Testimonials.tsx`
- **FAQ** : `components/sections/FAQ.tsx`
- **Process** : `components/sections/Process.tsx`
- **Informations de contact** : `components/layout/Footer.tsx` et `app/contact/page.tsx`

### Ajouter des projets au portfolio

Modifiez le tableau `projects` dans `components/sections/Portfolio.tsx` :

```ts
{
  id: "nouveau-projet",
  title: "Nom du projet",
  category: "Type de projet",
  description: "Description courte",
  longDescription: "Description détaillée pour la modale",
  technologies: ["React", "Node.js", "etc."],
  results: ["Résultat 1", "Résultat 2"],
  image: "/images/projects/projet.jpg",
  color: "from-blue-500/20 to-cyan-500/20",
}
```

### Modifier les métadonnées SEO

Les métadonnées par défaut sont dans `lib/seo.ts`. Chaque page peut surcharger ses propres métadonnées.

## 📧 Formulaire de Contact

Le formulaire utilise :
- **Validation** : Zod (côté client et serveur)
- **Anti-spam** : Honeypot + Rate limiting (5 requêtes/minute par IP)
- **Envoi** : Nodemailer via SMTP

### Personnaliser l'email

Le template de l'email est dans `app/api/contact/route.ts`.

## 🚀 Déploiement sur Vercel

### Méthode 1 : Via l'interface Vercel

1. Push votre code sur GitHub/GitLab
2. Connectez-vous à [Vercel](https://vercel.com)
3. Importez votre repository
4. Configurez les variables d'environnement dans les settings du projet
5. Déployez

### Méthode 2 : Via CLI

```bash
npm i -g vercel
vercel
```

### Variables d'environnement Vercel

Dans les settings du projet sur Vercel, ajoutez :

| Variable | Valeur |
|----------|--------|
| `EMAIL_TO` | votre-email@example.com |
| `SMTP_HOST` | smtp.gmail.com |
| `SMTP_PORT` | 587 |
| `SMTP_USER` | votre-email@gmail.com |
| `SMTP_PASS` | votre-mot-de-passe-app |
| `NEXT_PUBLIC_SITE_URL` | https://votre-domaine.com |

## ✅ Checklist de Vérification

### Avant la mise en production

- [ ] Variables d'environnement configurées
- [ ] Logo remplacé
- [ ] Textes personnalisés (services, portfolio, contact)
- [ ] Mentions légales complétées (SIRET, adresse, etc.)
- [ ] Formulaire de contact testé
- [ ] Test responsive (mobile, tablette, desktop)
- [ ] Test des liens (navigation, footer, CTAs)
- [ ] Vérification SEO (title, description, og tags)

### Tests de performance

- [ ] Lighthouse score > 90 sur toutes les métriques
- [ ] Images optimisées
- [ ] Pas de CLS (Cumulative Layout Shift)
- [ ] LCP < 2.5s

### Accessibilité

- [ ] Navigation clavier fonctionnelle
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Contrastes suffisants
- [ ] Textes alternatifs sur les images
- [ ] Respect de prefers-reduced-motion

## 📝 Commandes disponibles

```bash
npm run dev      # Lancement en développement
npm run build    # Build de production
npm start        # Lancement du build
npm run lint     # Vérification ESLint
```

## 🔒 Sécurité

- Protection CSRF sur le formulaire
- Rate limiting (5 req/min par IP)
- Honeypot anti-spam
- Validation des entrées (Zod)
- Headers de sécurité (via Next.js)
- Pas de secrets exposés côté client

## 📄 Licence

Propriétaire - Tous droits réservés © Altévo

---

Développé avec ❤️ par Altévo
