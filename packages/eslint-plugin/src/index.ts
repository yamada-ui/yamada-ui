import type { ESLint, Linter } from "eslint"
import packageJson from "../package.json"
import { propsShorthand } from "./rules/props-shorthand"
import { noHardcodedToken } from "./rules/no-hardcoded-token"

const { name, version } = packageJson

const basePlugin = {
  meta: { name, version },
  rules: {
    "props-shorthand": propsShorthand,
    "no-hardcoded-token": noHardcodedToken,
  },
} satisfies ESLint.Plugin

const recommended: Linter.Config = {
  name: `${name}/recommended`,
  plugins: {
    [name]: basePlugin,
  },
  rules: {
    [`${name}/props-shorthand`]: "error",
    [`${name}/no-hardcoded-token`]: "error",
  },
}

const plugin: ESLint.Plugin = {
  ...basePlugin,
  configs: { recommended },
}

export default plugin
