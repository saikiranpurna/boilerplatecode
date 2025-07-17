# Development Setup

This project is configured with the following development tools:

## Code Quality Tools

### Prettier

- **Config**: `.prettierrc`
- **Ignore**: `.prettierignore`
- **Commands**:
  - `npm run format` - Format all files
  - `npm run format:check` - Check formatting without fixing

### ESLint

- **Config**: `eslint.config.mjs`
- **Plugins**:
  - `@typescript-eslint/eslint-plugin` - TypeScript-specific linting rules
  - `eslint-plugin-react` - React-specific linting rules
  - `eslint-plugin-react-hooks` - React hooks linting rules
  - `eslint-plugin-jsx-a11y` - JSX accessibility linting
  - `eslint-plugin-import` - Import/export syntax linting
  - `eslint-plugin-prettier` - Prettier integration with ESLint
- **Key Rules**:
  - Strict equality enforcement (`eqeqeq`)
  - Consistent brace style (`curly`)
  - Import order enforcement
  - React best practices (no array index keys, self-closing components)
  - TypeScript recommendations
  - Accessibility standards
  - Code consistency and performance optimizations
- **Commands**:
  - `npm run lint` - Run linting
  - `npm run lint:fix` - Run linting and fix issues

### Lint-staged

- **Config**: `.lintstagedrc`
- Automatically runs ESLint and Prettier on staged files during commit

## ESLint Rules Details

### Code Quality Rules

- **Strict Equality**: `eqeqeq` - Enforces use of `===` and `!==`
- **Consistent Braces**: `curly` - Requires braces for all control statements
- **No Debugger**: `no-debugger` - Warns about debugger statements
- **Console Usage**: `no-console` - Allows warn, error, info, debug only

### React-Specific Rules

- **No React Import**: `react/react-in-jsx-scope` - Disabled for React 17+
- **Self-Closing Components**: `react/self-closing-comp` - Enforces self-closing tags
- **Boolean Attributes**: `react/jsx-boolean-value` - Always set boolean attributes explicitly
- **No Array Index Keys**: Prevents using array indices as React keys
- **Display Name**: `react/display-name` - Disabled for cleaner code

### TypeScript Rules

- **No Any Type**: `@typescript-eslint/no-explicit-any` - Disabled but can be enabled
- **No Unused Variables**: Disabled with underscore prefix ignore pattern
- **No TS Comments**: `@typescript-eslint/ban-ts-comment` - Disabled for flexibility

### Accessibility Rules

- **Anchor Validation**: `jsx-a11y/anchor-is-valid` - Validates anchor elements
- **Click Events**: `jsx-a11y/click-events-have-key-events` - Disabled for flexibility
- **Interactive Elements**: Various a11y rules for better accessibility

### Import Rules

- **Import Order**: Enforces specific import order (builtin, external, internal)
- **File Extensions**: Prevents unnecessary extensions in imports
- **Unresolved Imports**: Disabled to prevent false positives

## Git Hooks (Husky)

### Pre-commit Hook

- Runs `lint-staged` to format and lint staged files
- Ensures code quality before commits

### Commit Message Hook

- Uses `@commitlint/config-conventional` to enforce conventional commit messages
- Valid format: `type(scope): description`
- Examples:
  - `feat: add new feature`
  - `fix: resolve bug in authentication`
  - `docs: update README`

## Conventional Commit Types

- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

## Usage

1. **Development**: `npm run dev`
2. **Development (Staging Config)**: `npm run dev:staging`
3. **Development (Production Config)**: `npm run dev:production`
4. **Format code**: `npm run format`
5. **Lint code**: `npm run lint`
6. **Build for staging**: `npm run build:staging`
7. **Build for production**: `npm run build:production`
8. **Make commits**: Git hooks will automatically run checks

## Environment Configuration

### Environment Files

- **`.env.development`** - Development environment variables (committed)
- **`.env.staging`** - Staging environment variables (committed)
- **`.env.production`** - Production environment variables (committed)
- **`.env.example`** - Template for local environment setup (committed)
- **`.env.local`** - Local overrides (gitignored, create manually)

### Environment Variables

- **`NODE_ENV`** - Node.js environment (development/production)
- **`NEXT_PUBLIC_APP_ENV`** - App environment (development/staging/production)
- **`NEXT_PUBLIC_APP_URL`** - Public app URL
- **`NEXT_PUBLIC_API_URL`** - Public API URL
- **`DATABASE_URL`** - Database connection string
- **`NEXTAUTH_URL`** - NextAuth.js URL
- **`NEXTAUTH_SECRET`** - NextAuth.js secret key
- **`DEBUG`** - Enable debug mode
- **`LOG_LEVEL`** - Logging level (debug/info/warn/error)

### Environment Utility

Use the `lib/env.ts` utility for type-safe environment variable access:

```typescript
import { env, isDevelopment, isProduction } from "@/lib/env";

// Access environment variables
const appUrl = env.APP_URL;
const apiUrl = env.API_URL;

// Check environment
if (isDevelopment) {
  console.log("Development mode");
}
```

### Setup Instructions

1. Copy `.env.example` to `.env.local`
2. Fill in your actual values in `.env.local`
3. Use appropriate npm scripts for different environments
4. Environment files are automatically loaded by Next.js

### Environment Switching Scripts

Quick commands to switch between environments:

- **`npm run env:dev`** - Set to development environment
- **`npm run env:staging`** - Set to staging environment
- **`npm run env:prod`** - Set to production environment

These scripts copy the appropriate environment file to `.env.local`.

The setup ensures consistent code quality and commit message formatting across the project.
