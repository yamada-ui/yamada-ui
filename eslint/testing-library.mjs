import testingLibrary from "eslint-plugin-testing-library"

export const testingLibraryConfig = {
  plugins: {
    "testing-library": testingLibrary,
  },
  rules: {
    "testing-library/prefer-query-by-disappearance": "error",
    "testing-library/no-dom-import": "error",
    "testing-library/no-debugging-utils": "error",
    "testing-library/no-global-regexp-flag-in-query": "error",
    "testing-library/no-promise-in-fire-event": "error",
    "testing-library/prefer-find-by": "error",
    "testing-library/no-await-sync-queries": "error",
  },
}
