import { a11y, render, screen } from "#test"
import { Grid } from "./grid"

describe("<Grid />", () => {
  test("renders component correctly", async () => {
    await a11y(<Grid>Grid</Grid>)
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
