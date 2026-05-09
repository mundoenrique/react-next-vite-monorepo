import { defineConfig, globalIgnores } from 'eslint/config';

import eslintBase from '@repo/eslint-config/eslint.base';
import eslintReact from '@repo/eslint-config/eslint.react';

export default defineConfig([...eslintBase, ...eslintReact, globalIgnores(['./src/**'])]);
