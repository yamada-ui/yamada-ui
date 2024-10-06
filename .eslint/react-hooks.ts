import type { Linter } from "eslint"
import { fixupPluginRules } from "@eslint/compat"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import { sharedFiles } from "./shared"

export const reactHooksConfig: Linter.Config = {
  name: "eslint/react-hooks",
  files: sharedFiles,
  plugins: { "react-hooks": fixupPluginRules(reactHooksPlugin) },
  rules: {
    ...reactHooksPlugin.configs.recommended.rules,

    "react-hooks/exhaustive-deps": "error",
  },
}
