---
applyTo: 'apps/{docs,web,next-app,next-app2}/**/*.{ts,tsx,js,jsx,css,md,mdx}'
description: 'Use when working on Next.js apps in this monorepo. Covers App Router conventions, shared package boundaries, and verification commands.'
---

# Next.js App Instructions

## Scope

- Applies to files under apps/docs, apps/web, apps/next-app, and apps/next-app2.
- Follow root defaults from AGENTS.md first. Use this file for Next-specific rules.

## Framework Rules

- Treat Next.js 16.2.2 as source of truth for conventions and APIs.
- Prefer App Router patterns used in each app (app directory, layout/page structure).
- When uncertain about behavior changes, verify against local Next docs in node_modules/next/dist/docs.

## Monorepo Boundaries

- Do not copy components between apps.
- For reusable UI, use packages/ui or move shared code into packages/.
- Keep eslint and tsconfig inheritance aligned with @repo/eslint-config and @repo/typescript-config.

## Validation

- For workspace-wide checks, run from repo root:
  - npm run lint
  - npm run check-types
- For targeted checks, use Turbo filters from root:
  - npx turbo run lint --filter=docs
  - npx turbo run check-types --filter=web
  - npx turbo run check-types --filter=next-app

## Notes

- In Next apps, prefer check-types scripts that run next typegen and tsc together.
- Keep page/layout/server-client boundaries explicit when editing App Router files.
