import { a11y, render, screen } from "../../../test"
import { Tabs } from "./"

describe("<Tabs />", () => {
  test("Tabs renders correctly", async () => {
    const { container } = render(
      <Tabs.Root>
        <Tabs.Tab>Home</Tabs.Tab>
        <Tabs.Tab>About</Tabs.Tab>
        <Tabs.Tab>Contact</Tabs.Tab>

        <Tabs.TabPanel>
          <p>This is home tab</p>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <p>This is about tab</p>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <p>This is contact tab</p>
        </Tabs.TabPanel>
      </Tabs.Root>,
    )
    await a11y(container)
  })

  test("should render tabs", async () => {
    render(
      <Tabs.Root>
        <Tabs.Tab>Home</Tabs.Tab>
        <Tabs.Tab>About</Tabs.Tab>
        <Tabs.Tab>Contact</Tabs.Tab>

        <Tabs.TabPanel>
          <p>This is home tab</p>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <p>This is about tab</p>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <p>This is contact tab</p>
        </Tabs.TabPanel>
      </Tabs.Root>,
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
      <Tabs.Root defaultIndex={1}>
        <Tabs.Tab>Home</Tabs.Tab>
        <Tabs.Tab>About</Tabs.Tab>
        <Tabs.Tab>Contact</Tabs.Tab>

        <Tabs.TabPanel>
          <p>This is home tab</p>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <p>This is about tab</p>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <p>This is contact tab</p>
        </Tabs.TabPanel>
      </Tabs.Root>,
    )

    const aboutTabPanel = await screen.findByRole("tabpanel")
    const homeTabPanelText = screen.queryByText(/This is home tab/i)
    expect(aboutTabPanel).toBeInTheDocument()
    expect(homeTabPanelText).toBeNull()
  })

  test("should disable tab", async () => {
    render(
      <Tabs.Root>
        <Tabs.Tab>Home</Tabs.Tab>
        <Tabs.Tab disabled>About</Tabs.Tab>
        <Tabs.Tab>Contact</Tabs.Tab>

        <Tabs.TabPanel>
          <p>This is home tab</p>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <p>This is about tab</p>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <p>This is contact tab</p>
        </Tabs.TabPanel>
      </Tabs.Root>,
    )

    const aboutTab = await screen.findByRole("tab", { name: /About/i })
    expect(aboutTab).toBeDisabled()
  })

  test("should render custom tablist", async () => {
    render(
      <Tabs.Root>
        <Tabs.TabList>
          <Tabs.Tab>Home</Tabs.Tab>
          <Tabs.Tab>About</Tabs.Tab>
          <Tabs.Tab>Contact</Tabs.Tab>
        </Tabs.TabList>

        <Tabs.TabPanel>
          <p>This is home tab</p>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <p>This is about tab</p>
        </Tabs.TabPanel>
        <Tabs.TabPanel>
          <p>This is contact tab</p>
        </Tabs.TabPanel>
      </Tabs.Root>,
    )

    const tabList = await screen.findByRole("tablist")
    expect(tabList).toBeInTheDocument()
  })

  test("should render custom tablist (with TabPanels)", async () => {
    render(
      <Tabs.Root>
        <Tabs.Tab>Home</Tabs.Tab>
        <Tabs.Tab>About</Tabs.Tab>
        <Tabs.Tab>Contact</Tabs.Tab>

        <Tabs.TabPanels>
          <Tabs.TabPanel>
            <p>This is home tab</p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <p>This is about tab</p>
          </Tabs.TabPanel>
          <Tabs.TabPanel>
            <p>This is contact tab</p>
          </Tabs.TabPanel>
        </Tabs.TabPanels>
      </Tabs.Root>,
    )

    const tabList = await screen.findByRole("tablist")
    expect(tabList).toBeInTheDocument()
  })

  test("Move to the previous tab with the left arrow key", async () => {
    const { user } = render(
      <Tabs.Root>
        <Tabs.TabList>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Root>,
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
      <Tabs.Root>
        <Tabs.TabList>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Root>,
    )

    const tab1 = await screen.findByRole("tab", { name: /Tab 1/i })
    const tab2 = await screen.findByRole("tab", { name: /Tab 2/i })

    await user.click(tab1)
    await user.keyboard("{arrowright}")
    expect(tab2).toHaveFocus()
  })

  test("Move to the next tab with the down arrow key (vertical orientation)", async () => {
    const { user } = render(
      <Tabs.Root orientation="vertical">
        <Tabs.TabList>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Root>,
    )

    const tab1 = await screen.findByRole("tab", { name: /Tab 1/i })
    const tab2 = await screen.findByRole("tab", { name: /Tab 2/i })

    await user.click(tab1)
    await user.keyboard("{arrowdown}")
    expect(tab2).toHaveFocus()
  })

  test("Move to the previous tab with the up arrow key (vertical orientation)", async () => {
    const { user } = render(
      <Tabs.Root orientation="vertical">
        <Tabs.TabList>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Root>,
    )

    const tab1 = await screen.findByRole("tab", { name: /Tab 1/i })
    const tab3 = await screen.findByRole("tab", { name: /Tab 3/i })

    await user.click(tab1)
    await user.keyboard("{arrowup}")
    expect(tab3).toHaveFocus()
  })

  test("Move to the first tab with the Home key", async () => {
    const { user } = render(
      <Tabs.Root>
        <Tabs.TabList>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Root>,
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
      <Tabs.Root>
        <Tabs.TabList>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Root>,
    )

    const tab1 = await screen.findByRole("tab", { name: /Tab 1/i })
    const tab3 = await screen.findByRole("tab", { name: /Tab 3/i })

    await user.click(tab1)
    await user.keyboard("{end}")

    expect(tab3).toHaveFocus()
  })
})
