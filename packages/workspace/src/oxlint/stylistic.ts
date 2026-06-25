import { defineConfig } from "oxlint"
import { sharedFiles } from "./shared.ts"

export const stylisticConfig = defineConfig({
  overrides: [
    {
      files: sharedFiles,
      jsPlugins: [import.meta.resolve("@stylistic/eslint-plugin")],
      rules: {
        "@stylistic/line-comment-position": ["error", { position: "above" }],
        "@stylistic/no-floating-decimal": "error",
        "@stylistic/padding-line-between-statements": [
          "warn",
          {
            blankLine: "always",
            next: [
              "return",
              "break",
              "expression",
              "import",
              "export",
              "block",
              "block-like",
              "class",
              "interface",
              "type",
              "throw",
              "const",
              "let",
              "var",
            ],
            prev: "*",
          },
          {
            blankLine: "always",
            next: "*",
            prev: [
              "directive",
              "expression",
              "import",
              "export",
              "block",
              "block-like",
              "class",
              "interface",
              "type",
              "throw",
              "const",
              "let",
              "var",
            ],
          },
          ...["directive", "const", "let", "var", "function-overload"].map(
            (statement) => ({
              blankLine: "never",
              next: statement,
              prev: statement,
            }),
          ),
          ...["import", "export", "expression", "interface", "type"].map(
            (statement) => ({
              blankLine: "any",
              next: statement,
              prev: statement,
            }),
          ),
        ],
      },
    },
  ],
})
