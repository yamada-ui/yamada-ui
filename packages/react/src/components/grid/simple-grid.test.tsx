import { a11y, render, screen } from "../../../test"
import { SimpleGrid } from "./simple-grid"

describe("<SimpleGrid />", () => {
  test("passes a11y test", async () => {
    await a11y(<SimpleGrid>GridSimple</SimpleGrid>)
  })

  test("minChildWidth - prop works correctly(minChildWidth prop takes precedence over the columns prop)", () => {
    render(
      <SimpleGrid columns={2} minChildWidth={{ base: "4" }}>
        SimpleGrid
      </SimpleGrid>,
    )

    expect(screen.getByText("SimpleGrid")).toHaveStyle({
      gridTemplateColumns: "repeat(auto-fit, minmax(1rem, 1fr))",
    })
  })

  test("columns - prop works correctly", () => {
    render(<SimpleGrid columns={3}>SimpleGrid</SimpleGrid>)
    expect(screen.getByText("SimpleGrid")).toHaveStyle({
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    })
  })
})
