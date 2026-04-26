import { defineConfig } from "oxlint"
import { sharedFiles, sharedTestFiles } from "./shared.ts"

export const typescriptConfig = defineConfig({
  overrides: [
    {
      files: sharedFiles,
      plugins: ["typescript"],
      rules: {
        "typescript/await-thenable": "error",
        "typescript/ban-ts-comment": "off",
        "typescript/consistent-indexed-object-style": [
          "error",
          "index-signature",
        ],
        "typescript/consistent-type-exports": "error",
        "typescript/consistent-type-imports": "error",
        "typescript/dot-notation": "warn",
        "typescript/no-empty-object-type": "off",
        "typescript/no-explicit-any": "off",
        "typescript/no-extraneous-class": "error",
        "typescript/no-floating-promises": "off",
        "typescript/no-for-in-array": "error",
        "typescript/no-implied-eval": "off",
        "typescript/no-import-type-side-effects": "error",
        "typescript/no-misused-spread": "off",
        "typescript/no-non-null-asserted-nullish-coalescing": "error",
        "typescript/no-redundant-type-constituents": "off",
        "typescript/no-unnecessary-boolean-literal-compare": "warn",
        "typescript/no-unnecessary-condition": "warn",
        "typescript/no-unnecessary-template-expression": "warn",
        "typescript/no-unnecessary-type-arguments": "off",
        "typescript/no-unnecessary-type-assertion": "error",
        "typescript/no-unnecessary-type-constraint": "warn",
        "typescript/no-unsafe-function-type": "off",
        "typescript/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            varsIgnorePattern: "^_",
          },
        ],
        "typescript/prefer-find": "warn",
        "typescript/prefer-function-type": "off",
        "typescript/prefer-includes": "warn",
        "typescript/prefer-literal-enum-member": "warn",
        "typescript/prefer-namespace-keyword": "warn",
        "typescript/prefer-optional-chain": "error",
        "typescript/prefer-reduce-type-parameter": "warn",
        "typescript/prefer-string-starts-ends-with": "warn",
        "typescript/require-await": "error",
      },
    },
    {
      files: sharedTestFiles,
      plugins: ["typescript"],
      rules: {
        "typescript/unbound-method": "off",
      },
    },
  ],
})
