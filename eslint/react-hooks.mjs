import { fixupPluginRules } from "@eslint/compat"
import pluginReactHooks from "eslint-plugin-react-hooks"

/** @type {Pick<import("eslint-plugin-react").Config, "name" | "files" | "plugins" | "rules">} */
const reactHooksConfig = {
  name: "@yamada-ui/react-hooks/base",
  files: [
    "**/*.js",
    "**/*.cjs",
    "**/*.mjs",
    "**/*.jsx",
    "**/*.ts",
    "**/*.cts",
    "**/*.mts",
    "**/*.tsx",
    "**/*.d.ts",
  ],
  plugins: {
    "react-hooks": fixupPluginRules(pluginReactHooks),
  },
  rules: {
    ...pluginReactHooks.configs.recommended.rules,
    "react-hooks/rules-of-hooks": "off",
  },
}

export { reactHooksConfig }
