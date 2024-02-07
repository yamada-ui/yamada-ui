import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { Slider } from "@yamada-ui/react"
import { a11y } from "@yamada-ui/test"

describe("<Slider />", () => {
  test("Slider renders correctly", async () => {
    const { container } = render(<Slider />)
    await a11y(container)
  })

  test("Slider have correct class", () => {
    render(<Slider data-testid="slider" />)
    expect(screen.getByTestId("slider")).toHaveClass("ui-slider")
  })

  test("Slider have correct default values", () => {
    render(<Slider data-testid="slider" defaultValue={25} />)
    expect(
      screen.getByTestId("slider").getElementsByTagName("input")[0],
    ).toHaveValue(String(25))
  })

  test("Slider thumb has correct aria-valuemin and aria-valuemax", () => {
    const { min, max } = { min: 0, max: 100 }
    render(<Slider min={min} max={max} />)

    const sliderThumb = screen.getByRole("slider")

    expect(sliderThumb).toHaveAttribute("aria-valuemin", String(min))
    expect(sliderThumb).toHaveAttribute("aria-valuemax", String(max))
  })

  test("Slider thumb has correct aria-valuenow", () => {
    const defaultValue = 25
    render(<Slider defaultValue={defaultValue} />)

    const sliderThumb = screen.getByRole("slider")
    expect(sliderThumb).toHaveAttribute("aria-valuenow", String(defaultValue))
  })

  test("Slider can change slider orientation", () => {
    const { container } = render(<Slider orientation="vertical" />)

    const filledTrack = container.querySelector(".ui-slider__track")

    expect(filledTrack).toHaveStyle("height: 100%")

    cleanup()

    const { container: horizontalContainer } = render(
      <Slider orientation="horizontal" />,
    )

    const horizontalFilledTrack =
      horizontalContainer.querySelector(".ui-slider__track")

    expect(horizontalFilledTrack).toHaveStyle("width: 100%")
  })

  test("Slider can be reversed", () => {
    const { container } = render(<Slider isReversed />)
    const filledTrack = container.querySelector(".ui-slider__track-filled")
    expect(filledTrack).toHaveStyle("right: 0%")
  })

  test("Slider can be disabled", () => {
    render(<Slider data-testid="slider" isDisabled />)

    const slider = screen.getByTestId("slider")
    const sliderInput = slider.getElementsByTagName("input")[0]
    const sliderThumb = screen.getByRole("slider")

    expect(sliderInput).toBeDisabled()
    expect(sliderInput).toHaveAttribute("aria-disabled", "true")
    expect(sliderThumb).toHaveAttribute("aria-disabled", "true")
  })

  test("Slider can be readOnly", () => {
    render(<Slider data-testid="slider" isReadOnly />)

    const slider = screen.getByTestId("slider")
    const sliderInput = slider.getElementsByTagName("input")[0]
    const sliderThumb = screen.getByRole("slider")

    expect(sliderInput).toHaveAttribute("aria-readonly", "true")
    expect(sliderInput).toHaveAttribute("readonly", "")
    expect(sliderThumb).toHaveAttribute("aria-readonly", "true")
  })

  test("Slider can have correct step", () => {
    const step = 10
    render(<Slider data-testid="slider" step={step} />)

    const slider = screen.getByTestId("slider").getElementsByTagName("input")[0]

    const initialValue = Number(slider.value)

    fireEvent.change(slider, { target: { value: String(initialValue + step) } })

    expect(Number(slider.value)).toBe(initialValue + step)
  })
})
