import type { TestRunnerConfig } from "@storybook/test-runner"
import { getStoryContext } from "@storybook/test-runner"
import { checkA11y, configureAxe, injectAxe } from "axe-playwright"

const config: TestRunnerConfig = {
  postVisit: async (page, context) => {
    const { parameters } = await getStoryContext(page, context)

    const rules = [
      { id: "color-contrast", enabled: false },
      ...(parameters.a11y?.config?.rules ?? []),
    ]

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
