# Project Guidelines

## Code Style

- Use TypeScript across apps and packages.
- Follow shared linting and TS configs from packages/eslint-config and packages/typescript-config.
- Keep lint clean; treat warnings as issues in apps configured with max-warnings 0.
- Prefer small, composable React components and clear prop names.
- Reuse shared UI components from packages/ui instead of duplicating similar components inside apps.

## Architecture

- apps/ contains runnable applications (Next.js and Vite).
- packages/ contains shared code and shared configuration.
- Do not import code directly from one app into another app.
- For cross-app reuse, move shared logic/components into packages/ and consume via workspace packages.

## Build and Test

- Install dependencies from repo root: npm install
- Run all dev tasks: npm run dev
- Build all workspaces: npm run build
- Lint all workspaces: npm run lint
- Type-check all workspaces: npm run check-types
- Format supported files: npm run format
- Run a subset with Turbo filter when needed, for example: npx turbo run dev --filter=web

## Conventions

- Next.js apps are currently on Next 16.2.2. Expect breaking changes compared with older conventions.
- For app-specific Next.js caveats, check:
  - apps/next-app/AGENTS.md
  - apps/next-app2/AGENTS.md
- In Next.js apps, use the workspace check-types script (next typegen + tsc) instead of running raw tsc only.
- In Vite apps, preserve the existing build flow (tsc -b before vite build).

## References (Link, Do Not Duplicate)

- Root overview: README.md
- Apps docs: apps/next-app/README.md, apps/next-app2/README.md, apps/vite-app/README.md, apps/vite-app2/README.md
- Shared packages: packages/ui/README.md, packages/eslint-config/README.md
