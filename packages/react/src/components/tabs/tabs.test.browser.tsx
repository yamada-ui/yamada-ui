import type { FC } from "react"
import { page, render } from "#test/browser"
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
  test("renders the tab panel selected by defaultIndex", async () => {
    await render(<TestComponent defaultIndex={1} />)

    await expect.element(page.getByText(/This is about tab/i)).toBeVisible()
  })

  test("does not activate disabled tabs", async () => {
    const customItems: Tabs.Item[] = [
      {
        panel: "This is home tab",
        tab: "Home",
      },
      {
        disabled: true,
        panel: "This is about tab",
        tab: "About",
      },
      {
        panel: "This is contact tab",
        tab: "Contact",
      },
    ]

    const { user } = await render(<TestComponent items={customItems} />)

    const homeTab = page.getByRole("tab", { name: /Home/i })
    const aboutTab = page.getByRole("tab", { name: /About/i })

    await expect.element(homeTab).toHaveAttribute("aria-selected", "true")
    await expect.element(aboutTab).toBeDisabled()

    await expect(user.click(aboutTab, { timeout: 200 })).rejects.toThrow(
      /Timeout/,
    )

    await expect.element(homeTab).toHaveAttribute("aria-selected", "true")
    await expect.element(aboutTab).toHaveAttribute("aria-selected", "false")
  })

  test("focuses tabs correctly on keyboard", async () => {
    const { user } = await render(<TestComponent />)
    const tab1 = page.getByRole("tab", { name: /Home/i })
    const tab2 = page.getByRole("tab", { name: /About/i })
    const tab3 = page.getByRole("tab", { name: /Contact/i })
    await user.click(tab1)
    await user.keyboard("{arrowright}")
    await expect.element(tab2).toHaveFocus()
    await user.keyboard("{arrowleft}")
    await expect.element(tab1).toHaveFocus()
    await user.keyboard("{arrowleft}")
    await expect.element(tab3).toHaveFocus()
    await user.keyboard("{home}")
    await expect.element(tab1).toHaveFocus()
    await user.keyboard("{end}")
    await expect.element(tab3).toHaveFocus()
  })

  test("focuses tabs correctly on keyboard in vertical orientation", async () => {
    const { user } = await render(<TestComponent orientation="vertical" />)
    const tab1 = page.getByRole("tab", { name: /Home/i })
    const tab2 = page.getByRole("tab", { name: /About/i })
    const tab3 = page.getByRole("tab", { name: /Contact/i })
    await user.click(tab1)
    await user.keyboard("{arrowdown}")
    await expect.element(tab2).toHaveFocus()
    await user.keyboard("{arrowup}")
    await expect.element(tab1).toHaveFocus()
    await user.keyboard("{arrowup}")
    await expect.element(tab3).toHaveFocus()
  })
})
