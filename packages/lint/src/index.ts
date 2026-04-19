import type { TSESLint } from "@typescript-eslint/utils"
import pkg from "../package.json" with { type: "json" }
import { propsShorthand } from "./rules/props-shorthand"

const rules = {
  "props-shorthand": propsShorthand,
} satisfies TSESLint.FlatConfig.Plugin["rules"]

const plugin: TSESLint.FlatConfig.Plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  rules,
}

const recommended: TSESLint.FlatConfig.Config = {
  name: "@yamada-ui/lint/recommended",
  plugins: {
    "@yamada-ui/lint": plugin,
  },
  rules: {
    "@yamada-ui/lint/props-shorthand": "warn",
  },
}

plugin.configs = { recommended }

export const configs = { recommended }
export { plugin, propsShorthand, rules }
export default plugin
