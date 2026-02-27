# 🌍 Wayfera - Travel Agency Website

A modern, feature-rich travel agency website built with Next.js 13, featuring multi-language support, beautiful animations, and comprehensive error handling.

![Next.js](https://img.shields.io/badge/Next.js-13.5-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### 🌐 Multi-Language Support
- **4 Languages**: English, Arabic, French, Spanish
- **RTL Support**: Automatic right-to-left layout for Arabic
- **next-intl Integration**: Seamless internationalization

### 📱 Pages
- **Home**: Hero section, featured destinations, testimonials, newsletter
- **Destinations**: Filterable destinations, popular regions, travel tips
- **Services**: Service showcase, pricing tiers, process flow
- **About**: Company story, values, statistics
- **Contact**: Contact form, location map, contact info
- **Booking**: Multi-step booking wizard with validation

### 🎨 Design & UX
- **Dark Mode**: Full dark mode support with next-themes
- **Animations**: Smooth Framer Motion animations throughout
- **Responsive**: Mobile-first design for all devices
- **Accessibility**: WCAG compliant components
- **Modern UI**: Built with shadcn/ui and Tailwind CSS

### 🛡️ Error Handling
- **404 Page**: Animated not-found page with navigation
- **Error Boundaries**: Graceful error handling
- **Loading States**: Beautiful loading animations
- **Empty States**: User-friendly empty data displays
- **Network Errors**: Connection failure handling

### 🚀 Performance
- **Server Components**: Optimized with React Server Components
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Font Optimization**: Google Fonts with next/font

## 🛠️ Tech Stack

- **Framework**: [Next.js 13.5](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/Mostafa-SAID7/Wayfera.git
cd Wayfera
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🏗️ Project Structure

```
wayfera/
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── about/            # About page
│   │   ├── booking/          # Booking page
│   │   ├── contact/          # Contact page
│   │   ├── destinations/     # Destinations page
│   │   ├── services/         # Services page
│   │   ├── error.tsx         # Error boundary
│   │   ├── loading.tsx       # Loading state
│   │   ├── not-found.tsx     # 404 page
│   │   └── page.tsx          # Home page
│   └── global-error.tsx      # Global error handler
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── booking-section.tsx   # Booking form
│   ├── destinations-section.tsx
│   ├── empty-state.tsx       # Empty state component
│   ├── error-boundary.tsx    # Error boundary component
│   ├── featured-destinations.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── network-error.tsx
│   ├── newsletter.tsx
│   ├── popular-regions.tsx
│   ├── service-features.tsx
│   ├── service-pricing.tsx
│   ├── service-process.tsx
│   ├── services-section.tsx
│   ├── testimonials.tsx
│   ├── travel-tips.tsx
│   └── why-choose-us.tsx
├── messages/                 # Translation files
│   ├── en.json
│   ├── ar.json
│   ├── fr.json
│   └── es.json
├── lib/
│   └── utils.ts             # Utility functions
├── hooks/
│   └── use-toast.ts         # Toast hook
├── i18n.ts                  # i18n configuration
├── middleware.ts            # Next.js middleware
└── tailwind.config.ts       # Tailwind configuration
```

## 🌍 Internationalization

The app supports 4 languages with automatic locale detection:

- **English** (`/en`)
- **Arabic** (`/ar`) - with RTL support
- **French** (`/fr`)
- **Spanish** (`/es`)

### Adding a New Language

1. Create translation file in `messages/[locale].json`
2. Add locale to `middleware.ts`
3. Update `i18n.ts` configuration

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      // Your custom colors
    }
  }
}
```

### Components
All components are in the `components/` directory and can be easily customized.

### Translations
Edit JSON files in `messages/` directory to update translations.

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mostafa SAID**
- GitHub: [@Mostafa-SAID7](https://github.com/Mostafa-SAID7)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons

## 📸 Screenshots

### Home Page
Beautiful hero section with featured destinations and testimonials.

### Destinations
Filterable destinations with detailed information and booking options.

### Services
Comprehensive service packages with transparent pricing.

### Error Pages
Professional error handling with helpful navigation.

---

Made with ❤️ by Mostafa SAID
