# Commit Message Convention

## English

This document is a design guide for commit message policy.

- Hook: `.husky/commit-msg`
- Active config: `commitlint.config.mjs`
- Base preset: `@commitlint/config-conventional`

## Commit anatomy

- `header`: full first line. Format: type(scope): subject.
- `type`: kind of change, for example feat or fix (required).
- `scope`: target area, for example ui or next-app (optional).
- `subject`: short summary of the change (required, concise, imperative).
- `body`: detailed explanation (optional).
- `footer`: metadata, references, or breaking notes (optional).

## Rule levels

- `0`: disabled
- `1`: warning
- `2`: error

## Allowed commit types (recommended)

- `build`: Changes that affect the build system or external dependencies.
- `chore`: Changes to the build process or auxiliary tools and libraries.
- `ci`: Changes to CI configuration files and scripts.
- `docs`: Documentation only changes.
- `feat`: New feature.
- `fix`: Bug fix.
- `perf`: Code changes that improve performance.
- `refactor`: Code changes that neither fix a bug nor add a feature.
- `revert`: Reverts a previous commit.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `test`: Adding or correcting tests.

## Adjustable policy options

Use these options to tailor strictness by team maturity.

### Strict

- Header max length: `72-100`.
- Subject min length: `8-12`.
- Scope format enforced (`lowercase`, min length, allowed delimiters).
- Body/footer line length enforced (`100` suggested).
- Body required for `feat`, `fix`, `refactor`.

### Balanced

- Header max length: `100`.
- Subject min length: `8`.
- Scope optional, but validated when present.
- Body/footer optional, validated when present.

### Relaxed

- Header max length: `120`.
- Subject min length: `5`.
- Scope optional with minimal validation.
- Body/footer mostly optional.

## Commonly tuned rules

- `type-enum`: controls permitted types.
- `header-max-length`: controls first-line length.
- `subject-min-length`: prevents vague commits.
- `scope-case` and `scope-delimiter-style`: keeps scopes consistent.
- `body-leading-blank` and `footer-leading-blank`: readability.
- `body-max-line-length` and `footer-max-line-length`: review-friendly wrapping.

## Example commits

- Valid: `feat(next-app): add shared button usage`
- Valid: `docs(repo): document release workflow`
- Valid: `fix(vite-app2): avoid undefined route state`
- Invalid: `feat: add`
- Invalid: `fix(UI): short`

## References

- [commitlint](https://commitlint.js.org/guides/getting-started.html) - Guide.
- [husky](https://typicode.github.io/husky/get-started.html) - Guide.

## Espanol

Este documento es una guia de diseno para la politica de mensajes de commit.

- Hook: `.husky/commit-msg`
- Configuración activa: `commitlint.config.mjs`
- Preset base: `@commitlint/config-conventional`

## Partes del commit

- `header`: primera línea completa. Formato: type(scope): subject.
- `type`: tipo de cambio, por ejemplo feat o fix (obligatorio).
- `scope`: área objetivo, por ejemplo ui o next-app (opcional).
- `subject`: breve resumen del cambio (obligatorio, conciso, imperativo).
- `body`: explicación detallada (opcional).
- `footer`: metadata, referencias o notas de cambios incompatibles (opcional).

## niveles de regla

- `0`: deshabilitado
- `1`: advertencia
- `2`: error

### Tipos permitidos (recomendado)

- `build`: Cambios que afectan al sistema de compilación o a las dependencias externas.
- `chore`: Cambios en el proceso de construcción o en herramientas y bibliotecas auxiliares.
- `ci`: Cambios en los archivos de configuración y scripts de CI.
- `docs`: Cambios únicamente en la documentación.
- `feat`: Nueva característica o funcionalidad.
- `fix`: Corrección de errores.
- `perf`: Cambios en el código que mejoran el rendimiento.
- `refactor`: Cambios en el código que no corrigen errores ni añaden características.
- `revert`: Revierte un commit anterior.
- `style`: Cambios que no afectan el significado del código (espacios en blanco, formato, punto y coma faltante, etc.).
- `test`: Añadir o corregir pruebas.

### Opciones de politica ajustable

Usa estas opciones para adaptar la exigencia al nivel de madurez del equipo.

#### Estricta

- Longitud maxima del header: `72-100`.
- Longitud minima del subject: `8-12`.
- Formato de scope obligatorio (`lowercase`, longitud minima, delimitadores permitidos).
- Longitud de linea en body/footer obligatoria (`100` recomendado).
- Body obligatorio para `feat`, `fix`, `refactor`.

#### Balanceada

- Longitud maxima del header: `100`.
- Longitud minima del subject: `8`.
- Scope opcional, pero validado cuando se usa.
- Body/footer opcional, validado cuando se usa.

#### Flexible

- Longitud maxima del header: `120`.
- Longitud minima del subject: `5`.
- Scope opcional con validacion minima.
- Body/footer mayormente opcional.

### Reglas que normalmente se ajustan

- `type-enum`: controla tipos permitidos.
- `header-max-length`: controla longitud de primera linea.
- `subject-min-length`: evita commits ambiguos.
- `scope-case` y `scope-delimiter-style`: consistencia del scope.
- `body-leading-blank` y `footer-leading-blank`: legibilidad.
- `body-max-line-length` y `footer-max-line-length`: line wrapping para revision.

### Ejemplos

- Valido: `feat(next-app): add shared button usage`
- Valido: `docs(repo): document release workflow`
- Valido: `fix(vite-app2): avoid undefined route state`
- Invalido: `feat: add`
- Invalido: `fix(UI): short`

### Referencias

- [commitlint](https://commitlint.js.org/guides/getting-started.html) - Guía.
- [husky](https://typicode.github.io/husky/get-started.html) - Guía.

## example of commitlint.config.mjs

```js
const commitLintConfig = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'header-case': [2, 'never', 'lower-case'],
    'header-trim': [2, 'always'],
    'header-full-stop': [2, 'never', '.'],
    'header-min-length': [2, 'always', 10],
    'header-max-length': [2, 'always', 100],

    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-exclamation-mark': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-min-length': [2, 'always', 8],
    'subject-max-length': [2, 'always', Infinity],

    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-min-length': [2, 'always', 2],
    'type-max-length': [2, 'always', Infinity],

    'scope-enum': [0, 'always', []],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [0, 'never'],
    'scope-delimiter-style': [2, 'always', ['/', '-', '|']],
    'scope-min-length': [2, 'always', 3],
    'scope-max-length': [2, 'always', Infinity],

    'body-case': [2, 'never', ['lower-case', 'start-case', 'pascal-case', 'upper-case']],
    'body-empty': [0, 'never'],
    'body-full-stop': [2, 'never', '.'],
    'body-leading-blank': [2, 'always'],
    'body-min-length': [2, 'always', 8],
    'body-max-length': [2, 'always', Infinity],
    'body-max-line-length': [2, 'always', 100],

    'footer-empty': [0, 'never'],
    'footer-leading-blank': [2, 'always'],
    'footer-min-length': [2, 'always', 8],
    'footer-max-length': [2, 'always', Infinity],
    'footer-max-line-length': [2, 'always', 100],
  },
};

export default commitLintConfig;
```
