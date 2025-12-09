import { page, render } from "#browser-test"
import { Flex } from "../flex"

describe("<Flex />", () => {
  test("sets `displayName` correctly", () => {
    expect(Flex.displayName).toBe("Flex")
  })

  test("sets `className` correctly", async () => {
    render(<Flex>Flex</Flex>)

    const flex = page.getByText("Flex")
    await expect.element(flex).toHaveClass("ui-flex")
  })

  test("renders HTML tag correctly", () => {
    render(<Flex>Flex</Flex>)

    const flex = page.getByText("Flex")
    expect(flex.element().tagName).toBe("DIV")
  })

  test("renders all the allowed shorthand style props", async () => {
    render(
      <Flex
        align="stretch"
        basis="auto"
        direction="row"
        grow={1}
        justify="start"
        shrink={0}
        wrap="nowrap"
      >
        Flex
      </Flex>,
    )

    const flex = page.getByText("Flex")
    await expect.element(flex).toHaveStyle({
      alignItems: "stretch",
      flexBasis: "auto",
      flexDirection: "row",
      flexGrow: "1",
      flexShrink: "0",
      flexWrap: "nowrap",
      justifyContent: "start",
    })
  })
})
