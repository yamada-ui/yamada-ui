import type { ConfigWithExtends } from "@eslint/config-helpers"
import jsxA11y from "eslint-plugin-jsx-a11y"
import { sharedFiles } from "./shared"

export const jsxA11yConfig = {
  name: "jsx-a11y",
  extends: [jsxA11y.flatConfigs.recommended],
  files: sharedFiles,
  rules: {
    "jsx-a11y/no-autofocus": "off",
  },
} satisfies ConfigWithExtends
