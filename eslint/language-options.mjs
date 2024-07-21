import globals from "globals"
import { parser as tseslintParser } from "typescript-eslint"

/**
 * @param {string} tsConfigPath path to `tsconfig.json`
 * @returns {Pick<import("typescript-eslint").ConfigWithExtends, "name" | "languageOptions">}
 */
const languageOptionFactory = (tsConfigPath) => ({
  name: "@yamada-ui/languageOptions/base",
  languageOptions: {
    parser: tseslintParser,
    parserOptions: {
      ecmaVersion: 10,
      sourceType: "module",
      project: tsConfigPath,
    },
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2015,
    },
  },
})

export { languageOptionFactory }
