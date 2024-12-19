import { render, screen } from "../../../test"
import { a11y } from "../../../test"
import { GridItem } from "./grid-item"

describe("<GridItem />", () => {
  test("passes a11y test", async () => {
    await a11y(<GridItem>GridItem</GridItem>)
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
