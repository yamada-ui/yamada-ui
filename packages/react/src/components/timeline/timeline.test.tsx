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
