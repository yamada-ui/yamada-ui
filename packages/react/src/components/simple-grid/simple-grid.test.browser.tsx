import { page, render } from "#test/browser"
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

      try {
        if (!element.matches(rule.selectorText)) continue
      } catch {
        continue
      }

      if (rule.style.gridTemplateColumns) return rule.style.gridTemplateColumns
    }
  }

  return getComputedStyle(element).gridTemplateColumns
}

const getComputedGridTemplateColumns = () =>
  getComputedStyle(page.getByText("SimpleGrid").element()).gridTemplateColumns

describe("<SimpleGrid />", () => {
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
})
