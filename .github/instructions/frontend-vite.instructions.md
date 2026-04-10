---
applyTo: 'apps/{vite-app,vite-app2}/**/*.{ts,tsx,js,jsx,css,html,md}'
description: 'Use when working on Vite apps in this monorepo. Covers build flow, TypeScript build mode, and shared package boundaries.'
---

# Vite App Instructions

## Scope

- Applies to files under apps/vite-app and apps/vite-app2.
- Follow root defaults from AGENTS.md first. Use this file for Vite-specific rules.

## Build and Typecheck Flow

- Preserve the existing build order used by each app:
  - tsc -b
  - vite build
- Do not replace build mode type checks with plain tsc --noEmit in these apps.

## Monorepo Boundaries

- Avoid duplicating shared code between vite-app and vite-app2.
- Move cross-app reusable logic/components into packages/ when needed.
- Reuse shared lint and TypeScript configs from workspace packages.

## Validation

- For workspace-wide checks, run from repo root:
  - npm run lint
  - npm run check-types
- For targeted checks, use Turbo filters from root:
  - npx turbo run lint --filter=vite-app
  - npx turbo run check-types --filter=vite-app2

## Notes

- Keep Vite config and TS project references consistent with current app setup.
- Prefer small, composable React components and explicit prop typing.
