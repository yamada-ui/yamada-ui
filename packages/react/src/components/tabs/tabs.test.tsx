import type { FC } from "react"
import { a11y, render, screen } from "@/test"
import { Tabs } from "./"

const items: Required<Tabs.RootProps>["items"] = [
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
  test("Tabs renders correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(Tabs.Root.displayName).toBe("TabsRoot")
    expect(Tabs.List.displayName).toBe("TabsList")
    expect(Tabs.Tab.displayName).toBe("TabsTab")
    expect(Tabs.Panel.displayName).toBe("TabsPanel")
  })

  test("sets `className` correctly", () => {
    render(<TestComponent />)
    expect(screen.getByTestId("tabs")).toHaveClass("ui-tabs__root")
    expect(screen.getByRole("tablist")).toHaveClass("ui-tabs__list")
    expect(screen.getAllByRole("tab")[0]).toHaveClass("ui-tabs__tab")
    expect(screen.getAllByRole("tabpanel")[0]).toHaveClass("ui-tabs__panel")
  })

  test("renders HTML tag correctly", () => {
    render(<TestComponent />)
    expect(screen.getByTestId("tabs").tagName).toBe("DIV")
    expect(screen.getByRole("tablist").tagName).toBe("DIV")
    expect(screen.getAllByRole("tab")[0]?.tagName).toBe("BUTTON")
    expect(screen.getAllByRole("tabpanel")[0]?.tagName).toBe("DIV")
  })

  test("should render default tab", async () => {
    render(<TestComponent defaultIndex={1} />)

    const aboutTabPanel = await screen.findByText(/This is about tab/i)
    expect(aboutTabPanel).toBeInTheDocument()
  })

  test("should disable tab", async () => {
    const items: Required<Tabs.RootProps>["items"] = [
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

    render(<TestComponent items={items} />)

    const aboutTab = await screen.findByRole("tab", { name: /About/i })
    expect(aboutTab).toBeDisabled()
  })

  test("Move to the previous tab with the left arrow key", async () => {
    const { user } = render(<TestComponent />)

    const tab1 = await screen.findByRole("tab", { name: /Home/i })
    const tab3 = await screen.findByRole("tab", { name: /Contact/i })

    await user.click(tab1)
    expect(tab1).toHaveFocus()

    await user.keyboard("{arrowleft}")
    expect(tab3).toHaveFocus()
  })

  test("Move to the next tab with the right arrow key", async () => {
    const { user } = render(<TestComponent />)

    const tab1 = await screen.findByRole("tab", { name: /Home/i })
    const tab2 = await screen.findByRole("tab", { name: /About/i })

    await user.click(tab1)
    await user.keyboard("{arrowright}")
    expect(tab2).toHaveFocus()
  })

  test("Move to the next tab with the down arrow key (vertical orientation)", async () => {
    const { user } = render(<TestComponent orientation="vertical" />)

    const tab1 = await screen.findByRole("tab", { name: /Home/i })
    const tab2 = await screen.findByRole("tab", { name: /About/i })

    await user.click(tab1)
    await user.keyboard("{arrowdown}")
    expect(tab2).toHaveFocus()
  })

  test("Move to the previous tab with the up arrow key (vertical orientation)", async () => {
    const { user } = render(<TestComponent orientation="vertical" />)

    const tab1 = await screen.findByRole("tab", { name: /Home/i })
    const tab3 = await screen.findByRole("tab", { name: /Contact/i })

    await user.click(tab1)
    await user.keyboard("{arrowup}")
    expect(tab3).toHaveFocus()
  })

  test("Move to the first tab with the Home key", async () => {
    const { user } = render(<TestComponent />)

    const tab1 = await screen.findByRole("tab", { name: /Home/i })

    await user.click(tab1)
    await user.keyboard("{arrowright}")
    await user.keyboard("{arrowright}")
    await user.keyboard("{home}")

    expect(tab1).toHaveFocus()
  })

  test("Move to the last tab with the End key", async () => {
    const { user } = render(<TestComponent />)

    const tab1 = await screen.findByRole("tab", { name: /Home/i })
    const tab3 = await screen.findByRole("tab", { name: /Contact/i })

    await user.click(tab1)
    await user.keyboard("{end}")

    expect(tab3).toHaveFocus()
  })
})
