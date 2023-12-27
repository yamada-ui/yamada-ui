import { Text } from "@yamada-ui/react"
import { a11y, render, screen } from "@yamada-ui/test"
import { Tabs, Tab, TabPanel, TabList, TabPanels } from "../src"

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

  test("should render custom tablist", () => {
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
})
