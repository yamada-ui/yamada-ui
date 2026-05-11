import { a11y, render, screen } from "#test"
import { GridItem } from "./grid-item"

describe("<GridItem />", () => {
  test("renders component correctly", async () => {
    await a11y(<GridItem>GridItem</GridItem>)
  })

  test("renders default class and tag", () => {
    render(<GridItem>GridItem</GridItem>)

    const gridItem = screen.getByText("GridItem")

    expect(gridItem).toHaveClass("ui-grid-item")
    expect(gridItem).toHaveProperty("tagName", "DIV")
  })

  test("renders all the allowed shorthand style props", () => {
    render(
      <GridItem colSpan={2} rowSpan={2}>
        GridItem
      </GridItem>,
    )

    expect(screen.getByText("GridItem")).toHaveStyle({
      gridColumn: "span 2/span 2",
      gridRow: "span 2/span 2",
    })
  })
})
