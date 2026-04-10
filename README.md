# React Next Vite Monorepo Template

## English

Frontend monorepo template with Turborepo for building scalable React platforms.

Includes:

- Next.js apps with App Router
- Apps Vite + React
- Shared ESLint and TypeScript configuration
- Shared UI package
- Commit convention with Husky + Commitlint
- Formatting with Prettier

## Stack

- Node.js 18+
- npm workspaces
- Turborepo
- TypeScript
- ESLint
- Prettier
- Commitlint + Husky

## Structure

- apps: runnable applications
- packages: shared libraries and configuration

Active apps for this template:

- next-app
- next-app2
- vite-app
- vite-app2

Shared packages:

- @repo/eslint-config
- @repo/typescript-config
- @repo/ui

## Architecture rules

- Do not import code directly between apps.
- Reusable code must live in packages.
- New Next.js apps must use src/app.
- Reuse shared lint and type presets; avoid local duplication.

## Installation

```sh
npm install
```

## Development

```sh
npm run dev
```

## Validation

```sh
npm run lint
npm run check-types
npm run build
```

## Formatting

```sh
npm run format
npm run format:check
```

## Commit convention

The complete commit conventions and examples are in [COMMIT_CONVENTION.md](COMMIT_CONVENTION.md).

## Shared package docs

Package documentation:

- [packages/eslint-config/README.md](packages/eslint-config/README.md)
- [packages/typescript-config/README.md](packages/typescript-config/README.md)
- [packages/ui/README.md](packages/ui/README.md)

## Publish as a GitHub template

1. Keep main branch green.
2. Publish the repository.
3. Enable Template repository.
4. Create a first stable tag, for example v1.0.0.

## Espanol

Plantilla de monorepo frontend con Turborepo para construir plataformas React de forma escalable.

Incluye:

- Apps Next.js con App Router
- Apps Vite + React
- Configuracion compartida de ESLint y TypeScript
- Paquete UI compartido
- Convencion de commits con Husky + Commitlint
- Formato con Prettier

## Stack

- Node.js 18+
- npm workspaces
- Turborepo
- TypeScript
- ESLint
- Prettier
- Commitlint + Husky

## Estructura

- apps: aplicaciones ejecutables
- packages: librerias y configuracion compartida

Apps activas para plantilla:

- next-app
- next-app2
- vite-app
- vite-app2

Paquetes compartidos:

- @repo/eslint-config
- @repo/typescript-config
- @repo/ui

## Reglas de arquitectura

- No importar codigo directamente entre apps.
- El codigo reutilizable debe vivir en packages.
- Las nuevas apps Next.js deben usar src/app.
- Reusar presets compartidos de lint y tipos; evitar duplicacion local.

## Instalacion

```sh
npm install
```

## Desarrollo

```sh
npm run dev
```

## Validaciones

```sh
npm run lint
npm run check-types
npm run build
```

## Formato

```sh
npm run format
npm run format:check
```

## Convencion de commits

La guia completa de convenciones y ejemplos esta en [COMMIT_CONVENTION.md](COMMIT_CONVENTION.md).

## Uso de paquetes compartidos

Documentacion por paquete:

- [packages/eslint-config/README.md](packages/eslint-config/README.md)
- [packages/typescript-config/README.md](packages/typescript-config/README.md)
- [packages/ui/README.md](packages/ui/README.md)

## Publicacion como template en GitHub

1. Dejar rama main con calidad verde.
2. Publicar repositorio.
3. Activar opcion Template repository.
4. Crear primer tag estable, por ejemplo v1.0.0.
