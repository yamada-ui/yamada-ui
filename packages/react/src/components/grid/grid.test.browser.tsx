import { page, render } from "#test/browser"
import { Grid } from "./grid"

describe("<Grid />", () => {
  test("renders grid correctly", async () => {
    await render(<Grid>Grid</Grid>)
  })

  test("sets `displayName` correctly", () => {
    expect(Grid.displayName).toBe("Grid")
  })

  test("sets `className` correctly", async () => {
    await render(<Grid>Grid</Grid>)

    await expect.element(page.getByText("Grid")).toHaveClass("ui-grid")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Grid>Grid</Grid>)

    expect(page.getByText("Grid").element().tagName).toBe("DIV")
  })

  test("renders all the allowed shorthand style props", async () => {
    await render(
      <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)">
        Grid
      </Grid>,
    )

    const styles = getComputedStyle(page.getByText("Grid").element())

    expect(styles.gridTemplateColumns.trim().split(/\s+/)).toHaveLength(2)
    expect(styles.gridTemplateRows.trim().split(/\s+/)).toHaveLength(2)
  })
})
