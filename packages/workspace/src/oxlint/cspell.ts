import { fileURLToPath } from "node:url"
import { defineConfig } from "oxlint"
import { sharedFiles } from "./shared.ts"

export const cspellConfig = defineConfig({
  overrides: [
    {
      files: sharedFiles,
      jsPlugins: [
        {
          name: "cspell",
          specifier: import.meta.resolve("@cspell/eslint-plugin"),
        },
      ],
      rules: {
        "cspell/spellchecker": [
          "warn",
          {
            configFile: fileURLToPath(
              new URL("../../../../cspell.json", import.meta.url),
            ),
            cspell: {},
          },
        ],
      },
    },
  ],
})

export const createIgnoreCspellConfig = (...args: string[]) =>
  defineConfig({
    overrides: [
      {
        files: args.flatMap((value) =>
          sharedFiles.map((file) => `${value}/${file}`),
        ),
        jsPlugins: [
          {
            name: "cspell",
            specifier: import.meta.resolve("@cspell/eslint-plugin"),
          },
        ],
        rules: { "cspell/spellchecker": "off" },
      },
    ],
  })
