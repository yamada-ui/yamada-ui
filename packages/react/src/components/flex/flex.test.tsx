import { a11y, render, screen } from "#test"
import { Flex } from "./flex"

describe("<Flex />", () => {
  test("renders flex correctly", () => {
    render(<Flex>Flex</Flex>)
  })

  test("passes a11y test", async () => {
    await a11y(<Flex>Flex</Flex>)
  })

  test("sets `displayName` correctly", () => {
    expect(Flex.displayName).toBe("Flex")
  })

  test("sets `className` correctly", () => {
    render(<Flex>Flex</Flex>)
    expect(screen.getByText("Flex")).toHaveClass("ui-flex")
  })

  test("renders HTML tag correctly", () => {
    render(<Flex>Flex</Flex>)
    expect(screen.getByText("Flex").tagName).toBe("DIV")
  })

  test("renders all the allowed shorthand style props", () => {
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

    expect(screen.getByText("Flex")).toHaveStyle({
      alignItems: "stretch",
      flexBasis: "auto",
      flexDirection: "row",
      flexGrow: 1,
      flexShrink: 0,
      flexWrap: "nowrap",
      justifyContent: "start",
    })
  })
})
