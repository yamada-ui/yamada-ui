import { fileURLToPath } from "node:url"
import { defineConfig } from "oxlint"
import { sharedFiles, sharedTestFiles } from "./shared.ts"

export const reactConfig = defineConfig({
  overrides: [
    {
      files: sharedFiles,
      jsPlugins: [
        {
          name: "custom-react",
          specifier: fileURLToPath(
            new URL("./plugins/use-client-newline.ts", import.meta.url),
          ),
        },
      ],
      plugins: ["react", "jsx-a11y"],
      rules: {
        "react/forward-ref-uses-ref": "error",
        "react/jsx-boolean-value": "error",
        "react/jsx-curly-brace-presence": "error",
        "react/jsx-fragments": "error",
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-pascal-case": "error",
        "react/self-closing-comp": "error",

        "react-hooks/exhaustive-deps": "error",

        "jsx-a11y/no-autofocus": "off",
        "jsx-a11y/prefer-tag-over-role": "off",

        "custom-react/use-client-newline": "error",
      },
    },
    {
      files: sharedTestFiles,
      plugins: ["react"],
      rules: {
        "react/no-this-in-sfc": "off",
      },
    },
  ],
})
