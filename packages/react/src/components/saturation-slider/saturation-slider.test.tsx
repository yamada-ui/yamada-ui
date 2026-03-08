import { a11y, fireEvent, render, screen } from "#test"
import { vi } from "vitest"
import { SaturationSlider } from "."
import { noop } from "../../utils"

const mockRect = (el: HTMLElement, rect: Partial<DOMRect>): (() => void) => {
  const original = el.getBoundingClientRect
  el.getBoundingClientRect = () =>
    ({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      toJSON: noop,
      top: 0,
      width: 0,
      x: 0,
      y: 0,
      ...rect,
    }) as DOMRect
  return () => {
    el.getBoundingClientRect = original
  }
}

describe("<SaturationSlider />", () => {
  test("renders component correctly", async () => {
    await a11y(<SaturationSlider.Root />)
  })

  test("sets `displayName` correctly", () => {
    expect(SaturationSlider.Root.displayName).toBe("SaturationSliderRoot")
    expect(SaturationSlider.Track.displayName).toBe("SaturationSliderTrack")
    expect(SaturationSlider.Thumb.displayName).toBe("SaturationSliderThumb")
  })

  test("sets `className` correctly", () => {
    render(
      <SaturationSlider.Root
        data-testid="slider"
        trackProps={{ "data-testid": "track" }}
      />,
    )
    const root = screen.getByTestId("slider")
    const track = screen.getByTestId("track")
    const thumb = screen.getByRole("slider")
    expect(root).toHaveClass("ui-saturation-slider__root")
    expect(track).toHaveClass("ui-saturation-slider__track")
    expect(thumb).toHaveClass("ui-saturation-slider__thumb")
  })

  test("sets aria attributes correctly", () => {
    render(<SaturationSlider.Root defaultValue={[120, 0.5, 0.8]} />)

    const thumb = screen.getByRole("slider")
    expect(thumb).toHaveAttribute("aria-valuenow", "50")
    expect(thumb).toHaveAttribute("aria-valuemin", "0")
    expect(thumb).toHaveAttribute("aria-valuemax", "100")
    expect(thumb).toHaveAttribute("aria-roledescription", "2D slider")
  })

  test("uses custom aria-valuetext", () => {
    render(
      <SaturationSlider.Root
        aria-valuetext="custom text"
        defaultValue={[0, 0.5, 0.5]}
      />,
    )

    const thumb = screen.getByRole("slider")
    expect(thumb).toHaveAttribute("aria-valuetext", "custom text")
  })

  test("uses getAriaValueText", () => {
    const getAriaValueText = vi.fn().mockReturnValue("custom aria")

    render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        getAriaValueText={getAriaValueText}
      />,
    )

    const thumb = screen.getByRole("slider")
    expect(thumb).toHaveAttribute("aria-valuetext", "custom aria")
    expect(getAriaValueText).toHaveBeenCalledWith([0, 0.5, 0.5])
  })

  test("keyboard ArrowRight increases saturation", () => {
    const onChange = vi.fn()

    render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        onChange={onChange}
      />,
    )

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowRight" })

    expect(onChange).toHaveBeenCalledWith([0, 0.51, 0.5])
  })

  test("keyboard ArrowLeft decreases saturation", () => {
    const onChange = vi.fn()

    render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        onChange={onChange}
      />,
    )

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowLeft" })

    expect(onChange).toHaveBeenCalledWith([0, 0.49, 0.5])
  })

  test("keyboard ArrowUp increases brightness", () => {
    const onChange = vi.fn()

    render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        onChange={onChange}
      />,
    )

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowUp" })

    expect(onChange).toHaveBeenCalledWith([0, 0.5, 0.51])
  })

  test("keyboard ArrowDown decreases brightness", () => {
    const onChange = vi.fn()

    render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        onChange={onChange}
      />,
    )

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowDown" })

    expect(onChange).toHaveBeenCalledWith([0, 0.5, 0.49])
  })

  test("keyboard does not change value when disabled", () => {
    const onChange = vi.fn()

    render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        disabled
        onChange={onChange}
      />,
    )

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowRight" })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("keyboard does not change value when readOnly", () => {
    const onChange = vi.fn()

    render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        readOnly
        onChange={onChange}
      />,
    )

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowRight" })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("clamps saturation value within bounds via keyboard", () => {
    const onChange = vi.fn()

    render(
      <SaturationSlider.Root defaultValue={[0, 1, 0.5]} onChange={onChange} />,
    )

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowRight" })

    expect(onChange).toHaveBeenCalledWith([0, 1, 0.5])
  })

  test("clamps brightness value within bounds via keyboard", () => {
    const onChange = vi.fn()

    render(
      <SaturationSlider.Root defaultValue={[0, 0.5, 0]} onChange={onChange} />,
    )

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowDown" })

    expect(onChange).toHaveBeenCalledWith([0, 0.5, 0])
  })

  test("disabled SaturationSlider renders correctly", () => {
    render(<SaturationSlider.Root disabled />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-disabled")
  })

  test("readonly SaturationSlider renders correctly", () => {
    render(<SaturationSlider.Root readOnly />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-readonly")
  })

  test("thumb has tabIndex 0 when interactive", () => {
    render(<SaturationSlider.Root />)

    expect(screen.getByRole("slider")).toHaveAttribute("tabindex", "0")
  })

  test("thumb has tabIndex -1 when disabled", () => {
    render(<SaturationSlider.Root disabled />)

    expect(screen.getByRole("slider")).toHaveAttribute("tabindex", "-1")
  })

  test("respects custom step", () => {
    const onChange = vi.fn()

    render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        step={0.1}
        onChange={onChange}
      />,
    )

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowRight" })

    expect(onChange).toHaveBeenCalledWith([0, 0.6, 0.5])
  })

  test("renders with controlled value", () => {
    render(<SaturationSlider.Root value={[200, 0.8, 0.6]} />)

    const thumb = screen.getByRole("slider")
    expect(thumb).toHaveAttribute("aria-valuenow", "80")
  })

  test("renders with custom children", () => {
    render(
      <SaturationSlider.Root data-testid="slider">
        <SaturationSlider.Track data-testid="custom-track">
          <SaturationSlider.Thumb data-testid="custom-thumb" />
        </SaturationSlider.Track>
      </SaturationSlider.Root>,
    )

    expect(screen.getByTestId("custom-track")).toBeInTheDocument()
    expect(screen.getByTestId("custom-thumb")).toBeInTheDocument()
  })

  test("sets name on hidden input", () => {
    const { container } = render(
      <SaturationSlider.Root name="color-saturation" />,
    )

    const input = container.querySelector("input[name='color-saturation']")
    expect(input).toBeInTheDocument()
  })

  test("sets id on hidden input", () => {
    const { container } = render(
      <SaturationSlider.Root id="saturation-input" />,
    )

    const input = container.querySelector("input#saturation-input")
    expect(input).toBeInTheDocument()
  })

  test("pointer interaction triggers onChangeStart and onChangeEnd", () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    render(
      <SaturationSlider.Root
        defaultValue={[120, 0.5, 0.5]}
        trackProps={{ "data-testid": "track" }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, {
      bottom: 200,
      height: 200,
      left: 0,
      width: 200,
    })

    fireEvent.pointerDown(track, { clientX: 100, clientY: 100 })
    expect(onChangeStart).toHaveBeenCalledWith([120, 0.5, 0.5])

    fireEvent.pointerUp(window, { clientX: 140, clientY: 60 })
    expect(onChangeEnd).toHaveBeenCalledWith([120, 0.7, 0.7])

    cleanup()
  })

  test("pointer interaction triggers onChange on move", () => {
    const onChange = vi.fn()

    render(
      <SaturationSlider.Root
        defaultValue={[120, 0.5, 0.5]}
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
      />,
    )

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, {
      bottom: 200,
      height: 200,
      left: 0,
      width: 200,
    })

    fireEvent.pointerDown(track, { clientX: 100, clientY: 100 })
    fireEvent.pointerMove(window, { clientX: 160, clientY: 40 })
    expect(onChange).toHaveBeenCalledWith([120, 0.8, 0.8])

    fireEvent.pointerUp(window, { clientX: 160, clientY: 40 })

    cleanup()
  })

  test("pointer interaction does not trigger callbacks when disabled", () => {
    const onChangeStart = vi.fn()
    const onChange = vi.fn()
    const onChangeEnd = vi.fn()

    render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        disabled
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, {
      bottom: 200,
      height: 200,
      left: 0,
      width: 200,
    })

    fireEvent.pointerDown(track, { clientX: 100, clientY: 100 })
    fireEvent.pointerMove(window, { clientX: 120, clientY: 80 })
    fireEvent.pointerUp(window, { clientX: 120, clientY: 80 })

    expect(onChangeStart).not.toHaveBeenCalled()
    expect(onChange).not.toHaveBeenCalled()
    expect(onChangeEnd).not.toHaveBeenCalled()

    cleanup()
  })
})
