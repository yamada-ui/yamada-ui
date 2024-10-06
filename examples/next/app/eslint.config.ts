import type { Linter } from 'eslint'
import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import {
  baseConfig,
  importConfigArray,
  jsxA11yConfig,
  languageOptionFactory,
  perfectionistConfig,
  reactConfig,
  reactHooksConfig,
  typescriptConfig,
} from '../../../.eslint'

const ignoresConfig: Linter.Config = {
  name: 'eslint/ignores',
  ignores: ['**/dist/**', '**/node_modules/**', '**/.next/**'],
}

const languageOptionConfig = languageOptionFactory(true, {
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
    },
  },
})

export default tseslint.config(
  ignoresConfig,
  languageOptionConfig,
  baseConfig,
  typescriptConfig,
  ...importConfigArray,
  perfectionistConfig,
  reactConfig,
  reactHooksConfig,
  jsxA11yConfig,
  prettierConfig,
)
