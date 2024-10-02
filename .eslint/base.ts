import type { Linter } from "eslint"
import { sharedFiles } from "./shared"

export const baseConfig: Linter.Config = {
  name: "eslint/base",
  files: sharedFiles,
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-var": "error",
  },
}
