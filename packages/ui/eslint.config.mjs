import eslintBase from '@repo/eslint-config/eslint.base';
import eslintReact from '@repo/eslint-config/eslint.react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...eslintBase,
  ...eslintReact,
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      // Future change: enable require-jsdoc for exported symbols once legacy docs debt is reduced.
      'jsdoc/require-jsdoc': 'off',
      // Shared package API should stay better documented than app-level feature code.
      'jsdoc/require-description-complete-sentence': 'error',
      'jsdoc/require-description': 'error',
      'jsdoc/require-returns': 'error',
    },
  },
]);
