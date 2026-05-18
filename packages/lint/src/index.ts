import type { TSESLint } from "@typescript-eslint/utils"
import packageJson from "../package.json"
import { propsShorthand } from "./rules/props-shorthand"

const { name, version } = packageJson

const basePlugin = {
  meta: { name, version },
  rules: {
    "props-shorthand": propsShorthand,
  },
} satisfies TSESLint.FlatConfig.Plugin

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
