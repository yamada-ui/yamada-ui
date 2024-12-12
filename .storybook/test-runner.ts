import type { TestRunnerConfig } from "@storybook/test-runner"
import { getStoryContext } from "@storybook/test-runner"
import { checkA11y, configureAxe, injectAxe } from "axe-playwright"
import { A11Y_RULES } from "./constant"

const config: TestRunnerConfig = {
  postVisit: async (page, context) => {
    const { parameters } = await getStoryContext(page, context)

    const rules = [...A11Y_RULES, ...(parameters.a11y?.config?.rules ?? [])]

    await configureAxe(page, { rules })

    await checkA11y(
      page,
      "#storybook-root",
      {
        detailedReport: true,
        detailedReportOptions: {
          html: true,
        },
        verbose: false,
      },
      true,
      "v2",
    )
  },
  preVisit: async (page) => {
    await injectAxe(page)
  },
}

export default config
