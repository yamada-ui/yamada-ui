import { a11y, render, screen, waitFor } from "#test"
import { SimpleGrid } from "./simple-grid"

describe("<SimpleGrid />", () => {
  test("passes a11y test", async () => {
    await a11y(<SimpleGrid>GridSimple</SimpleGrid>)
  })

  test("sets `displayName` correctly", () => {
    expect(SimpleGrid.displayName).toBe("SimpleGrid")
  })

  test("sets `className` correctly", () => {
    render(<SimpleGrid>SimpleGrid</SimpleGrid>)
    expect(screen.getByText("SimpleGrid")).toHaveClass("ui-simple-grid")
  })

  test("renders HTML tag correctly", () => {
    render(<SimpleGrid>SimpleGrid</SimpleGrid>)
    expect(screen.getByText("SimpleGrid").tagName).toBe("DIV")
  })

  test("minChildWidth - prop works correctly(minChildWidth prop takes precedence over the columns prop)", () => {
    render(
      <SimpleGrid columns={2} minChildWidth={{ base: "4" }}>
        SimpleGrid
      </SimpleGrid>,
    )

    waitFor(() => {
      expect(screen.getByText("SimpleGrid")).toHaveStyle({
        gridTemplateColumns: "repeat(auto-fit, minmax(1rem, 1fr))",
      })
    })
  })

  test("columns - prop works correctly", () => {
    render(<SimpleGrid columns={3}>SimpleGrid</SimpleGrid>)
    expect(screen.getByText("SimpleGrid")).toHaveStyle({
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    })
  })
})
