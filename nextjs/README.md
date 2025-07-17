# Next JS 🚀

A modern Next.js application with comprehensive development tooling and environment configuration.

## 🚀 Boilerplate Features

This project comes pre-configured with:

### Code Quality & Development Tools

- **ESLint** - Comprehensive linting with React, TypeScript, and accessibility rules
- **Prettier** - Code formatting with consistent style
- **Husky** - Git hooks for pre-commit validation
- **Lint-staged** - Run linters on staged files only
- **Commitlint** - Conventional commit message enforcement

### Environment Management

- **Multi-environment support** - Development, staging, and production configs
- **Type-safe environment variables** - Utility for safe env access
- **Environment switching scripts** - Easy switching between environments

### Modern Stack

- **Next.js 15.4.1** - Latest Next.js with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Full TypeScript support
- **Tailwind CSS 4** - Utility-first CSS framework
- **Turbopack** - Fast development builds

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📦 Package Management

### Update All Packages

**Recommended: Update within semver ranges**

```bash
npm update
```

**Update to latest versions (including major versions)**

```bash
npx npm-check-updates -u
npm install
```

**Check for outdated packages**

```bash
npm outdated
```

**Interactive package updates**

```bash
npx npm-check-updates -i
```

**Fix security vulnerabilities**

```bash
npm audit fix
```

### Post-Update Testing

After updating packages, always test:

```bash
npm run dev        # Test development server
npm run build      # Test production build
npm run lint       # Test linting
npm run format     # Test formatting
```

## 🛠️ Development Commands

### Environment Management

```bash
npm run env:dev        # Switch to development environment
npm run env:staging    # Switch to staging environment
npm run env:prod       # Switch to production environment
```

### Development with Different Configs

```bash
npm run dev            # Development with default config
npm run dev:staging    # Development with staging config
npm run dev:production # Development with production config
```

### Code Quality

```bash
npm run lint           # Run ESLint
npm run lint:fix       # Run ESLint and fix issues
npm run format         # Format code with Prettier
npm run format:check   # Check formatting without fixing
```

### Build & Deploy

```bash
npm run build          # Build for production
npm run build:staging  # Build with staging config
npm run build:production # Build with production config
npm run start          # Start production server
```

## 🌍 Environment Configuration

The project supports multiple environments:

1. **Development** (`.env.development`) - Local development
2. **Staging** (`.env.staging`) - Staging server
3. **Production** (`.env.production`) - Production server

### Setup Environment Variables

1. Copy `.env.example` to `.env.local`
2. Fill in your actual values
3. Use environment switching scripts as needed

For more details, see [`DEVELOPMENT.md`](DEVELOPMENT.md).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 📚 Project Documentation

- **[DEVELOPMENT.md](DEVELOPMENT.md)** - Comprehensive development setup guide
- **Environment Configuration** - Multi-environment setup details
- **Code Quality Rules** - ESLint and Prettier configuration
- **Git Hooks** - Pre-commit and commit message validation

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Deployment Commands

```bash
# Build for production
npm run build:production

# Or build for staging
npm run build:staging
```

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

1. Follow the conventional commit format
2. Run `npm run lint` before committing
3. Ensure all tests pass
4. Use the appropriate environment configuration

The project uses Husky hooks to automatically run linting and formatting on commit.
