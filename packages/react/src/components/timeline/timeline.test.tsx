import { a11y, render, screen } from "#test"
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

  test("sets `className` correctly", () => {
    render(<Timeline.Root items={items} />)
    const list = screen.getByRole("list")
    const item = screen.getAllByRole("listitem")[0]
    const connector = item?.children[0]
    const indicator = connector?.children[0]
    const content = item?.children[1]

    expect(list).toHaveClass("ui-timeline__root")
    expect(item).toHaveClass("ui-timeline__item")
    expect(connector).toHaveClass("ui-timeline__connector")
    expect(indicator).toHaveClass("ui-timeline__indicator")
    expect(content).toHaveClass("ui-timeline__content")
    expect(screen.getByRole("heading", { name: "Step 1" })).toHaveClass(
      "ui-timeline__title",
    )
    expect(screen.getByText("Step 1 description")).toHaveClass(
      "ui-timeline__description",
    )
  })

  test("renders HTML tag correctly", () => {
    render(<Timeline.Root items={items} />)
    const list = screen.getByRole("list")
    const item = screen.getAllByRole("listitem")[0]
    const connector = item?.children[0]
    const indicator = connector?.children[0]
    const content = item?.children[1]

    expect(list.tagName).toBe("UL")
    expect(item?.tagName).toBe("LI")
    expect(connector?.tagName).toBe("DIV")
    expect(indicator?.tagName).toBe("DIV")
    expect(content?.tagName).toBe("DIV")
    expect(screen.getByRole("heading", { name: "Step 1" }).tagName).toBe("H3")
    expect(screen.getByText("Step 1 description").tagName).toBe("P")
  })

  test("renders numbers in indicators with `number` variant", () => {
    render(<Timeline.Root variant="number" items={items} />)

    for (const [index, item] of screen.getAllByRole("listitem").entries()) {
      const indicator = item.children[0]?.children[0]
      expect(indicator).toHaveTextContent(String(index + 1))
    }
  })

  test("does not render numbers in indicators without `number` variant", () => {
    render(<Timeline.Root items={items} />)

    for (const item of screen.getAllByRole("listitem")) {
      const indicator = item.children[0]?.children[0]
      expect(indicator).toBeDefined()
      expect(indicator).not.toHaveTextContent(/\d/)
    }
  })

  test("custom indicator takes precedence over number variant", () => {
    const itemsWithIndicator: Timeline.Item[] = [
      { indicator: "A", title: "Step 1" },
      { title: "Step 2" },
    ]

    render(<Timeline.Root variant="number" items={itemsWithIndicator} />)
    const listitems = screen.getAllByRole("listitem")
    const firstIndicator = listitems[0]?.children[0]?.children[0]
    const secondIndicator = listitems[1]?.children[0]?.children[0]

    expect(firstIndicator).toHaveTextContent("A")
    expect(secondIndicator).toHaveTextContent("2")
  })
})
