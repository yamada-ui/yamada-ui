import type { ConfigWithExtends } from "@eslint/config-helpers"
import tseslint from "typescript-eslint"
import { sharedFiles } from "./shared"

export const typescriptConfig = {
  name: "typescript",
  extends: [...tseslint.configs.recommended, ...tseslint.configs.stylistic],
  files: sharedFiles,
  rules: {
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "index-signature",
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/dot-notation": "warn",
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-template-expression": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/no-unsafe-function-type": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/prefer-find": "warn",
    "@typescript-eslint/prefer-function-type": "off",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "warn",
    "@typescript-eslint/prefer-namespace-keyword": "warn",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/require-await": "error",
    "no-useless-constructor": "off",
    "prefer-const": "off",
  },
} satisfies ConfigWithExtends
