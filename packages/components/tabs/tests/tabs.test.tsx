import { Text } from "@yamada-ui/react"
import { a11y, act, fireEvent, render, screen } from "@yamada-ui/test"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "../src"

describe("<Tabs />", () => {
  test("Tabs renders correctly", async () => {
    const { container } = render(
      <Tabs>
        <Tab>Home</Tab>
        <Tab>About</Tab>
        <Tab>Contact</Tab>

        <TabPanel>
          <Text>This is home tab</Text>
        </TabPanel>
        <TabPanel>
          <Text>This is about tab</Text>
        </TabPanel>
        <TabPanel>
          <Text>This is contact tab</Text>
        </TabPanel>
      </Tabs>,
    )
    await a11y(container)
  })

  test("should render tabs", () => {
    render(
      <Tabs data-testid="Tabs">
        <Tab data-testid="Tab">Home</Tab>
        <Tab>About</Tab>
        <Tab>Contact</Tab>

        <TabPanel data-testid="TabPanel">
          <Text data-testid="Text">This is home tab</Text>
        </TabPanel>
        <TabPanel>
          <Text>This is about tab</Text>
        </TabPanel>
        <TabPanel>
          <Text>This is contact tab</Text>
        </TabPanel>
      </Tabs>,
    )
    expect(screen.getByTestId("Tabs")).toBeInTheDocument()
    expect(screen.getByTestId("Tab")).toBeInTheDocument()
    expect(screen.getByTestId("TabPanel")).toBeInTheDocument()
    expect(screen.getByTestId("Text")).toBeInTheDocument()
  })

  test("should render default tab", () => {
    render(
      <Tabs data-testid="Tabs" defaultIndex={1}>
        <Tab>Home</Tab>
        <Tab data-testid="Tab">About</Tab>
        <Tab>Contact</Tab>

        <TabPanel data-testid="TabPanel">
          <Text>This is home tab</Text>
        </TabPanel>
        <TabPanel>
          <Text data-testid="Text">This is about tab</Text>
        </TabPanel>
        <TabPanel>
          <Text>This is contact tab</Text>
        </TabPanel>
      </Tabs>,
    )
    expect(screen.getByTestId("Text")).toBeInTheDocument()
    expect(screen.getByTestId("TabPanel")).toHaveAttribute("hidden")
  })

  test("should disable tab", () => {
    render(
      <Tabs data-testid="Tabs">
        <Tab>Home</Tab>
        <Tab data-testid="Tab" isDisabled>
          About
        </Tab>
        <Tab>Contact</Tab>

        <TabPanel data-testid="TabPanel">
          <Text>This is home tab</Text>
        </TabPanel>
        <TabPanel>
          <Text data-testid="Text">This is about tab</Text>
        </TabPanel>
        <TabPanel>
          <Text>This is contact tab</Text>
        </TabPanel>
      </Tabs>,
    )
    expect(screen.getByTestId("Tab")).toBeDisabled()
  })

  test("should render custom tablist", () => {
    render(
      <Tabs data-testid="Tabs">
        <TabList data-testid="TabList">
          <Tab data-testid="Tab">Home</Tab>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </TabList>

        <TabPanel data-testid="TabPanel">
          <Text>This is home tab</Text>
        </TabPanel>
        <TabPanel>
          <Text data-testid="Text">This is about tab</Text>
        </TabPanel>
        <TabPanel>
          <Text>This is contact tab</Text>
        </TabPanel>
      </Tabs>,
    )
    expect(screen.getByTestId("TabList")).toBeInTheDocument()
  })

  test("should render custom tablist (with TabPanels)", () => {
    render(
      <Tabs data-testid="Tabs">
        <Tab data-testid="Tab">Home</Tab>
        <Tab>About</Tab>
        <Tab>Contact</Tab>

        <TabPanels data-testid="TabPanels">
          <TabPanel data-testid="TabPanel">
            <Text>This is home tab</Text>
          </TabPanel>
          <TabPanel>
            <Text data-testid="Text">This is about tab</Text>
          </TabPanel>
          <TabPanel>
            <Text>This is contact tab</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>,
    )
    expect(screen.getByTestId("TabPanels")).toBeInTheDocument()
  })

  test("Move to the previous tab with the left arrow key", async () => {
    render(
      <Tabs>
        <TabList>
          <Tab data-testid="tab1">Tab 1</Tab>
          <Tab data-testid="tab2">Tab 2</Tab>
          <Tab data-testid="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>,
    )

    const tab1 = screen.getByTestId("tab1")
    const tab3 = screen.getByTestId("tab3")
    await act(async () => {
      fireEvent.keyDown(tab1, { key: "ArrowLeft" })
    })
    expect(document.activeElement).toStrictEqual(tab3)
  })

  test("Move to the next tab with the right arrow key", async () => {
    render(
      <Tabs>
        <TabList>
          <Tab data-testid="tab1">Tab 1</Tab>
          <Tab data-testid="tab2">Tab 2</Tab>
          <Tab data-testid="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>,
    )

    const tab1 = screen.getByTestId("tab1")
    const tab2 = screen.getByTestId("tab2")
    await act(async () => {
      fireEvent.keyDown(tab1, { key: "ArrowRight" })
    })
    expect(document.activeElement).toStrictEqual(tab2)
  })

  test("Move to the next tab with the down arrow key (vertical orientation)", async () => {
    render(
      <Tabs orientation="vertical">
        <TabList>
          <Tab data-testid="tab1">Tab 1</Tab>
          <Tab data-testid="tab2">Tab 2</Tab>
          <Tab data-testid="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>,
    )

    const tab1 = screen.getByTestId("tab1")
    const tab2 = screen.getByTestId("tab2")
    await act(async () => {
      fireEvent.keyDown(tab1, { key: "ArrowDown" })
    })
    expect(document.activeElement).toStrictEqual(tab2)
  })

  test("Move to the previous tab with the up arrow key (vertical orientation)", async () => {
    render(
      <Tabs orientation="vertical">
        <TabList>
          <Tab data-testid="tab1">Tab 1</Tab>
          <Tab data-testid="tab2">Tab 2</Tab>
          <Tab data-testid="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>,
    )

    const tab1 = screen.getByTestId("tab1")
    const tab3 = screen.getByTestId("tab3")
    await act(async () => {
      fireEvent.keyDown(tab1, { key: "ArrowUp" })
    })
    expect(document.activeElement).toStrictEqual(tab3)
  })

  test("Move to the first tab with the Home key", async () => {
    render(
      <Tabs>
        <TabList>
          <Tab data-testid="tab1">Tab 1</Tab>
          <Tab data-testid="tab2">Tab 2</Tab>
          <Tab data-testid="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>,
    )

    const tab1 = screen.getByTestId("tab1")
    const tab3 = screen.getByTestId("tab3")
    await act(async () => {
      tab3.focus()
      fireEvent.keyDown(tab3, { key: "Home" })
    })
    expect(document.activeElement).toStrictEqual(tab1)
  })

  test("Move to the last tab with the End key", async () => {
    render(
      <Tabs>
        <TabList>
          <Tab data-testid="tab1">Tab 1</Tab>
          <Tab data-testid="tab2">Tab 2</Tab>
          <Tab data-testid="tab3">Tab 3</Tab>
        </TabList>
      </Tabs>,
    )

    const tab1 = screen.getByTestId("tab1")
    const tab3 = screen.getByTestId("tab3")
    await act(async () => {
      tab1.focus()
      fireEvent.keyDown(tab1, { key: "End" })
    })
    expect(document.activeElement).toStrictEqual(tab3)
  })
})
