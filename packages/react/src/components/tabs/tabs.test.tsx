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
  test("renders component correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(Tabs.Root.displayName).toBe("TabsRoot")
    expect(Tabs.List.displayName).toBe("TabsList")
    expect(Tabs.Tab.displayName).toBe("TabsTab")
    expect(Tabs.Panel.displayName).toBe("TabsPanel")
  })

  test("sets `className` correctly", async () => {
    await render(<TestComponent />)
    await expect.element(page.getByTestId("tabs")).toHaveClass("ui-tabs__root")
    await expect.element(page.getByRole("tablist")).toHaveClass("ui-tabs__list")
    await expect
      .element(page.getByRole("tab").first())
      .toHaveClass("ui-tabs__tab")
    await expect
      .element(page.getByRole("tabpanel").first())
      .toHaveClass("ui-tabs__panel")
  })

  test("renders HTML tag correctly", async () => {
    await render(<TestComponent />)
    expect(page.getByTestId("tabs").element().tagName).toBe("DIV")
    expect(page.getByRole("tablist").element().tagName).toBe("DIV")
    expect(page.getByRole("tab").first().element().tagName).toBe("BUTTON")
    expect(page.getByRole("tabpanel").first().element().tagName).toBe("DIV")
  })

  test("should render default tab", async () => {
    await render(<TestComponent defaultIndex={1} />)

    const aboutTabPanel = page.getByText(/This is about tab/i)
    await expect.element(aboutTabPanel).toBeVisible()
  })

  test("should disable tab", async () => {
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

    await render(<TestComponent items={customItems} />)

    const aboutTab = page.getByRole("tab", { name: /About/i })
    await expect.element(aboutTab).toBeDisabled()
  })

  test("Move to the previous tab with the left arrow key", async () => {
    const { user } = await render(<TestComponent />)

    const tab1 = page.getByRole("tab", { name: /Home/i })
    const tab3 = page.getByRole("tab", { name: /Contact/i })

    await user.click(tab1)
    await expect.element(tab1).toHaveFocus()

    await user.keyboard("{arrowleft}")
    await expect.element(tab3).toHaveFocus()
  })

  test("Move to the next tab with the right arrow key", async () => {
    const { user } = await render(<TestComponent />)

    const tab1 = page.getByRole("tab", { name: /Home/i })
    const tab2 = page.getByRole("tab", { name: /About/i })

    await user.click(tab1)
    await user.keyboard("{arrowright}")
    await expect.element(tab2).toHaveFocus()
  })

  test("Move to the next tab with the down arrow key (vertical orientation)", async () => {
    const { user } = await render(<TestComponent orientation="vertical" />)

    const tab1 = page.getByRole("tab", { name: /Home/i })
    const tab2 = page.getByRole("tab", { name: /About/i })

    await user.click(tab1)
    await user.keyboard("{arrowdown}")
    await expect.element(tab2).toHaveFocus()
  })

  test("Move to the previous tab with the up arrow key (vertical orientation)", async () => {
    const { user } = await render(<TestComponent orientation="vertical" />)

    const tab1 = page.getByRole("tab", { name: /Home/i })
    const tab3 = page.getByRole("tab", { name: /Contact/i })

    await user.click(tab1)
    await user.keyboard("{arrowup}")
    await expect.element(tab3).toHaveFocus()
  })

  test("Move to the first tab with the Home key", async () => {
    const { user } = await render(<TestComponent />)

    const tab1 = page.getByRole("tab", { name: /Home/i })

    await user.click(tab1)
    await user.keyboard("{arrowright}")
    await user.keyboard("{arrowright}")
    await user.keyboard("{home}")

    await expect.element(tab1).toHaveFocus()
  })

  test("Move to the last tab with the End key", async () => {
    const { user } = await render(<TestComponent />)

    const tab1 = page.getByRole("tab", { name: /Home/i })
    const tab3 = page.getByRole("tab", { name: /Contact/i })

    await user.click(tab1)
    await user.keyboard("{end}")

    await expect.element(tab3).toHaveFocus()
  })
})
