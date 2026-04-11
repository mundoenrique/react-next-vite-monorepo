import eslintBase from '@repo/eslint-config/eslint.base';
import eslintReact from '@repo/eslint-config/eslint.react';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([...eslintBase, ...eslintReact, globalIgnores(['./src/**'])]);
