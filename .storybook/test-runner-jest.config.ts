import { getJestConfig } from "@storybook/test-runner"

type TestRunnerJestConfig = ReturnType<typeof getJestConfig>

const config: TestRunnerJestConfig = {
  ...getJestConfig(),
  maxWorkers: 8,
  testMatch: ["**/components/**/*.stories.@(js|jsx|ts|tsx)"],
  testPathIgnorePatterns: ["components/motion"],
  verbose: false,
}

export default config
