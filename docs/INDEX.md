# Wayfera Documentation Index

## Project Overview
- **Name:** Wayfera
- **Type:** Next.js Travel Agency Platform
- **Stack:** Next.js 14, TypeScript, Tailwind CSS, Prisma, next-intl

## Documentation Structure

### 📚 Core Documentation
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Project structure and tech stack
- **[DATABASE.md](./DATABASE.md)** - Database schema and relationships
- **[SETUP.md](./SETUP.md)** - Development setup and installation

### 📋 Project Files (Root)
- **README.md** - Project overview and quick start
- **CONTRIBUTING.md** - Contribution guidelines
- **CODE_OF_CONDUCT.md** - Community code of conduct
- **LICENSE** - MIT License
- **SECURITY.md** - Security policy
- **CHANGELOG.md** - Version history and changes

### ⚙️ Configuration
- **config/site.ts** - Site configuration and constants
- **config/navigation.ts** - Navigation structure
- **config/index.ts** - Centralized config exports
- **.env** - Environment variables template
- **next.config.js** - Next.js configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **tsconfig.json** - TypeScript configuration

### 🤖 CI/CD & Automation
- **.github/workflows/ci.yml** - GitHub Actions CI pipeline
- **.github/ISSUE_TEMPLATE/** - Issue templates for bugs and features
- **.github/PULL_REQUEST_TEMPLATE.md** - PR template

### 📁 Folder Structure
```
wayfera/
├── app/               # Next.js App Router
├── components/        # React components
├── config/           # ⭐ Configuration (CENTRALIZED)
├── lib/              # Utilities and helpers
├── messages/         # i18n translations
├── prisma/           # Database schema and migrations
├── public/           # Static assets
├── docs/             # Documentation
├── .github/          # GitHub configuration
└── types/            # TypeScript types
```

## Quick Links

### Development
- [SETUP.md](./SETUP.md) - Get started with development environment
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Understand project structure

### Data & Database
- [DATABASE.md](./DATABASE.md) - Database design and models

### Deployment
- See [SECURITY.md](../SECURITY.md) for deployment security guidelines

## Key Features
✅ Multi-language support (EN, FR, ES, AR)
✅ Database-driven content (Prisma + PostgreSQL)
✅ API-first architecture
✅ Type-safe with TypeScript
✅ Fully responsive design
✅ Centralized configuration
✅ Clean code organization

## Support
For issues and questions, see [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md)
