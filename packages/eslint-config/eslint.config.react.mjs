import globals from 'globals';
import react from 'eslint-plugin-react';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactX from 'eslint-plugin-react-x';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}', '**/*.{test,spec}.{ts,tsx}'],
    extends: [
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactX.configs.recommended,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
      reactRefresh.configs.recommended,
    ],
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.jest,
      },
      parserOptions: {
        projectService: true,
      },
    },

    settings: { react: { version: 'detect' } },
    rules: {
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 'off',
    },
  },
]);
