import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['packages/**/*.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePathIgnorePatterns: ['<rootDir>/examples'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': ['@swc-node/jest', { module: 'commonjs' }],
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './scripts/setup-test.ts',
  ],
  globals: {},
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}

export default config
