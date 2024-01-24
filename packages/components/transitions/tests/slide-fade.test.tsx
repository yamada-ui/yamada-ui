import { render } from "@yamada-ui/test"
import { SlideFade } from "../src"
describe("<SlideFade />", () => {
  test("renders correctly", () => {
    const { getByText } = render(<SlideFade>Test</SlideFade>)

    getByText("Test")
  })

  test("renders correctly with false reverse prop", () => {
    render(<SlideFade reverse />)
  })

  test("default offset is set correctly", () => {
    const { getByTestId } = render(<SlideFade data-testid="slide-fade" />)
    expect(getByTestId("slide-fade")).toHaveStyle(
      "transform: translateX(0px) translateY(8px) translateZ(0);",
    )
  })

  test("applies offsetX correctly", () => {
    const { getByTestId } = render(
      <SlideFade offsetX={10} data-testid="slide-fade" />,
    )
    expect(getByTestId("slide-fade")).toHaveStyle(
      "transform: translateX(10px) translateY(8px) translateZ(0);",
    )
  })

  test("applies offsetY correctly", () => {
    const { getByTestId } = render(
      <SlideFade offsetY={10} data-testid="slide-fade" />,
    )
    expect(getByTestId("slide-fade")).toHaveStyle(
      "transform: translateX(0px) translateY(10px) translateZ(0);",
    )
  })
})
