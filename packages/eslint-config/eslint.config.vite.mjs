import base from './eslint.config.base.mjs';
import react from './eslint.config.react.mjs';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  ...base,
  ...react,
  globalIgnores(['dist', 'coverage', 'shadcn', 'node_modules', '**/*.d.ts', '**/*.d.ts.map']),
  {
    files: ['vite.config.ts'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['**/*.{ts,tsx}', '**/*.{test,spec}.{ts,tsx}'],
    extends: [reactRefresh.configs.vite],
  },
]);
