import { a11y, page, render } from "#test/browser"
import { GridItem } from "./grid-item"

describe("<GridItem />", () => {
  test("renders component correctly", async () => {
    await a11y(<GridItem>GridItem</GridItem>)
  })

  test("sets `displayName` correctly", () => {
    expect(GridItem.displayName).toBe("GridItem")
  })

  test("sets `className` correctly", async () => {
    await render(<GridItem>GridItem</GridItem>)

    await expect.element(page.getByText("GridItem")).toHaveClass("ui-grid-item")
  })

  test("renders HTML tag correctly", async () => {
    await render(<GridItem>GridItem</GridItem>)

    expect(page.getByText("GridItem").element().tagName).toBe("DIV")
  })

  test("renders all the allowed shorthand style props", async () => {
    await render(
      <GridItem colSpan={2} rowSpan={2}>
        GridItem
      </GridItem>,
    )

    await expect.element(page.getByText("GridItem")).toHaveStyle({
      gridColumn: "span 2/span 2",
      gridRow: "span 2/span 2",
    })
  })
})
