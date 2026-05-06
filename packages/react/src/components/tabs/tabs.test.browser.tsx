import type { FC } from "react"
import { a11y, page, render } from "#test/browser"
import { Tabs } from "./"

const items: Tabs.Item[] = [
  { panel: "This is home tab", tab: "Home" },
  { panel: "This is about tab", tab: "About" },
  { panel: "This is contact tab", tab: "Contact" },
]

interface TestComponentProps extends Tabs.RootProps {}

const TestComponent: FC<TestComponentProps> = (props) => {
  return (
    <Tabs.Root data-testid="tabs" items={items} {...props}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>
  )
}

describe("<Tabs />", () => {
  test("passes a11y checks", async () => {
    await a11y(<TestComponent />)
  })

  test("moves focus to the previous tab with the up arrow key in vertical orientation", async () => {
    const { user } = await render(<TestComponent orientation="vertical" />)

    const tab1 = page.getByRole("tab", { name: /Home/i })
    const tab3 = page.getByRole("tab", { name: /Contact/i })

    await user.click(tab1)
    await user.keyboard("{arrowup}")
    await expect.element(tab3).toHaveFocus()
  })

  test("moves focus to the first tab with the Home key", async () => {
    const { user } = await render(<TestComponent />)

    const tab1 = page.getByRole("tab", { name: /Home/i })

    await user.click(tab1)
    await user.keyboard("{arrowright}")
    await user.keyboard("{arrowright}")
    await user.keyboard("{home}")

    await expect.element(tab1).toHaveFocus()
  })

  test("moves focus to the last tab with the End key", async () => {
    const { user } = await render(<TestComponent />)

    const tab1 = page.getByRole("tab", { name: /Home/i })
    const tab3 = page.getByRole("tab", { name: /Contact/i })

    await user.click(tab1)
    await user.keyboard("{end}")

    await expect.element(tab3).toHaveFocus()
  })
})
