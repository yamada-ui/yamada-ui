import { Text } from "@yamada-ui/react"
import { a11y, render, screen } from "@yamada-ui/test"
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

  test("should render tabs", async () => {
    render(
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

    const tab = await screen.findByRole("tablist")
    const tabButton = await screen.findByRole("tab", { name: /Home/i })
    const tabPanel = await screen.findByRole("tabpanel")
    const tabPanelText = await screen.findByRole("paragraph")
    expect(tab).toBeInTheDocument()
    expect(tabButton).toBeInTheDocument()
    expect(tabPanel).toBeInTheDocument()
    expect(tabPanelText).toBeInTheDocument()
  })

  test("should render default tab", async () => {
    render(
      <Tabs defaultIndex={1}>
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

    const aboutTabPanel = await screen.findByRole("tabpanel")
    const homeTabPanelText = screen.queryByText(/This is home tab/i)
    expect(aboutTabPanel).toBeInTheDocument()
    expect(homeTabPanelText).toBeNull()
  })

  test("should disable tab", async () => {
    render(
      <Tabs>
        <Tab>Home</Tab>
        <Tab isDisabled>About</Tab>
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

    const aboutTab = await screen.findByRole("tab", { name: /About/i })
    expect(aboutTab).toBeDisabled()
  })

  test("should render custom tablist", async () => {
    render(
      <Tabs>
        <TabList>
          <Tab>Home</Tab>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </TabList>

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

    const tabList = await screen.findByRole("tablist")
    expect(tabList).toBeInTheDocument()
  })

  test("should render custom tablist (with TabPanels)", async () => {
    render(
      <Tabs>
        <Tab>Home</Tab>
        <Tab>About</Tab>
        <Tab>Contact</Tab>

        <TabPanels>
          <TabPanel>
            <Text>This is home tab</Text>
          </TabPanel>
          <TabPanel>
            <Text>This is about tab</Text>
          </TabPanel>
          <TabPanel>
            <Text>This is contact tab</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>,
    )

    const tabList = await screen.findByRole("tablist")
    expect(tabList).toBeInTheDocument()
  })

  test("Move to the previous tab with the left arrow key", async () => {
    const { user } = render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
      </Tabs>,
    )

    const tab1 = await screen.findByRole("tab", { name: /Tab 1/i })
    const tab3 = await screen.findByRole("tab", { name: /Tab 3/i })

    await user.click(tab1)
    expect(tab1).toHaveFocus()

    await user.keyboard("{arrowleft}")
    expect(tab3).toHaveFocus()
  })

  test("Move to the next tab with the right arrow key", async () => {
    const { user } = render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
      </Tabs>,
    )

    const tab1 = await screen.findByRole("tab", { name: /Tab 1/i })
    const tab2 = await screen.findByRole("tab", { name: /Tab 2/i })

    await user.click(tab1)
    await user.keyboard("{arrowright}")
    expect(tab2).toHaveFocus()
  })

  test("Move to the next tab with the down arrow key (vertical orientation)", async () => {
    const { user } = render(
      <Tabs orientation="vertical">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
      </Tabs>,
    )

    const tab1 = await screen.findByRole("tab", { name: /Tab 1/i })
    const tab2 = await screen.findByRole("tab", { name: /Tab 2/i })

    await user.click(tab1)
    await user.keyboard("{arrowdown}")
    expect(tab2).toHaveFocus()
  })

  test("Move to the previous tab with the up arrow key (vertical orientation)", async () => {
    const { user } = render(
      <Tabs orientation="vertical">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
      </Tabs>,
    )

    const tab1 = await screen.findByRole("tab", { name: /Tab 1/i })
    const tab3 = await screen.findByRole("tab", { name: /Tab 3/i })

    await user.click(tab1)
    await user.keyboard("{arrowup}")
    expect(tab3).toHaveFocus()
  })

  test("Move to the first tab with the Home key", async () => {
    const { user } = render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
      </Tabs>,
    )

    const tab1 = await screen.findByRole("tab", { name: /Tab 1/i })

    await user.click(tab1)
    await user.keyboard("{arrowright}")
    await user.keyboard("{arrowright}")
    await user.keyboard("{home}")

    expect(tab1).toHaveFocus()
  })

  test("Move to the last tab with the End key", async () => {
    const { user } = render(
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
      </Tabs>,
    )

    const tab1 = await screen.findByRole("tab", { name: /Tab 1/i })
    const tab3 = await screen.findByRole("tab", { name: /Tab 3/i })

    await user.click(tab1)
    await user.keyboard("{end}")

    expect(tab3).toHaveFocus()
  })
})
