import { fireEvent, render, screen } from "@yamada-ui/test"
import { AlphaSlider } from "../src"

describe("<AlphaSlider />", () => {
  test("AlphaSlider renders correctly", async () => {
    render(<AlphaSlider data-testid="alphaSlider" />)

    const alphaSlider = screen.getByTestId("alphaSlider")

    expect(alphaSlider).toBeInTheDocument()
  })

  test("AlphaSlider renders overlays correctly with default props", async () => {
    render(<AlphaSlider data-testid="alphaSlider" />)
    const thumb = screen.getByRole("slider")

    expect(thumb).toHaveAttribute("aria-label", "Slider thumb")
    expect(thumb).toHaveAttribute("aria-valuemax", "1")
    expect(thumb).toHaveAttribute("aria-valuemin", "0")
    expect(thumb).toHaveAttribute("aria-valuenow", "0.5")
  })

  test("AlphaSlider renders correctly with custom props", () => {
    render(<AlphaSlider data-testid="alphaSlider" min={0.2} max={0.8} />)

    const alphaSlider = screen.getByTestId("alphaSlider")

    expect(alphaSlider).toHaveClass("ui-alpha-slider")

    const thumb = screen.getByRole("slider")

    expect(thumb).toHaveAttribute("aria-valuemax", "0.8")
    expect(thumb).toHaveAttribute("aria-valuemin", "0.2")
    expect(thumb).toHaveAttribute("aria-valuenow", "0.5")
  })

  test("AlphaSlider updates value on thumb move", () => {
    const onChange = vi.fn()
    const { getByRole } = render(<AlphaSlider onChange={onChange} />)

    const sliderThumb = getByRole("slider")

    fireEvent.keyDown(sliderThumb, { key: "ArrowRight" })
    expect(onChange).toHaveBeenCalledWith(0.51)
  })

  test("AlphaSlider disabled behaviour", () => {
    const onChange = vi.fn()
    const { getByRole } = render(<AlphaSlider onChange={onChange} disabled />)

    const sliderThumb = getByRole("slider")

    fireEvent.keyDown(sliderThumb, { key: "ArrowRight" })
    expect(onChange).not.toHaveBeenCalled()
  })
})
