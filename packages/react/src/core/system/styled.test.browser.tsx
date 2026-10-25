import { page, render, styledTheme } from "#test/browser"
import { createStyled } from "./styled"

describe("createStyled", () => {
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
