import { a11y, page, render } from "#test/browser"
import { SimpleGrid } from "./simple-grid"

const getDeclaredGridTemplateColumns = () => {
  const element = page.getByText("SimpleGrid").element()

  for (const sheet of Array.from(document.styleSheets).reverse()) {
    let rules: CSSRuleList

    try {
      rules = sheet.cssRules
    } catch {
      continue
    }

    for (const rule of Array.from(rules).reverse()) {
      if (!(rule instanceof CSSStyleRule)) continue
      if (!element.matches(rule.selectorText)) continue
      if (rule.style.gridTemplateColumns) return rule.style.gridTemplateColumns
    }
  }

  return getComputedStyle(element).gridTemplateColumns
}

const getComputedGridTemplateColumns = () =>
  getComputedStyle(page.getByText("SimpleGrid").element()).gridTemplateColumns

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
    const gridTemplateColumns = getDeclaredGridTemplateColumns()
    expect(gridTemplateColumns).toMatch(
      /^repeat\(auto-fit,\s*minmax\(var\(--sizes200px,\s*200px\),\s*1fr\)\)$/,
    )
  })

  test("applies `minChildWidth` with number value correctly", async () => {
    await render(<SimpleGrid minChildWidth={200}>SimpleGrid</SimpleGrid>)
    const gridTemplateColumns = getDeclaredGridTemplateColumns()
    expect(gridTemplateColumns).toMatch(
      /^repeat\(auto-fit,\s*minmax\(var\(--sizes200,\s*200\),\s*1fr\)\)$/,
    )
    expect(getComputedGridTemplateColumns()).toMatch(/\d+px/)
  })

  test("applies `minChildWidth` takes precedence over `columns`", async () => {
    await render(
      <SimpleGrid columns={2} minChildWidth="100px">
        SimpleGrid
      </SimpleGrid>,
    )
    const gridTemplateColumns = getDeclaredGridTemplateColumns()
    expect(gridTemplateColumns).toMatch(/auto-fit/)
    expect(gridTemplateColumns).not.toMatch(/repeat\(2,/)
  })

  test("applies `columns` correctly", async () => {
    await render(<SimpleGrid columns={3}>SimpleGrid</SimpleGrid>)
    const gridTemplateColumns = getDeclaredGridTemplateColumns().trim()
    expect(gridTemplateColumns).toMatch(/^repeat\(3,\s*minmax\(0px,\s*1fr\)\)$/)
  })

  test("returns undefined for null value in `minChildWidth` responsive array", async () => {
    await render(
      // @ts-expect-error testing null handling in responsive array
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
