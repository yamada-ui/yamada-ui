import { getJestConfig } from "@storybook/test-runner"

type TestRunnerJestConfig = ReturnType<typeof getJestConfig>

const config: TestRunnerJestConfig = {
  ...getJestConfig(),
  verbose: false,
  maxWorkers: 8,
  testMatch: ["**/components/**/*.stories.@(js|jsx|ts|tsx)"],
  testPathIgnorePatterns: ["components/motion"],
}

export default config
