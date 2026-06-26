# Project Structure Guide

## 📁 Directory Organization

### `/app`
**Next.js App Router** - Contains all application pages and API routes
```
app/
├── [locale]/           # Locale-specific routes (EN, FR, ES, AR)
│   ├── about/
│   ├── booking/
│   ├── contact/
│   ├── cookies/
│   ├── destinations/
│   ├── privacy/
│   ├── services/
│   ├── terms/
│   └── page.tsx        # Home page
├── api/                # API routes
│   ├── destinations/
│   ├── features/
│   ├── process-steps/
│   └── ...
└── layout.tsx          # Root layout
```

### `/components`
**Reusable React Components**
```
components/
├── features/           # Feature-specific components
│   ├── booking/
│   ├── destinations/
│   ├── services/
│   └── testimonials/
├── layout/             # Layout components
│   ├── footer.tsx
│   ├── header.tsx
│   └── navbar.tsx
├── ui/                 # shadcn/ui components
└── shared/             # Shared utilities
```

### `/config` ⭐ CENTRALIZED
**All Application Configuration**
```
config/
├── index.ts            # Centralized exports
├── site.ts             # Site config + constants
└── navigation.ts       # Navigation structure
```

### `/lib`
**Utility Functions and Helpers**
```
lib/
├── constants.ts        # Re-exports from config (backward compatibility)
├── prisma.ts           # Prisma Client singleton
├── i18n.ts             # i18n configuration
├── auth.ts             # Authentication helpers
└── utils.ts            # General utilities
```

### `/messages`
**Internationalization (i18n) Translations**
```
messages/
├── en/                 # English
│   ├── nav.json
│   ├── footer.json
│   ├── hero.json
│   ├── legal.json      # Legal content (cookies, privacy, terms)
│   └── ...
├── fr/                 # French
├── es/                 # Spanish
└── ar/                 # Arabic
```

### `/prisma`
**Database Configuration**
```
prisma/
├── schema.prisma       # Database schema definition
├── seed.js             # Seed data script
└── migrations/         # Database migrations
```

### `/public`
**Static Assets**
```
public/
├── assets/
│   └── images/
├── favicon.ico
└── og-image.jpg
```

### `/docs` 📚 DOCUMENTATION
**Project Documentation**
```
docs/
├── INDEX.md            # Documentation index
├── ARCHITECTURE.md     # Project architecture
├── DATABASE.md         # Database schema
└── SETUP.md            # Setup instructions
```

### `/.github` 🤖 CI/CD
**GitHub Configuration**
```
.github/
├── README.md           # GitHub config guide
├── workflows/
│   └── ci.yml          # CI/CD pipeline
├── ISSUE_TEMPLATE/
│   ├── bug_report.md
│   └── feature_request.md
└── PULL_REQUEST_TEMPLATE.md
```

### `/types`
**TypeScript Type Definitions**
```
types/
├── api.ts              # API response types
├── database.ts         # Database model types
└── common.ts           # Common types
```

## 📋 Root Level Files

### Configuration Files
- **tsconfig.json** - TypeScript configuration
- **next.config.js** - Next.js configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **postcss.config.cjs** - PostCSS configuration
- **i18n.ts** - i18n configuration

### Environment
- **.env** - Template environment variables
- **.env.example** - Example environment file
- **.env.local** - Local development overrides (gitignored)
- **.env.production** - Production environment variables

### Linting & Formatting
- **.eslintrc.json** - ESLint configuration
- **.editorconfig** - Editor configuration
- **.prettierrc** - Prettier configuration (if used)

### Git
- **.gitignore** - Git ignore rules
- **.gitattributes** - Git attributes

### Documentation
- **README.md** - Project overview
- **CONTRIBUTING.md** - Contribution guidelines
- **CODE_OF_CONDUCT.md** - Community code of conduct
- **SECURITY.md** - Security policy
- **LICENSE** - MIT License
- **CHANGELOG.md** - Version history

### Package Management
- **package.json** - Dependencies and scripts
- **package-lock.json** - Locked versions

### Build Artifacts (Ignored)
- **.next/** - Next.js build output
- **node_modules/** - Dependencies

## 🎯 Key Principles

### ✅ CENTRALIZATION
- All configuration in `/config` folder
- All translations in `/messages` folder
- All documentation in `/docs` folder

### ✅ NO DUPLICATES
- Configuration consolidation in `config/site.ts`
- Navigation in single `config/navigation.ts`
- No hardcoded data in components

### ✅ CLEAN STRUCTURE
- `/app` for pages and routes
- `/components` for UI components
- `/lib` for utilities
- `/config` for configuration
- `/messages` for i18n

### ✅ BACKWARD COMPATIBILITY
- `lib/constants.ts` re-exports from config
- Old imports still work
- Gradual migration possible

## 📊 File Organization Rules

1. **One responsibility per file**
2. **Group related files in folders**
3. **Use index.ts for exports**
4. **No nested deep structures** (max 3 levels)
5. **Clear naming conventions**
   - Components: PascalCase (Button.tsx)
   - Utilities: camelCase (utils.ts)
   - Types: ClassName.types.ts
   - Constants: UPPER_CASE

## 🔄 Import Paths

Use path aliases (configured in tsconfig.json):
```typescript
// ✅ Good
import { siteConfig } from '@/config'
import { Button } from '@/components/ui'
import { prisma } from '@/lib/prisma'

// ❌ Avoid
import { siteConfig } from '../../../config/site'
import Button from '../../../../components/ui/button'
```

## 📝 Adding New Features

1. **Create component** in `/components/features/[feature]`
2. **Add configuration** to `/config` if needed
3. **Add translations** to `/messages/[locale]`
4. **Add types** to `/types`
5. **Add API routes** to `/app/api` if needed
6. **Update documentation** in `/docs`
