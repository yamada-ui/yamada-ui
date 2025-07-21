import { a11y, render, screen } from "#test"
import { Timeline } from "."

const items: Timeline.RootProps["items"] = [
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
  test("renders timeline correctly", async () => {
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
    const item = screen.getAllByRole("listitem")[0]
    expect(screen.getByRole("list")).toHaveClass("ui-timeline__root")
    expect(item).toHaveClass("ui-timeline__item")
    expect(item?.children[0]).toHaveClass("ui-timeline__connector")
    expect(item?.children[0]?.children[0]).toHaveClass("ui-timeline__indicator")
    expect(item?.children[1]).toHaveClass("ui-timeline__content")
    expect(screen.getByText("Step 1")).toHaveClass("ui-timeline__title")
    expect(screen.getByText("Step 1 description")).toHaveClass(
      "ui-timeline__description",
    )
  })

  test("renders HTML tag correctly", () => {
    render(<Timeline.Root items={items} />)
    const item = screen.getAllByRole("listitem")[0]
    expect(screen.getByRole("list").tagName).toBe("UL")
    expect(item?.tagName).toBe("LI")
    expect(item?.children[0]?.tagName).toBe("DIV")
    expect(item?.children[0]?.children[0]?.tagName).toBe("DIV")
    expect(item?.children[1]?.tagName).toBe("DIV")
    expect(screen.getByText("Step 1").tagName).toBe("H3")
    expect(screen.getByText("Step 1 description").tagName).toBe("P")
  })
})
