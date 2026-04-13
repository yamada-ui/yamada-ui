import { a11y, page, render } from "#test/browser"
import { SimpleGrid } from "./simple-grid"

describe("<SimpleGrid />", () => {
  test("renders component correctly", async () => {
    await a11y(<SimpleGrid>GridSimple</SimpleGrid>)
  })

  test("sets `displayName` correctly", () => {
    expect(SimpleGrid.displayName).toBe("SimpleGrid")
  })

  test("sets `className` correctly", async () => {
    await render(<SimpleGrid>SimpleGrid</SimpleGrid>)
    await expect
      .element(page.getByText("SimpleGrid"))
      .toHaveClass("ui-simple-grid")
  })

  test("renders HTML tag correctly", async () => {
    await render(<SimpleGrid>SimpleGrid</SimpleGrid>)
    expect(page.getByText("SimpleGrid").element().tagName).toBe("DIV")
  })

  test("applies `minChildWidth` correctly", async () => {
    await render(<SimpleGrid minChildWidth="200px">SimpleGrid</SimpleGrid>)
    const styles = getComputedStyle(page.getByText("SimpleGrid").element())
    expect(styles.gridTemplateColumns).toBeTruthy()
    expect(styles.gridTemplateColumns).not.toBe("none")
  })

  test("applies `minChildWidth` with number value correctly", async () => {
    await render(<SimpleGrid minChildWidth={200}>SimpleGrid</SimpleGrid>)
    const styles = getComputedStyle(page.getByText("SimpleGrid").element())
    expect(styles.gridTemplateColumns).toBeTruthy()
    expect(styles.gridTemplateColumns).not.toBe("none")
  })

  test("applies `minChildWidth` takes precedence over `columns`", async () => {
    await render(
      <SimpleGrid columns={2} minChildWidth="100px">
        SimpleGrid
      </SimpleGrid>,
    )
    const styles = getComputedStyle(page.getByText("SimpleGrid").element())
    expect(styles.gridTemplateColumns).toBeTruthy()
    expect(styles.gridTemplateColumns).not.toBe("none")
  })

  test("applies `columns` correctly", async () => {
    await render(<SimpleGrid columns={3}>SimpleGrid</SimpleGrid>)
    const styles = getComputedStyle(page.getByText("SimpleGrid").element())
    expect(styles.gridTemplateColumns).toBeTruthy()
    expect(styles.gridTemplateColumns).not.toBe("none")
  })

  test("returns undefined for null value in `minChildWidth` responsive array", async () => {
    // @ts-expect-error - testing null handling in responsive array
    await render(
      <SimpleGrid minChildWidth={[null, "200px"]}>SimpleGrid</SimpleGrid>,
    )
    await expect.element(page.getByText("SimpleGrid")).toBeInTheDocument()
  })

  test("returns undefined for undefined value in `minChildWidth` responsive object", async () => {
    await render(
      <SimpleGrid minChildWidth={{ base: undefined, md: "200px" }}>
        SimpleGrid
      </SimpleGrid>,
    )
    await expect.element(page.getByText("SimpleGrid")).toBeInTheDocument()
  })

  test("returns undefined for null value in `columns` responsive array", async () => {
    // @ts-expect-error - testing null handling in responsive array
    await render(<SimpleGrid columns={[null, 3]}>SimpleGrid</SimpleGrid>)
    await expect.element(page.getByText("SimpleGrid")).toBeInTheDocument()
  })

  test("returns undefined for undefined value in `columns` responsive object", async () => {
    await render(
      <SimpleGrid columns={{ base: undefined, md: 3 }}>SimpleGrid</SimpleGrid>,
    )
    await expect.element(page.getByText("SimpleGrid")).toBeInTheDocument()
  })
})
