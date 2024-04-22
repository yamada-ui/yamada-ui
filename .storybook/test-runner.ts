import { getStoryContext, type TestRunnerConfig } from "@storybook/test-runner"
import { injectAxe, checkA11y, configureAxe } from "axe-playwright"
import { A11Y_RULES } from "./constant"

const config: TestRunnerConfig = {
  preVisit: async (page) => {
    await injectAxe(page)
  },
  postVisit: async (page, context) => {
    const { parameters } = await getStoryContext(page, context)

    const rules = [...A11Y_RULES, ...parameters?.a11y?.config?.rules]

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
}

export default config
