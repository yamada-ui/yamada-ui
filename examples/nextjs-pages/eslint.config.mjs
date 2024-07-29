import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { fixupPluginRules } from '@eslint/compat'
import pluginNext from '@next/eslint-plugin-next'
import pluginImport from 'eslint-plugin-import'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import { config as tseslintConfig, parser as tseslintParser } from 'typescript-eslint'

const files = [
  '**/*.js',
  '**/*.cjs',
  '**/*.mjs',
  '**/*.jsx',
  '**/*.ts',
  '**/*.cts',
  '**/*.mts',
  '**/*.tsx',
  '**/*.d.ts',
]

export default tseslintConfig(
  {
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        sourceType: 'module',
        project: resolve(dirname(fileURLToPath(import.meta.url)), './tsconfig.json'),
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files,
    plugins: {
      import: fixupPluginRules(pluginImport),
    },
    rules: {
      'import/named': 'off',
      'import/no-anonymous-default-export': 'off',
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx', '.d.ts'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    files: files,
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      'react/no-unknown-property': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files,
    plugins: {
      'react-hooks': fixupPluginRules(pluginReactHooks),
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  {
    files,
    plugins: {
      '@next/next': fixupPluginRules(pluginNext),
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      '@next/next/no-img-element': 'off',
      '@next/next/no-title-in-document-head': 'off',
      '@next/next/no-assign-module-variable': 'off',
    },
  },
  {
    files,
    plugins: {
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
    },
  },
  {
    files,
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginPrettier.configs.recommended.rules,
      curly: 'off',
      'no-unexpected-multiline': 'off',
      'react/jsx-child-element-spacing': 'off',
      'react/jsx-closing-bracket-location': 'off',
      'react/jsx-closing-tag-location': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-curly-spacing': 'off',
      'react/jsx-equals-spacing': 'off',
      'react/jsx-first-prop-new-line': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-newline': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-multi-spaces': 'off',
      'react/jsx-tag-spacing': 'off',
      'react/jsx-wrap-multilines': 'off',
    },
  },
)
