# @repo/ui

Shared React UI components for monorepo apps.

## English

### Purpose

This package contains reusable UI components consumed by multiple apps.

### Import pattern

```tsx
import { Button } from '@repo/ui/button';
```

### Dependency rule for consumer apps

If an app imports from `@repo/ui`, it must declare `@repo/ui` in its `dependencies`.

### Notes

- `react` and `react-dom` are peer dependencies.
- Keep components small and composable.
- Move cross-app UI elements into this package instead of duplicating them in app folders.

## Espanol

### Proposito

Este paquete contiene componentes UI reutilizables consumidos por multiples apps.

### Patron de importacion

```tsx
import { Button } from '@repo/ui/button';
```

### Regla de dependencia para apps consumidoras

Si una app importa desde `@repo/ui`, debe declarar `@repo/ui` en `dependencies`.

### Notas

- `react` y `react-dom` son peer dependencies.
- Mantener componentes pequenos y componibles.
- Mover elementos UI compartidos a este paquete en lugar de duplicarlos en carpetas de apps.
