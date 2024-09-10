import { drag, fireEvent, render, screen, waitFor } from "@yamada-ui/test"
import { AlphaSlider } from "../src"

describe("<AlphaSlider />", () => {
  beforeAll(() => {
    Object.defineProperties(MouseEvent.prototype, {
      pageX: {
        get() {
          return this.clientX
        },
        configurable: true,
      },
      pageY: {
        get() {
          return this.clientY
        },
        configurable: true,
      },
    })
  })

  afterAll(() => {
    Object.defineProperty(MouseEvent.prototype, "pageX", {
      value: undefined,
      configurable: true,
    })
    Object.defineProperty(MouseEvent.prototype, "pageY", {
      value: undefined,
      configurable: true,
    })
  })

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

  test("AlphaSlider disabled behavior", () => {
    const onChange = vi.fn()
    const { getByRole } = render(<AlphaSlider onChange={onChange} disabled />)

    const sliderThumb = getByRole("slider")

    fireEvent.keyDown(sliderThumb, { key: "ArrowRight" })
    expect(onChange).not.toHaveBeenCalled()
  })

  test("AlphaSlider calls onChangeStart, onChange and onChangeEnd on thumb move", async () => {
    const onChange = vi.fn()
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    const { min, max, step } = { min: 0, max: 1, step: 0.01 }

    const { user } = render(
      <AlphaSlider
        min={min}
        max={max}
        step={step}
        onChangeStart={onChangeStart}
        onChangeEnd={onChangeEnd}
        onChange={onChange}
      />,
    )

    const sliderThumb = screen.getByRole("slider")

    await drag(user)({
      target: sliderThumb,
      coords: (i) => ({ x: i * 100, y: 0 }),
    })

    await waitFor(() => {
      expect(onChangeStart).toHaveBeenCalledWith(0.5)
    })
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(0)
    })
    await waitFor(() => {
      expect(onChangeEnd).toHaveBeenCalledWith(1)
    })
  })
})
