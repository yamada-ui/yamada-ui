import { render, screen, a11y } from "@yamada-ui/test"
import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderTrack,
} from "../src"

describe("<RangeSliderMark />", () => {
  test("should render correctly", async () => {
    const { container } = render(
      <RangeSlider>
        <RangeSliderMark value={25} w="10" ml="-5">
          25%
        </RangeSliderMark>
      </RangeSlider>,
    )
    await a11y(container)
  })

  test("should display correct value", () => {
    render(
      <RangeSlider>
        <RangeSliderMark value={25} w="10" ml="-5">
          25%
        </RangeSliderMark>
      </RangeSlider>,
    )
    expect(screen.getByText("25%")).toBeInTheDocument()
  })

  test("should have correct value attribute", () => {
    render(
      <RangeSlider>
        <RangeSliderMark value={25} w="10" ml="-5">
          25%
        </RangeSliderMark>
      </RangeSlider>,
    )
    expect(screen.getByText("25%")).toHaveAttribute("value", "25")
  })

  test("check if RangeSliderTrack and RangeSliderFilledTrack are rendered", () => {
    const { container } = render(
      <RangeSlider>
        <RangeSliderTrack data-testid="range-slider-track">
          <RangeSliderFilledTrack data-testid="range-slider-filled-track" />
        </RangeSliderTrack>
      </RangeSlider>,
    )

    expect(container).toContainElement(screen.getByTestId("range-slider-track"))
    expect(container).toContainElement(
      screen.getByTestId("range-slider-filled-track"),
    )
  })
})
