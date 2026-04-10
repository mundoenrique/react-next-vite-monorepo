# vite-app2

## English

React + Vite application inside this monorepo.

### Development

From repository root:

```sh
npm run dev -- --filter=vite-app2
```

From this folder:

```sh
npm run dev
```

Local port: `http://localhost:5174`.

### Scripts

- `npm run dev`: starts Vite on port 5174.
- `npm run build`: runs `tsc -b` and then `vite build`.
- `npm run preview`: preview production build.
- `npm run lint`: ESLint with `--max-warnings 0`.
- `npm run check-types`: `tsc -b`.

### Conventions

- Keep Vite build flow: `tsc -b` before `vite build`.
- Reuse shared packages (`@repo/ui`, `@repo/eslint-config`, `@repo/typescript-config`).
- Avoid importing code from other apps.

## Espanol

Aplicacion React + Vite dentro del monorepo.

## Desarrollo

Desde la raiz del repositorio:

```sh
npm run dev -- --filter=vite-app2
```

Desde esta carpeta:

```sh
npm run dev
```

Puerto local: `http://localhost:5174`.

## Scripts

- `npm run dev`: inicia Vite en puerto 5174.
- `npm run build`: ejecuta `tsc -b` y luego `vite build`.
- `npm run preview`: vista previa del build.
- `npm run lint`: ESLint con `--max-warnings 0`.
- `npm run check-types`: `tsc -b`.

## Convenciones

- Mantener flujo de build Vite: `tsc -b` antes de `vite build`.
- Reutilizar paquetes compartidos (`@repo/ui`, `@repo/eslint-config`, `@repo/typescript-config`).
- Evitar importar codigo desde otras apps.
