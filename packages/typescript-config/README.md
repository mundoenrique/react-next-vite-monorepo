# @repo/typescript-config

Shared TypeScript configuration presets for this monorepo.

## English

### Available entry points

- `@repo/typescript-config/tsconfig.base`
- `@repo/typescript-config/tsconfig.next`
- `@repo/typescript-config/tsconfig.vite.app`
- `@repo/typescript-config/tsconfig.vite.node`

### Usage

For Next.js apps:

```json
{
  "extends": "@repo/typescript-config/tsconfig.next"
}
```

For Vite app source config:

```json
{
  "extends": "@repo/typescript-config/tsconfig.vite.app"
}
```

For Vite node config:

```json
{
  "extends": "@repo/typescript-config/tsconfig.vite.node"
}
```

### Notes

- Keep project-specific overrides minimal.
- Prefer extending shared configs over copying compiler options.

## Espanol

Presets compartidos de TypeScript para este monorepo.

### Entry points disponibles

- `@repo/typescript-config/tsconfig.base`
- `@repo/typescript-config/tsconfig.next`
- `@repo/typescript-config/tsconfig.vite.app`
- `@repo/typescript-config/tsconfig.vite.node`

### Uso

Para apps Next.js:

```json
{
  "extends": "@repo/typescript-config/tsconfig.next"
}
```

Para configuracion de codigo fuente en Vite:

```json
{
  "extends": "@repo/typescript-config/tsconfig.vite.app"
}
```

Para configuracion de Node en Vite:

```json
{
  "extends": "@repo/typescript-config/tsconfig.vite.node"
}
```

### Notas

- Mantener overrides especificos por proyecto al minimo.
- Preferir extender configuraciones compartidas en lugar de copiar opciones del compilador.
