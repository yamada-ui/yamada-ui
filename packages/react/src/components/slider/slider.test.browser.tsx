import { vi } from "vitest"
import { page, render } from "#test/browser"
import { Slider } from "."
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

describe("<Slider />", () => {
  test("pointer interaction triggers onChangeStart and onChangeEnd for single slider", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    await render(
      <Slider.Root
        defaultValue={50}
        trackProps={{ "data-testid": "track" }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = page.getByTestId("track").element() as HTMLElement
    const cleanup = mockRect(track, { left: 0, width: 200 })

    track.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        clientX: 100,
        clientY: 0,
        isPrimary: true,
      }),
    )
    expect(onChangeStart).toHaveBeenCalledWith(50)

    window.dispatchEvent(
      new PointerEvent("pointerup", {
        bubbles: true,
        clientX: 120,
        clientY: 0,
        isPrimary: true,
      }),
    )
    expect(onChangeEnd).toHaveBeenCalledWith(60)

    cleanup()
  })

  test("pointer interaction triggers onChange during move for single slider", async () => {
    const onChange = vi.fn()

    await render(
      <Slider.Root
        defaultValue={50}
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
      />,
    )

    const track = page.getByTestId("track").element() as HTMLElement
    const cleanup = mockRect(track, { left: 0, width: 200 })

    track.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        clientX: 100,
        clientY: 0,
        isPrimary: true,
      }),
    )
    window.dispatchEvent(
      new PointerEvent("pointermove", {
        bubbles: true,
        clientX: 120,
        clientY: 0,
        isPrimary: true,
      }),
    )
    expect(onChange).toHaveBeenCalledWith(60)

    window.dispatchEvent(
      new PointerEvent("pointerup", {
        bubbles: true,
        clientX: 120,
        clientY: 0,
        isPrimary: true,
      }),
    )

    cleanup()
  })

  test("pointer interaction triggers callbacks for range slider", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    const onChange = vi.fn()

    await render(
      <Slider.Root
        defaultValue={[25, 75]}
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = page.getByTestId("track").element() as HTMLElement
    const cleanup = mockRect(track, { left: 0, width: 200 })

    track.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        clientX: 40,
        clientY: 0,
        isPrimary: true,
      }),
    )
    expect(onChangeStart).toHaveBeenCalledWith([20, 75])

    window.dispatchEvent(
      new PointerEvent("pointermove", {
        bubbles: true,
        clientX: 60,
        clientY: 0,
        isPrimary: true,
      }),
    )
    expect(onChange).toHaveBeenCalledWith([20, 75])

    window.dispatchEvent(
      new PointerEvent("pointerup", {
        bubbles: true,
        clientX: 60,
        clientY: 0,
        isPrimary: true,
      }),
    )
    expect(onChangeEnd).toHaveBeenCalledWith([30, 75])

    cleanup()
  })

  test("pointer interaction selects the closest thumb on the second-thumb side", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    await render(
      <Slider.Root
        defaultValue={[25, 75]}
        trackProps={{ "data-testid": "track" }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = page.getByTestId("track").element() as HTMLElement
    const cleanup = mockRect(track, { left: 0, width: 200 })

    track.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        clientX: 160,
        clientY: 0,
        isPrimary: true,
      }),
    )
    expect(onChangeStart).toHaveBeenCalledWith([25, 80])

    window.dispatchEvent(
      new PointerEvent("pointerup", {
        bubbles: true,
        clientX: 160,
        clientY: 0,
        isPrimary: true,
      }),
    )
    expect(onChangeEnd).toHaveBeenCalledWith([25, 80])

    cleanup()
  })

  test("pointer interaction does not trigger callbacks when disabled", async () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    const onChange = vi.fn()

    await render(
      <Slider.Root
        defaultValue={50}
        disabled
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = page.getByTestId("track").element() as HTMLElement
    const cleanup = mockRect(track, { left: 0, width: 200 })

    track.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        clientX: 100,
        clientY: 0,
        isPrimary: true,
      }),
    )
    window.dispatchEvent(
      new PointerEvent("pointermove", {
        bubbles: true,
        clientX: 120,
        clientY: 0,
        isPrimary: true,
      }),
    )
    window.dispatchEvent(
      new PointerEvent("pointerup", {
        bubbles: true,
        clientX: 120,
        clientY: 0,
        isPrimary: true,
      }),
    )

    expect(onChangeStart).not.toHaveBeenCalled()
    expect(onChange).not.toHaveBeenCalled()
    expect(onChangeEnd).not.toHaveBeenCalled()

    cleanup()
  })

  test("vertical slider pointer interaction uses y-axis", async () => {
    const onChange = vi.fn()

    await render(
      <Slider.Root
        defaultValue={50}
        orientation="vertical"
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
      />,
    )

    const track = page.getByTestId("track").element() as HTMLElement
    const cleanup = mockRect(track, { bottom: 200, height: 200, top: 0 })

    track.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        clientX: 0,
        clientY: 60,
        isPrimary: true,
      }),
    )
    expect(onChange).toHaveBeenCalledWith(70)

    window.dispatchEvent(
      new PointerEvent("pointerup", {
        bubbles: true,
        clientX: 0,
        clientY: 60,
        isPrimary: true,
      }),
    )

    cleanup()
  })
})
