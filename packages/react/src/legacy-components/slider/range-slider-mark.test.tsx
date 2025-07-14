import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderTrack,
} from "."
import { a11y, render, screen } from "@/test"

describe("<RangeSliderMark />", () => {
  test("should render correctly", async () => {
    await a11y(
      <RangeSlider>
        <RangeSliderMark ml="-5" value={25} w="10">
          25%
        </RangeSliderMark>
      </RangeSlider>,
    )
  })

  test("should display correct value", () => {
    render(
      <RangeSlider>
        <RangeSliderMark ml="-5" value={25} w="10">
          25%
        </RangeSliderMark>
      </RangeSlider>,
    )
    expect(screen.getByText("25%")).toBeInTheDocument()
  })

  test("should have correct value attribute", () => {
    render(
      <RangeSlider>
        <RangeSliderMark ml="-5" value={25} w="10">
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
