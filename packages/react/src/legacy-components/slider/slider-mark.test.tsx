import { Slider, SliderMark } from "."
import { a11y, render, screen } from "@/test"

describe("<SliderMark />", () => {
  test("should render correctly", async () => {
    await a11y(
      <Slider>
        <SliderMark value={25}>25%</SliderMark>
      </Slider>,
    )
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
