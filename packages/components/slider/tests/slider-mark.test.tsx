import { render, screen, a11y } from "@yamada-ui/test"
import { Slider, SliderMark } from "../src"

describe("<SliderMark />", () => {
  test("should render correctly", async () => {
    const { container } = render(
      <Slider>
        <SliderMark value={25}>25%</SliderMark>
      </Slider>,
    )
    await a11y(container)
  })

  test("should display correct value", () => {
    render(
      <Slider>
        <SliderMark value={25}>25%</SliderMark>
      </Slider>,
    )
    expect(screen.getByText("25%")).toBeInTheDocument()
  })

  test("should have correct value attribute", () => {
    render(
      <Slider>
        <SliderMark value={25}>25%</SliderMark>
      </Slider>,
    )
    expect(screen.getByText("25%")).toHaveAttribute("value", "25")
  })
})
