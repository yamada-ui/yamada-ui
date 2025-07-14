import type { TSESLint } from "@typescript-eslint/utils"
import cspellPlugin from "@cspell/eslint-plugin"
import cspellJson from "../../../../cspell.json"
import { sharedFiles } from "./shared"

export const cspellConfig = {
  name: "eslint/cspell",
  files: sharedFiles,
  ignores: cspellJson.ignorePaths,
  plugins: { "@cspell": cspellPlugin },
  rules: {
    "@cspell/spellchecker": [
      "warn",
      {
        configFile: new URL(
          "../../../../cspell.json",
          import.meta.url,
        ).toString(),
        cspell: {},
      },
    ],
  },
} satisfies TSESLint.FlatConfig.Config
