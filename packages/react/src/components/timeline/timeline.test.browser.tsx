import { a11y, page, render } from "#test/browser"
import { Timeline } from "."

const items: Timeline.Item[] = [
  {
    description: "Step 1 description",
    title: "Step 1",
  },
  {
    description: "Step 2 description",
    title: "Step 2",
  },
  {
    description: "Step 3 description",
    title: "Step 3",
  },
]

describe("<Timeline />", () => {
  test("renders component correctly", async () => {
    await a11y(<Timeline.Root items={items} />)
  })

  test("sets `displayName` correctly", () => {
    expect(Timeline.Root.displayName).toBe("TimelineRoot")
    expect(Timeline.Item.displayName).toBe("TimelineItem")
    expect(Timeline.Content.displayName).toBe("TimelineContent")
    expect(Timeline.Title.displayName).toBe("TimelineTitle")
    expect(Timeline.Description.displayName).toBe("TimelineDescription")
    expect(Timeline.Connector.displayName).toBe("TimelineConnector")
    expect(Timeline.Indicator.displayName).toBe("TimelineIndicator")
  })

  test("sets `className` correctly", async () => {
    await render(<Timeline.Root items={items} />)
    const item = page.getByRole("listitem").first()
    await expect
      .element(page.getByRole("list"))
      .toHaveClass("ui-timeline__root")
    await expect.element(item).toHaveClass("ui-timeline__item")
    const itemEl = item.element()
    expect(itemEl.children[0]).toHaveClass("ui-timeline__connector")
    expect(itemEl.children[0]?.children[0]).toHaveClass(
      "ui-timeline__indicator",
    )
    expect(itemEl.children[1]).toHaveClass("ui-timeline__content")
    await expect
      .element(page.getByRole("heading", { name: "Step 1" }))
      .toHaveClass("ui-timeline__title")
    await expect
      .element(page.getByText("Step 1 description"))
      .toHaveClass("ui-timeline__description")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Timeline.Root items={items} />)
    const item = page.getByRole("listitem").first()
    const itemEl = item.element()
    expect(page.getByRole("list").element().tagName).toBe("UL")
    expect(itemEl.tagName).toBe("LI")
    expect(itemEl.children[0]?.tagName).toBe("DIV")
    expect(itemEl.children[0]?.children[0]?.tagName).toBe("DIV")
    expect(itemEl.children[1]?.tagName).toBe("DIV")
    expect(
      page.getByRole("heading", { name: "Step 1" }).element().tagName,
    ).toBe("H3")
    expect(page.getByText("Step 1 description").element().tagName).toBe("P")
  })

  test("renders numbers in indicators with `number` variant", async () => {
    await render(<Timeline.Root variant="number" items={items} />)
    for (const [index] of items.entries()) {
      const itemEl = page.getByRole("listitem").nth(index).element()
      const indicator = itemEl.children[0]?.children[0]
      expect(indicator).toHaveTextContent(String(index + 1))
    }
  })

  test("does not render numbers in indicators without `number` variant", async () => {
    await render(<Timeline.Root items={items} />)
    for (const [index] of items.entries()) {
      const itemEl = page.getByRole("listitem").nth(index).element()
      const indicator = itemEl.children[0]?.children[0]
      expect(indicator).toBeDefined()
      expect(indicator).not.toHaveTextContent(/\d/)
    }
  })

  test("custom indicator takes precedence over number variant", async () => {
    const itemsWithIndicator: Timeline.Item[] = [
      { indicator: "A", title: "Step 1" },
      { title: "Step 2" },
    ]

    await render(<Timeline.Root variant="number" items={itemsWithIndicator} />)
    const firstItem = page.getByRole("listitem").first().element()
    const secondItem = page.getByRole("listitem").nth(1).element()
    const firstIndicator = firstItem.children[0]?.children[0]
    const secondIndicator = secondItem.children[0]?.children[0]

    expect(firstIndicator).toHaveTextContent("A")
    expect(secondIndicator).toHaveTextContent("2")
  })
})
