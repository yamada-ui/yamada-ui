import type { ComponentType } from "react"
import { faker } from "@faker-js/faker"
import { composeStories } from "@storybook/react-vite"
import { expect, test, vi } from "vitest"
import { render } from "vitest-browser-react"
import { page } from "vitest/browser"
import { UIProvider } from "../src"

const modules = import.meta.glob<Parameters<typeof composeStories>[0]>(
  "../src/components/**/*.stories.tsx",
  { eager: true },
)

const style = document.createElement("style")

style.textContent =
  "*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}"
document.head.append(style)

for (const [path, module] of Object.entries(modules)) {
  const name = path.split("/").pop()?.replace(".stories.tsx", "")
  const { Basic } = composeStories(module) as {
    [name: string]: ComponentType
  }

  if (!Basic) continue

  test(name ?? path, async () => {
    faker.seed(0)
    vi.setSystemTime(new Date("2020-01-01T00:00:00.000Z"))

    await render(
      <UIProvider>
        <div
          style={{ display: "inline-block", padding: 16 }}
          data-testid="story"
        >
          <Basic />
        </div>
      </UIProvider>,
    )

    await Promise.all(
      Array.from(document.images, (image) =>
        image.decode().catch(() => undefined),
      ),
    )

    await expect
      .element(page.getByTestId("story"))
      .toMatchScreenshot(`${name}-Basic`)
  })
}
