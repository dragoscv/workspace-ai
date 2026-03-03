# Tooling & Configuration

## Package Management
- Always use `pnpm`; never npm or yarn
- Use pnpm workspaces with Turborepo for monorepos (`apps/` + `packages/`)
- Use exact versions in `package.json` for critical dependencies
- Run `pnpm install --frozen-lockfile` in CI; never auto-update lockfiles in CI
- Audit dependencies regularly; remove unused packages

## Build Tooling
- Use Turborepo for monorepo task orchestration (`turbo.json`)
- Turbopack is the default bundler in Next.js 16; no flag needed
- Enable Turbopack FS caching: `experimental.turbopackFileSystemCacheForDev: true`
- Enable React Compiler: `reactCompiler: true` in next.config.ts
- Enable Cache Components: `cacheComponents: true` in next.config.ts
- Node.js >= 22 required

## Environment Variables
- All environment-specific config in `.env` files
- `.env` must be in `.gitignore`; never commit secrets
- Maintain `.env.example` with all variables, descriptions, and safe defaults
- Use `zod` schemas to validate environment variables at startup
- For Next.js: use `next-safe-env` or `@t3-oss/env-nextjs` for type-safe env

## Linting & Formatting
- ESLint flat config only (`eslint.config.mjs`); no `.eslintrc.*` (removed in ESLint 10)
- Use `typescript-eslint` with `tseslint.config(...)` for type-aware linting
- Use `@next/eslint-plugin-next` (flat config default in Next.js 16)
- `next lint` is removed in Next.js 16; run ESLint CLI directly
- Prettier for code formatting; run on save and in pre-commit hooks (Husky + lint-staged)
- No lint warnings in CI; treat warnings as errors

## Build & Scripts
- All common operations available as package.json scripts: `dev`, `build`, `test`, `lint`, `typecheck`
- Build output must be deterministic and reproducible
- Use `.gitignore` for: `node_modules`, `dist`, `build`, `.next`, `.env`, coverage reports, IDE files

## IDE Configuration
- Include `.editorconfig` for cross-editor consistency
- VS Code settings in `.vscode/settings.json` for team-shared config
- Recommended extensions in `.vscode/extensions.json`
