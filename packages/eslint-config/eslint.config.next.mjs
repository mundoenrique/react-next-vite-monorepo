import base from './eslint.config.base.mjs';
import react from './eslint.config.react.mjs';
import reactRefresh from 'eslint-plugin-react-refresh';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  ...base,
  ...react,
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    files: ['**/*.{ts,tsx}', '**/*.{test,spec}.{ts,tsx}'],
    extends: [reactRefresh.configs.next],
  },
]);
