import type { Config } from "jest"

const config: Config = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["packages/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: ["dist", "theme", "tests", "test"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePathIgnorePatterns: [
    "<rootDir>/examples",
    "<rootDir>/stories",
    "<rootDir>/scripts",
  ],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)?$": ["@swc-node/jest", { module: "commonjs" }],
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  setupFilesAfterEnv: ["@testing-library/jest-dom", "./scripts/setup-test.ts"],
  globals: {},
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
}

export default config
