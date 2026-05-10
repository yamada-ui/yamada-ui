import { fireEvent, screen } from "@testing-library/react"
import { vi } from "vitest"
import { render } from "#test/browser"
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

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, { left: 0, width: 200 })

    fireEvent.pointerDown(track, { clientX: 100, clientY: 0 })
    expect(onChangeStart).toHaveBeenCalledWith(50)

    fireEvent.pointerUp(window, { clientX: 120, clientY: 0 })
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

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, { left: 0, width: 200 })

    fireEvent.pointerDown(track, { clientX: 100, clientY: 0 })
    fireEvent.pointerMove(window, { clientX: 120, clientY: 0 })
    expect(onChange).toHaveBeenCalledWith(60)

    fireEvent.pointerUp(window, { clientX: 120, clientY: 0 })

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

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, { left: 0, width: 200 })

    fireEvent.pointerDown(track, { clientX: 40, clientY: 0 })
    expect(onChangeStart).toHaveBeenCalledWith([20, 75])

    fireEvent.pointerMove(window, { clientX: 60, clientY: 0 })
    expect(onChange).toHaveBeenCalledWith([20, 75])

    fireEvent.pointerUp(window, { clientX: 60, clientY: 0 })
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

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, { left: 0, width: 200 })

    fireEvent.pointerDown(track, { clientX: 160, clientY: 0 })
    expect(onChangeStart).toHaveBeenCalledWith([25, 80])

    fireEvent.pointerUp(window, { clientX: 160, clientY: 0 })
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

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, { left: 0, width: 200 })

    fireEvent.pointerDown(track, { clientX: 100, clientY: 0 })
    fireEvent.pointerMove(window, { clientX: 120, clientY: 0 })
    fireEvent.pointerUp(window, { clientX: 120, clientY: 0 })

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

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, { bottom: 200, height: 200, top: 0 })

    fireEvent.pointerDown(track, { clientX: 0, clientY: 60 })
    expect(onChange).toHaveBeenCalledWith(70)

    fireEvent.pointerUp(window, { clientX: 0, clientY: 60 })

    cleanup()
  })
})
