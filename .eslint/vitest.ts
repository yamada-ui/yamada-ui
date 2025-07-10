import type { TSESLint } from "@typescript-eslint/utils"
import { fixupPluginRules } from "@eslint/compat"
import vitestPlugin from "@vitest/eslint-plugin"
import { sharedTestFiles } from "./shared"

export const vitestConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/vitest",
  files: sharedTestFiles,
  plugins: { vitest: fixupPluginRules(vitestPlugin) },
  rules: {
    ...vitestPlugin.configs.recommended.rules,
    "vitest/expect-expect": "off",
    "vitest/no-commented-out-tests": "off",

    "vitest/consistent-test-it": ["error", { fn: "test" }],
    "vitest/no-alias-methods": "error",
    "vitest/no-conditional-expect": "error",
    "vitest/no-conditional-in-test": "error",
    "vitest/no-conditional-tests": "error",
    "vitest/no-duplicate-hooks": "error",
    "vitest/no-focused-tests": "error",
    "vitest/no-import-node-test": "error",
    "vitest/no-standalone-expect": "error",
    "vitest/no-test-return-statement": "error",
    "vitest/prefer-called-with": "error",
    "vitest/prefer-comparison-matcher": "error",
    "vitest/prefer-each": "error",
    "vitest/prefer-expect-resolves": "error",
    "vitest/prefer-hooks-in-order": "error",
    "vitest/prefer-hooks-on-top": "error",
    "vitest/prefer-mock-promise-shorthand": "error",
    "vitest/prefer-spy-on": "error",
    "vitest/prefer-strict-equal": "error",
    "vitest/prefer-to-be": "error",
    "vitest/prefer-to-be-falsy": "error",
    "vitest/prefer-to-be-object": "error",
    "vitest/prefer-to-be-truthy": "error",
    "vitest/prefer-to-contain": "error",
    "vitest/prefer-to-have-length": "error",
    "vitest/prefer-todo": "error",
    "vitest/require-hook": "error",
    "vitest/require-to-throw-message": "error",
    "vitest/require-top-level-describe": "error",
    "vitest/valid-expect": ["error", { alwaysAwait: true }],
  },
}
