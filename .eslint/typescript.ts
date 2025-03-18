import type { TSESLint } from "@typescript-eslint/utils"
import { configs, plugin } from "typescript-eslint"
import { sharedFiles } from "./shared"

const disabledRules = configs.recommended[1]?.rules
const stylisticRules = configs.stylistic[2]?.rules

export const typescriptConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/typescript",
  files: sharedFiles,
  plugins: {
    "@typescript-eslint": plugin,
  },
  rules: {
    ...disabledRules,
    ...stylisticRules,

    "@typescript-eslint/prefer-function-type": "off",
    "no-array-constructor": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-useless-constructor": "off",
    "prefer-const": "off",

    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "index-signature",
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-wrapper-object-types": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/triple-slash-reference": "error",

    "@typescript-eslint/dot-notation": "warn",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-template-expression": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/prefer-find": "warn",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "warn",
    "@typescript-eslint/prefer-namespace-keyword": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/promise-function-async": "warn",
  },
}
