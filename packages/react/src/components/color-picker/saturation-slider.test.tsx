import type { Hsv } from "./"
import { drag, fireEvent, render, screen, waitFor } from "../../../test"
import { SaturationSlider } from "./"

describe("<SaturationSlider />", () => {
  let originalPageX: PropertyDescriptor | undefined
  let originalPageY: PropertyDescriptor | undefined

  beforeEach(() => {
    originalPageX = Object.getOwnPropertyDescriptor(
      MouseEvent.prototype,
      "pageX",
    )
    originalPageY = Object.getOwnPropertyDescriptor(
      MouseEvent.prototype,
      "pageY",
    )

    Object.defineProperties(MouseEvent.prototype, {
      pageX: {
        configurable: true,
        get() {
          return this.clientX
        },
      },
      pageY: {
        configurable: true,
        get() {
          return this.clientY
        },
      },
    })
  })

  afterEach(() => {
    if (originalPageX) {
      Object.defineProperty(MouseEvent.prototype, "pageX", originalPageX)
    }
    if (originalPageY) {
      Object.defineProperty(MouseEvent.prototype, "pageY", originalPageY)
    }
  })

  test("SaturationSlider renders correctly", () => {
    render(<SaturationSlider data-testid="saturationSlider" />)

    const alphaSlider = screen.getByTestId("saturationSlider")

    expect(alphaSlider).toBeInTheDocument()
  })

  test("SaturationSlider calls onChange when value changes using keyboard arrows", () => {
    const mockOnChange = vi.fn()
    render(<SaturationSlider onChange={mockOnChange} />)
    const slider = screen.getByRole("slider")
    fireEvent.keyDown(slider, { key: "Home" })

    fireEvent.keyDown(slider, { key: "ArrowUp" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0, 1])

    fireEvent.keyDown(slider, { key: "ArrowDown" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0, 0.99])

    fireEvent.keyDown(slider, { key: "ArrowLeft" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0, 0.99])

    fireEvent.keyDown(slider, { key: "ArrowRight" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0.01, 0.99])

    fireEvent.keyDown(slider, { key: "PageUp" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0.01, 0.99])

    fireEvent.keyDown(slider, { key: "PageDown" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0.01, 0.99])

    fireEvent.keyDown(slider, { key: "End" })
    expect(mockOnChange).toHaveBeenCalledWith([0, 0.01, 0.99])
  })

  test("SaturationSlider calls onChange when value changes using mouse", async () => {
    const onChange = vi.fn()
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    const defaultValue: Hsv = [180, 0, 0]

    const { user } = render(
      <SaturationSlider
        defaultValue={defaultValue}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const slider = screen.getByRole("slider")

    await drag(user)({
      target: slider,
      coords: (i) => ({ x: i * 100, y: i * -100 }),
    })

    await waitFor(() => {
      expect(onChangeStart).toHaveBeenCalledWith([180, 0, 0])
    })
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith([180, 1, 1])
    })
    await waitFor(() => {
      expect(onChangeEnd).toHaveBeenCalledWith([180, 1, 1])
    })
  })
})
