import eslintBase from '@repo/eslint-config/eslint.base';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([...eslintBase, globalIgnores(['./packages/shadcn-ui/src/**'])]);
