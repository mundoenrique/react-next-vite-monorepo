import { defineConfig, globalIgnores } from 'eslint/config';

import eslintBase from '@repo/eslint-config/eslint.base';

export default defineConfig([...eslintBase, globalIgnores(['./packages/shadcn-ui/src/**'])]);
