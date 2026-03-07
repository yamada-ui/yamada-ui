import { a11y, render, screen } from "#test"
import { SimpleGrid } from "./simple-grid"

describe("<SimpleGrid />", () => {
  test("renders component correctly", async () => {
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

  test("applies `minChildWidth` correctly", () => {
    render(<SimpleGrid minChildWidth="200px">SimpleGrid</SimpleGrid>)
    expect(screen.getByText("SimpleGrid")).toHaveStyle({
      gridTemplateColumns:
        "repeat(auto-fit, minmax({sizes.200px, 200px}, 1fr))",
    })
  })

  test("applies `minChildWidth` with number value correctly", () => {
    render(<SimpleGrid minChildWidth={200}>SimpleGrid</SimpleGrid>)
    expect(screen.getByText("SimpleGrid")).toHaveStyle({
      gridTemplateColumns: "repeat(auto-fit, minmax({sizes.200, 200}, 1fr))",
    })
  })

  test("applies `minChildWidth` takes precedence over `columns`", () => {
    render(
      <SimpleGrid columns={2} minChildWidth="100px">
        SimpleGrid
      </SimpleGrid>,
    )
    expect(screen.getByText("SimpleGrid")).toHaveStyle({
      gridTemplateColumns:
        "repeat(auto-fit, minmax({sizes.100px, 100px}, 1fr))",
    })
  })

  test("applies `columns` correctly", () => {
    render(<SimpleGrid columns={3}>SimpleGrid</SimpleGrid>)
    expect(screen.getByText("SimpleGrid")).toHaveStyle({
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    })
  })

  test("returns undefined for null value in `minChildWidth` responsive object", () => {
    // @ts-expect-error - testing null handling in responsive array
    render(<SimpleGrid minChildWidth={[null, "200px"]}>SimpleGrid</SimpleGrid>)
    expect(screen.getByText("SimpleGrid")).toBeInTheDocument()
  })

  test("returns undefined for null value in `columns` responsive object", () => {
    // @ts-expect-error - testing null handling in responsive array
    render(<SimpleGrid columns={[null, 3]}>SimpleGrid</SimpleGrid>)
    expect(screen.getByText("SimpleGrid")).toBeInTheDocument()
  })
})
