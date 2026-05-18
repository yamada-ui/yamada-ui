import { a11y } from "#test"
import { Tabs } from "./"

const items: Tabs.Item[] = [
  { panel: "This is home tab", tab: "Home" },
  { panel: "This is about tab", tab: "About" },
  { panel: "This is contact tab", tab: "Contact" },
]

describe("<Tabs />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <Tabs.Root items={items}>
        <Tabs.List />
        <Tabs.Panels />
      </Tabs.Root>,
    )
  })
})
