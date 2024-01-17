import { render } from "@yamada-ui/test"
import { Slide } from "../src"

describe("<Slide />", () => {
  test("renders correctly", async () => {
    const { getByText } = render(<Slide isOpen={false}>Test</Slide>)

    getByText("Test")
  })

  test("applies default styles correctly", async () => {
    const { getByTestId } = render(<Slide isOpen data-testid="slide" />)

    expect(getByTestId("slide")).toHaveStyle(
      "transform: translateX(100%) translateY(0px) translateZ(0);",
    )
  })

  test("applies styles correctly for top placement", async () => {
    const { getByTestId } = render(
      <Slide isOpen placement="top" data-testid="slide" />,
    )

    expect(getByTestId("slide")).toHaveStyle(
      "transform: translateX(0px) translateY(-100%) translateZ(0);",
    )
  })

  test("applies styles correctly for left placement", async () => {
    const { getByTestId } = render(
      <Slide isOpen placement="left" data-testid="slide" />,
    )

    expect(getByTestId("slide")).toHaveStyle(
      "transform: translateX(-100%) translateY(0px) translateZ(0);",
    )
  })

  test("applies styles correctly for right placement", async () => {
    const { getByTestId } = render(
      <Slide isOpen placement="right" data-testid="slide" />,
    )

    expect(getByTestId("slide")).toHaveStyle(
      "transform: translateX(100%) translateY(0px) translateZ(0);",
    )
  })

  test("applies styles correctly for bottom placement", async () => {
    const { getByTestId } = render(
      <Slide isOpen placement="bottom" data-testid="slide" />,
    )

    expect(getByTestId("slide")).toHaveStyle(
      "transform: translateX(0px) translateY(100%) translateZ(0);",
    )
  })
})
