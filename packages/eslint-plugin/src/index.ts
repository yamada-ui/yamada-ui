import type { ESLint, Linter } from "eslint"
import packageJson from "../package.json"
import { propsShorthand } from "./rules/props-shorthand"

const { name, version } = packageJson

const basePlugin = {
  meta: { name, version },
  rules: {
    "props-shorthand": propsShorthand,
  },
} satisfies ESLint.Plugin

const recommended: Linter.Config = {
  name: `${name}/recommended`,
  plugins: {
    [name]: basePlugin,
  },
  rules: {
    [`${name}/props-shorthand`]: "error",
  },
}

const plugin: ESLint.Plugin = {
  ...basePlugin,
  configs: { recommended },
}

export default plugin
