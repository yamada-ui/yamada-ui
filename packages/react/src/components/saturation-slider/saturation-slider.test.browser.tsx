import { vi } from "vitest"
import { page, render } from "#test/browser"
import { SaturationSlider } from "."
import { noop } from "../../utils"

const mockRect = (
  el: HTMLElement | SVGElement,
  rect: Partial<DOMRect>,
): (() => void) => {
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

const pointer = (
  target: EventTarget,
  type: "pointerdown" | "pointermove" | "pointerup",
  init: PointerEventInit,
) => {
  target.dispatchEvent(new PointerEvent(type, { bubbles: true, ...init }))
}

describe("<SaturationSlider />", () => {
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
