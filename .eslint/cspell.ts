import type { Linter } from "eslint"
import cspellPlugin from "@cspell/eslint-plugin"
import { sharedFiles } from "./shared"

export const cspellConfig: Linter.Config = {
  name: "eslint/cspell",
  files: sharedFiles,
  plugins: { "@cspell": cspellPlugin },
  rules: {
    "@cspell/spellchecker": [
      "warn",
      {
        configFile: new URL("../cspell.json", import.meta.url).toString(),
        cspell: {},
      },
    ],
  },
}
