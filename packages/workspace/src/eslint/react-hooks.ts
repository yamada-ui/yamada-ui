import type { TSESLint } from "@typescript-eslint/utils"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import { sharedFiles } from "./shared"

export const reactHooksConfig = {
  name: "eslint/react-hooks",
  files: sharedFiles,
  plugins: { "react-hooks": reactHooksPlugin },
  rules: {
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
  },
} satisfies TSESLint.FlatConfig.Config
