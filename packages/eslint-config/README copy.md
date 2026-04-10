# @repo/eslint-config

Shared ESLint flat-config presets for apps and packages in this monorepo.

## English

### Available entry points

- `@repo/eslint-config/eslint.base`
- `@repo/eslint-config/eslint.react`
- `@repo/eslint-config/eslint.next`
- `@repo/eslint-config/eslint.vite`

### Usage

For Next.js apps:

```js
import eslintNext from '@repo/eslint-config/eslint.next';
import { defineConfig } from 'eslint/config';

export default defineConfig([...eslintNext]);
```

For Vite apps:

```js
import eslintVite from '@repo/eslint-config/eslint.vite';
import { defineConfig } from 'eslint/config';

export default defineConfig([...eslintVite]);
```

### Notes

- Keep app/package lint scripts strict (`--max-warnings 0`).
- Reuse these presets instead of duplicating local rules.

## Espanol

Presets compartidos de ESLint (flat config) para apps y paquetes del monorepo.

### Entry points disponibles

- `@repo/eslint-config/eslint.base`
- `@repo/eslint-config/eslint.react`
- `@repo/eslint-config/eslint.next`
- `@repo/eslint-config/eslint.vite`

### Uso

Para apps Next.js:

```js
import eslintNext from '@repo/eslint-config/eslint.next';
import { defineConfig } from 'eslint/config';

export default defineConfig([...eslintNext]);
```

Para apps Vite:

```js
import eslintVite from '@repo/eslint-config/eslint.vite';
import { defineConfig } from 'eslint/config';

export default defineConfig([...eslintVite]);
```

### Notas

- Mantener scripts de lint estrictos (`--max-warnings 0`).
- Reutilizar estos presets en lugar de duplicar reglas locales.
