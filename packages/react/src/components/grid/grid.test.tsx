import { render, screen } from "@/test"
import { Grid } from "./grid"

describe("<Grid />", () => {
  test("renders grid correctly", () => {
    render(<Grid>Grid</Grid>)
  })

  test("sets `displayName` correctly", () => {
    expect(Grid.displayName).toBe("Grid")
  })

  test("sets `className` correctly", () => {
    render(<Grid>Grid</Grid>)
    expect(screen.getByText("Grid")).toHaveClass("ui-grid")
  })

  test("renders HTML tag correctly", () => {
    render(<Grid>Grid</Grid>)
    expect(screen.getByText("Grid").tagName).toBe("DIV")
  })

  test("renders all the allowed shorthand style props", () => {
    render(
      <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)">
        Grid
      </Grid>,
    )

    expect(screen.getByText("Grid")).toHaveStyle({
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
    })
  })
})
