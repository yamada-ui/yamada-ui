export const sharedFiles = ["**/*.ts", "**/*.cts", "**/*.mts", "**/*.tsx"]
export const sharedUnitTestFiles = ["**/*.test.ts", "**/*.test.tsx"]
export const sharedBrowserTestFiles = [
  "**/*.test.browser.ts",
  "**/*.test.browser.tsx",
  "**/*.test.chromium.ts",
  "**/*.test.chromium.tsx",
  "**/*.test.firefox.ts",
  "**/*.test.firefox.tsx",
  "**/*.test.webkit.ts",
  "**/*.test.webkit.tsx",
]
export const sharedTestFiles = [
  ...sharedUnitTestFiles,
  ...sharedBrowserTestFiles,
]
