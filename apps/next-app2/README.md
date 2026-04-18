# next-app2

## English

Next.js application (App Router) inside this monorepo.

### Development

From repository root:

```sh
npm run dev -- --filter=next-app2
```

From this folder:

```sh
npm run dev
```

Local port: `http://localhost:3001`.

### Scripts

- `npm run dev`: starts Next on port 3001.
- `npm run build`: production build.
- `npm run start`: production server.
- `npm run lint`: ESLint with `--max-warnings 0`.
- `npm run check-types`: `next typegen` + `tsc --noEmit`.

### Conventions

- Keep App Router structure under `src/app`.
- Reuse shared packages (`@repo/ui`, `@repo/eslint-config`, `@repo/typescript-config`).
- Avoid importing code from other apps.

## Espanol

Aplicacion Next.js (App Router) dentro del monorepo.

## Desarrollo

Desde la raiz del repositorio:

```sh
npm run dev -- --filter=next-app2
```

Desde esta carpeta:

```sh
npm run dev
```

Puerto local: `http://localhost:3001`.

## Scripts

- `npm run dev`: inicia Next en puerto 3001.
- `npm run build`: build de produccion.
- `npm run start`: servidor de produccion.
- `npm run lint`: ESLint con `--max-warnings 0`.
- `npm run check-types`: `next typegen` + `tsc --noEmit`.

## Convenciones

- Mantener estructura App Router en `src/app`.
- Reutilizar paquetes compartidos (`@repo/ui`, `@repo/eslint-config`, `@repo/typescript-config`).
- Evitar importar codigo desde otras apps.
