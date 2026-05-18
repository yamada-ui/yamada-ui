import type { TSESLint } from "@typescript-eslint/utils"
import packageJson from "../package.json"
import { propsShorthand } from "./rules/props-shorthand"

const { name, version } = packageJson

// @docs: https://eslint.org/docs/latest/extend/plugins
// @docs(meta): https://eslint.org/docs/latest/extend/plugins#meta-data-in-plugins
// @docs(rules): https://eslint.org/docs/latest/extend/plugins#rules-in-plugins
const basePlugin = {
  meta: { name, version },
  rules: {
    "props-shorthand": propsShorthand,
  },
} satisfies TSESLint.FlatConfig.Plugin

// @docs(configs): https://eslint.org/docs/latest/extend/plugins#configs-in-plugins
const recommended: TSESLint.FlatConfig.Config = {
  name: `${name}/recommended`,
  plugins: {
    [name]: basePlugin,
  },
  rules: {
    [`${name}/props-shorthand`]: "error",
  },
}

const plugin: TSESLint.FlatConfig.Plugin = {
  ...basePlugin,
  configs: { recommended },
}

export default plugin
