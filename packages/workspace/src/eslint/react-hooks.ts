import type { ConfigWithExtends } from "@eslint/config-helpers"
import reactHooks from "eslint-plugin-react-hooks"
import { sharedFiles } from "./shared"

export const reactHooksConfig = {
  name: "react-hooks",
  extends: [reactHooks.configs.flat.recommended],
  files: sharedFiles,
  rules: {
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/immutability": "off",
    "react-hooks/preserve-manual-memoization": "off",
    "react-hooks/purity": "off",
    "react-hooks/refs": "off",
    "react-hooks/set-state-in-effect": "off",
    "react-hooks/static-components": "off",
  },
} satisfies ConfigWithExtends
