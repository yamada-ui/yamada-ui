import { a11y, page, render } from "#test/browser"
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

const keyDown = (el: HTMLElement, key: string) => {
  el.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true }))
}

const pointer = (
  target: EventTarget,
  type: "pointerdown" | "pointermove" | "pointerup",
  init: PointerEventInit,
) => {
  target.dispatchEvent(new PointerEvent(type, { bubbles: true, ...init }))
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

  test("sets `className` correctly", async () => {
    await render(
      <SaturationSlider.Root
        data-testid="slider"
        trackProps={{ "data-testid": "track" }}
      />,
    )
    await expect
      .element(page.getByTestId("slider"))
      .toHaveClass("ui-saturation-slider__root")
    await expect
      .element(page.getByTestId("track"))
      .toHaveClass("ui-saturation-slider__track")
    await expect
      .element(page.getByRole("slider"))
      .toHaveClass("ui-saturation-slider__thumb")
  })

  test("sets aria attributes correctly", async () => {
    await render(<SaturationSlider.Root defaultValue={[120, 0.5, 0.8]} />)

    const thumb = page.getByRole("slider")
    await expect.element(thumb).toHaveAttribute("aria-valuenow", "50")
    await expect.element(thumb).toHaveAttribute("aria-valuemin", "0")
    await expect.element(thumb).toHaveAttribute("aria-valuemax", "100")
    await expect
      .element(thumb)
      .toHaveAttribute("aria-roledescription", "2D slider")
  })

  test("uses custom aria-valuetext", async () => {
    await render(
      <SaturationSlider.Root
        aria-valuetext="custom text"
        defaultValue={[0, 0.5, 0.5]}
      />,
    )

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-valuetext", "custom text")
  })

  test("uses getAriaValueText", async () => {
    const getAriaValueText = vi.fn().mockReturnValue("custom aria")

    await render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        getAriaValueText={getAriaValueText}
      />,
    )

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-valuetext", "custom aria")
    expect(getAriaValueText).toHaveBeenCalledWith([0, 0.5, 0.5])
  })

  test("keyboard ArrowRight increases saturation", async () => {
    const onChange = vi.fn()

    await render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        onChange={onChange}
      />,
    )

    keyDown(page.getByRole("slider").element(), "ArrowRight")

    expect(onChange).toHaveBeenCalledWith([0, 0.51, 0.5])
  })

  test("keyboard ArrowLeft decreases saturation", async () => {
    const onChange = vi.fn()

    await render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        onChange={onChange}
      />,
    )

    keyDown(page.getByRole("slider").element(), "ArrowLeft")

    expect(onChange).toHaveBeenCalledWith([0, 0.49, 0.5])
  })

  test("keyboard ArrowUp increases brightness", async () => {
    const onChange = vi.fn()

    await render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        onChange={onChange}
      />,
    )

    keyDown(page.getByRole("slider").element(), "ArrowUp")

    expect(onChange).toHaveBeenCalledWith([0, 0.5, 0.51])
  })

  test("keyboard ArrowDown decreases brightness", async () => {
    const onChange = vi.fn()

    await render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        onChange={onChange}
      />,
    )

    keyDown(page.getByRole("slider").element(), "ArrowDown")

    expect(onChange).toHaveBeenCalledWith([0, 0.5, 0.49])
  })

  test("keyboard does not change value when disabled", async () => {
    const onChange = vi.fn()

    await render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        disabled
        onChange={onChange}
      />,
    )

    keyDown(page.getByRole("slider").element(), "ArrowRight")

    expect(onChange).not.toHaveBeenCalled()
  })

  test("keyboard does not change value when readOnly", async () => {
    const onChange = vi.fn()

    await render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        readOnly
        onChange={onChange}
      />,
    )

    keyDown(page.getByRole("slider").element(), "ArrowRight")

    expect(onChange).not.toHaveBeenCalled()
  })

  test("clamps saturation value within bounds via keyboard", async () => {
    const onChange = vi.fn()

    await render(
      <SaturationSlider.Root defaultValue={[0, 1, 0.5]} onChange={onChange} />,
    )

    keyDown(page.getByRole("slider").element(), "ArrowRight")

    expect(onChange).toHaveBeenCalledWith([0, 1, 0.5])
  })

  test("clamps brightness value within bounds via keyboard", async () => {
    const onChange = vi.fn()

    await render(
      <SaturationSlider.Root defaultValue={[0, 0.5, 0]} onChange={onChange} />,
    )

    keyDown(page.getByRole("slider").element(), "ArrowDown")

    expect(onChange).toHaveBeenCalledWith([0, 0.5, 0])
  })

  test("disabled SaturationSlider renders correctly", async () => {
    await render(<SaturationSlider.Root disabled />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-disabled")
  })

  test("readonly SaturationSlider renders correctly", async () => {
    await render(<SaturationSlider.Root readOnly />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-readonly")
  })

  test("thumb has tabIndex 0 when interactive", async () => {
    await render(<SaturationSlider.Root />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("tabindex", "0")
  })

  test("thumb has tabIndex -1 when disabled", async () => {
    await render(<SaturationSlider.Root disabled />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("tabindex", "-1")
  })

  test("respects custom step", async () => {
    const onChange = vi.fn()

    await render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        step={0.1}
        onChange={onChange}
      />,
    )

    keyDown(page.getByRole("slider").element(), "ArrowRight")

    expect(onChange).toHaveBeenCalledWith([0, 0.6, 0.5])
  })

  test("renders with controlled value", async () => {
    await render(<SaturationSlider.Root value={[200, 0.8, 0.6]} />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-valuenow", "80")
  })

  test("renders with custom children", async () => {
    await render(
      <SaturationSlider.Root data-testid="slider">
        <SaturationSlider.Track data-testid="custom-track">
          <SaturationSlider.Thumb data-testid="custom-thumb" />
        </SaturationSlider.Track>
      </SaturationSlider.Root>,
    )

    await expect.element(page.getByTestId("custom-track")).toBeInTheDocument()
    await expect.element(page.getByTestId("custom-thumb")).toBeInTheDocument()
  })

  test("sets name on hidden input", async () => {
    const { container } = await render(
      <SaturationSlider.Root name="color-saturation" />,
    )

    const input = container.querySelector("input[name='color-saturation']")
    expect(input).toBeInTheDocument()
  })

  test("sets id on hidden input", async () => {
    const { container } = await render(
      <SaturationSlider.Root id="saturation-input" />,
    )

    const input = container.querySelector("input#saturation-input")
    expect(input).toBeInTheDocument()
  })

  test("pointer interaction triggers onChangeStart and onChangeEnd", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    await render(
      <SaturationSlider.Root
        defaultValue={[120, 0.5, 0.5]}
        trackProps={{ "data-testid": "track" }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = page.getByTestId("track").element()
    const cleanup = mockRect(track, {
      bottom: 200,
      height: 200,
      left: 0,
      width: 200,
    })

    pointer(track, "pointerdown", { clientX: 100, clientY: 100 })
    expect(onChangeStart).toHaveBeenCalledWith([120, 0.5, 0.5])

    pointer(window, "pointerup", { clientX: 140, clientY: 60 })
    await expect.poll(() => onChangeEnd.mock.calls.length).toBe(1)
    expect(onChangeEnd).toHaveBeenCalledWith([120, 0.7, 0.7])

    cleanup()
  })

  test("pointer interaction triggers onChange on move", async () => {
    const onChange = vi.fn()

    await render(
      <SaturationSlider.Root
        defaultValue={[120, 0.5, 0.5]}
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
      />,
    )

    const track = page.getByTestId("track").element()
    const cleanup = mockRect(track, {
      bottom: 200,
      height: 200,
      left: 0,
      width: 200,
    })

    pointer(track, "pointerdown", { clientX: 100, clientY: 100 })
    pointer(window, "pointermove", { clientX: 160, clientY: 40 })
    await expect.poll(() => onChange.mock.calls.length).toBeGreaterThan(0)
    expect(onChange).toHaveBeenCalledWith([120, 0.8, 0.8])

    pointer(window, "pointerup", { clientX: 160, clientY: 40 })

    cleanup()
  })

  test("pointer interaction does not trigger callbacks when disabled", async () => {
    const onChangeStart = vi.fn()
    const onChange = vi.fn()
    const onChangeEnd = vi.fn()

    await render(
      <SaturationSlider.Root
        defaultValue={[0, 0.5, 0.5]}
        disabled
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = page.getByTestId("track").element()
    const cleanup = mockRect(track, {
      bottom: 200,
      height: 200,
      left: 0,
      width: 200,
    })

    pointer(track, "pointerdown", { clientX: 100, clientY: 100 })
    pointer(window, "pointermove", { clientX: 120, clientY: 80 })
    pointer(window, "pointerup", { clientX: 120, clientY: 80 })

    expect(onChangeStart).not.toHaveBeenCalled()
    expect(onChange).not.toHaveBeenCalled()
    expect(onChangeEnd).not.toHaveBeenCalled()

    cleanup()
  })
})
