import eslint from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import pluginPromise from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const eslintConfig = defineConfig([
	globalIgnores(['.next/**', 'build/**', 'next-env.d.ts', 'node_modules/**', 'out/**']),
	{
		files: ['**/*.ts', '**/*.tsx'],
		settings: {
			react: { version: 'detect' },
		},
		extends: [
			eslint.configs.recommended,
			tseslint.configs.recommended,
			pluginPromise.configs['flat/recommended'],
			reactPlugin.configs.flat.recommended,
			reactPlugin.configs.flat['jsx-runtime'],
			reactHooksPlugin.configs.flat['recommended-latest'],
			...nextVitals,
		],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
]);

export default eslintConfig;
