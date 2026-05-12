import { a11y, render, screen } from "#test"
import { SimpleGrid } from "./simple-grid"

describe("<SimpleGrid />", () => {
  test("renders component correctly", async () => {
    await a11y(<SimpleGrid>SimpleGrid</SimpleGrid>)
  })

  test("returns undefined for null value in `minChildWidth` responsive array", () => {
    render(
      // @ts-expect-error testing null handling in responsive array
      <SimpleGrid minChildWidth={[null, "200px"]}>SimpleGrid</SimpleGrid>,
    )
    expect(screen.getByText("SimpleGrid")).toBeInTheDocument()
  })

  test("returns undefined for undefined value in `minChildWidth` responsive object", () => {
    render(
      <SimpleGrid minChildWidth={{ base: undefined, md: "200px" }}>
        SimpleGrid
      </SimpleGrid>,
    )
    expect(screen.getByText("SimpleGrid")).toBeInTheDocument()
  })

  test("returns undefined for null value in `columns` responsive array", () => {
    // @ts-expect-error - testing null handling in responsive array
    render(<SimpleGrid columns={[null, 3]}>SimpleGrid</SimpleGrid>)
    expect(screen.getByText("SimpleGrid")).toBeInTheDocument()
  })

  test("returns undefined for undefined value in `columns` responsive object", () => {
    render(
      <SimpleGrid columns={{ base: undefined, md: 3 }}>SimpleGrid</SimpleGrid>,
    )
    expect(screen.getByText("SimpleGrid")).toBeInTheDocument()
  })
})
