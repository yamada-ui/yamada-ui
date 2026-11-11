import { page, render, styledTheme } from "#test/browser"
import { createStyled } from "./styled"

describe("createStyled", () => {
  test("sizes and centers a nested SVG with attributes", async () => {
    const Component = createStyled("svg")
    await render(
      <Component
        data-testid="outer"
        attrs={{ viewBox: "0 0 24 24" }}
        boxSize="48px"
      >
        <Component
          attrs={{
            height: 12,
            viewBox: "0 0 24 24",
            width: 12,
            x: 6,
            y: 6,
          }}
        >
          <rect data-testid="rect" height="24" width="24" />
        </Component>
      </Component>,
    )
    const outer = page.getByTestId("outer").element().getBoundingClientRect()
    const rect = page.getByTestId("rect").element().getBoundingClientRect()
    expect(rect.width).toBeCloseTo(24)
    expect(rect.height).toBeCloseTo(24)
    expect(rect.x - outer.x).toBeCloseTo(12)
    expect(rect.y - outer.y).toBeCloseTo(12)
  })

  test("inherits `colorScheme` from a parent styled component and allows overriding it", async () => {
    const Component1 = createStyled("div")
    const Component2 = createStyled("div")
    const Component3 = createStyled("div")
    await render(
      <Component1 colorScheme="red">
        <Component2 data-testid="el2">
          <Component3 colorScheme="blue" data-testid="el3">
            test
          </Component3>
        </Component2>
      </Component1>,
    )
    expect(
      getComputedStyle(page.getByTestId("el2").element()).getPropertyValue(
        "--ui-colorScheme-500",
      ),
    ).toBe(styledTheme.colors.red["500"])
    expect(
      getComputedStyle(page.getByTestId("el3").element()).getPropertyValue(
        "--ui-colorScheme-500",
      ),
    ).toBe(styledTheme.colors.blue["500"])
  })
})
