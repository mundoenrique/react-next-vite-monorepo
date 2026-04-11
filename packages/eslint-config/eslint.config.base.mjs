import js from '@eslint/js';
import globals from 'globals';
import jsdoc from 'eslint-plugin-jsdoc';
import tseslint from 'typescript-eslint';
import turboPlugin from 'eslint-plugin-turbo';
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['node_modules', 'coverage', '**/*.d.ts', '**/*.d.ts.map']),
  {
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2024,
    },
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always'],
      'no-console': 'error',
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
  {
    files: ['eslint.config.{js,mjs}'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'module',
    },
  },
  {
    files: ['**/*.{ts,tsx}', '**/*.{test,spec}.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      jsdoc.configs['flat/recommended-typescript'],
      jsdoc.configs['flat/recommended-error'],
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      import: importPlugin,
      jsdoc,
    },
    rules: {
      curly: ['off', 'all'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [
            {
              pattern: '%/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@shadcn/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@tests/**',
              group: 'parent',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'object', 'type'],
          warnOnUnassignedImports: true,
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'jsdoc/require-jsdoc': 'off',
      // Future tightening: promote these to "error" after documentation baseline is stable.
      'jsdoc/require-description-complete-sentence': 'warn',
      'jsdoc/require-description': 'warn',
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-returns-type': 'off',
      'jsdoc/require-returns': 'off',
    },
  },
  {
    files: ['**/*.d.ts'],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      '@typescript-eslint/consistent-type-imports': 'off',
      // Declaration files intentionally model ambient types, so keep docs optional.
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-description-complete-sentence': 'off',
      'jsdoc/require-description': 'off',
    },
  },
  {
    files: ['**/*.{test,spec}.{ts,tsx}', '**/*.stories.{ts,tsx}', '**/vite.config.ts', '**/next.config.{js,mjs,ts}'],
    plugins: { jsdoc },
    rules: {
      // Keep support files/tests lightweight; prioritize velocity over documentation strictness here.
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-description-complete-sentence': 'off',
      'jsdoc/require-description': 'off',
      'jsdoc/require-returns': 'off',
    },
  },
  {
    files: ['packages/shadcn-ui/src/**'],
    rules: {
      // shadcn-generated files keep their own import style; avoid noisy warnings in pre-commit hooks.
      'import/order': 'off',
    },
  },
  {
    files: ['**/*.{test,spec}.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
]);
