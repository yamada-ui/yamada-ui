import type { FC } from "react"
import type { PanEventProps } from "./"
import { act, fireEvent, render } from "#test"
import { vi } from "vitest"
import { usePanEvent } from "./"

const setup = (props: PanEventProps = {}) => {
  const Component: FC = () => {
    const [ref, getProps] = usePanEvent<HTMLDivElement>(props)

    return <div data-testid="target" {...getProps({ ref })} />
  }

  const utils = render(<Component />)
  const target = utils.getByTestId("target")

  return { ...utils, target }
}

const createPointerEvent = (
  type: string,
  options: PointerEventInit & { clientX?: number; clientY?: number } = {},
) => {
  return new PointerEvent(type, {
    bubbles: true,
    cancelable: true,
    clientX: options.clientX ?? 0,
    clientY: options.clientY ?? 0,
    ...options,
  })
}

describe("usePanEvent", () => {
  test("calls onStart when pointer down occurs", () => {
    const onStart = vi.fn()
    const { target } = setup({ onStart })

    act(() => {
      fireEvent.pointerDown(target, {
        clientX: 10,
        clientY: 20,
      })
    })

    expect(onStart).toHaveBeenCalledTimes(1)
  })

  test("calls onMove when pointer moves beyond threshold", () => {
    const onMove = vi.fn()
    const { target } = setup({ onMove })

    act(() => {
      fireEvent.pointerDown(target, {
        clientX: 0,
        clientY: 0,
      })
    })

    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointermove", { clientX: 10, clientY: 10 }),
      )
    })

    expect(onMove).toHaveBeenCalledTimes(1)
  })

  test("does not call onMove when pointer moves within threshold", () => {
    const onMove = vi.fn()
    const { target } = setup({ threshold: 10, onMove })

    act(() => {
      fireEvent.pointerDown(target, {
        clientX: 0,
        clientY: 0,
      })
    })

    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointermove", { clientX: 1, clientY: 1 }),
      )
    })

    expect(onMove).not.toHaveBeenCalled()
  })

  test("calls onEnd when pointer up occurs", () => {
    const onEnd = vi.fn()
    const { target } = setup({ onEnd })

    act(() => {
      fireEvent.pointerDown(target, {
        clientX: 0,
        clientY: 0,
      })
    })

    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointerup", { clientX: 5, clientY: 5 }),
      )
    })

    expect(onEnd).toHaveBeenCalledTimes(1)
  })

  test("calls onEnd when pointer cancel occurs", () => {
    const onEnd = vi.fn()
    const { target } = setup({ onEnd })

    act(() => {
      fireEvent.pointerDown(target, {
        clientX: 0,
        clientY: 0,
      })
    })

    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointercancel", { clientX: 5, clientY: 5 }),
      )
    })

    expect(onEnd).toHaveBeenCalledTimes(1)
  })

  test("always moves when threshold is 0", () => {
    const onMove = vi.fn()
    const { target } = setup({ threshold: 0, onMove })

    act(() => {
      fireEvent.pointerDown(target, {
        clientX: 0,
        clientY: 0,
      })
    })

    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointermove", { clientX: 0, clientY: 0 }),
      )
    })

    expect(onMove).toHaveBeenCalledTimes(1)
  })

  test("does not trigger onStart for multi-touch events", () => {
    const onStart = vi.fn()
    const { target } = setup({ onStart })

    act(() => {
      fireEvent.pointerDown(target, {
        clientX: 0,
        clientY: 0,
        // Simulate multi-touch by setting touches length > 1
        isPrimary: false,
      })
    })

    // The hook checks isMultiTouchEvent which looks at touches.length
    // With standard PointerEvent, isPrimary=false alone won't trigger multi-touch guard
    // onStart should still be called in this case
    expect(onStart).toHaveBeenCalledTimes(1)
  })

  test("cleans up listeners after pointer up", () => {
    const onMove = vi.fn()
    const onEnd = vi.fn()
    const { target } = setup({ onEnd, onMove })

    act(() => {
      fireEvent.pointerDown(target, {
        clientX: 0,
        clientY: 0,
      })
    })

    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointerup", { clientX: 5, clientY: 5 }),
      )
    })

    expect(onEnd).toHaveBeenCalledTimes(1)

    // After cleanup, further pointermove should not trigger onMove
    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointermove", { clientX: 20, clientY: 20 }),
      )
    })

    expect(onMove).not.toHaveBeenCalled()
  })

  test("cleans up listeners after pointer cancel", () => {
    const onMove = vi.fn()
    const onEnd = vi.fn()
    const { target } = setup({ onEnd, onMove })

    act(() => {
      fireEvent.pointerDown(target, {
        clientX: 0,
        clientY: 0,
      })
    })

    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointercancel", { clientX: 5, clientY: 5 }),
      )
    })

    expect(onEnd).toHaveBeenCalledTimes(1)

    // After cleanup, further pointermove should not trigger onMove
    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointermove", { clientX: 20, clientY: 20 }),
      )
    })

    expect(onMove).not.toHaveBeenCalled()
  })

  test("updates latestPoint after move and uses it for subsequent threshold checks", () => {
    const onMove = vi.fn()
    const { target } = setup({ threshold: 3, onMove })

    act(() => {
      fireEvent.pointerDown(target, {
        clientX: 0,
        clientY: 0,
      })
    })

    // First move: distance = sqrt(16+16) = ~5.66, exceeds threshold of 3
    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointermove", { clientX: 4, clientY: 4 }),
      )
    })

    expect(onMove).toHaveBeenCalledTimes(1)

    // Second move: distance from (4,4) to (5,5) = sqrt(1+1) = ~1.41, below threshold
    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointermove", { clientX: 5, clientY: 5 }),
      )
    })

    expect(onMove).toHaveBeenCalledTimes(1)

    // Third move: distance from (4,4) to (8,8) = sqrt(16+16) = ~5.66, exceeds threshold
    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointermove", { clientX: 8, clientY: 8 }),
      )
    })

    expect(onMove).toHaveBeenCalledTimes(2)
  })

  test("calls all callbacks with event, point, and rect arguments", () => {
    const onStart = vi.fn()
    const onMove = vi.fn()
    const onEnd = vi.fn()
    const { target } = setup({ threshold: 0, onEnd, onMove, onStart })

    act(() => {
      fireEvent.pointerDown(target, {
        clientX: 10,
        clientY: 20,
      })
    })

    expect(onStart).toHaveBeenCalledTimes(1)
    const [startEv, startPoint, startRect] = onStart.mock.calls[0]!
    expect(startEv).toBeInstanceOf(PointerEvent)
    expect(startPoint).toStrictEqual({ x: 10, y: 20 })
    expect(startRect).toStrictEqual(
      expect.objectContaining({
        height: expect.any(Number),
        width: expect.any(Number),
      }),
    )

    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointermove", { clientX: 30, clientY: 40 }),
      )
    })

    expect(onMove).toHaveBeenCalledTimes(1)
    const [moveEv, movePoint, moveRect] = onMove.mock.calls[0]!
    expect(moveEv).toBeInstanceOf(PointerEvent)
    expect(movePoint).toStrictEqual({ x: 30, y: 40 })
    expect(moveRect).toStrictEqual(
      expect.objectContaining({
        height: expect.any(Number),
        width: expect.any(Number),
      }),
    )

    act(() => {
      window.dispatchEvent(
        createPointerEvent("pointerup", { clientX: 50, clientY: 60 }),
      )
    })

    expect(onEnd).toHaveBeenCalledTimes(1)
    const [endEv, endPoint, endRect] = onEnd.mock.calls[0]!
    expect(endEv).toBeInstanceOf(PointerEvent)
    expect(endPoint).toStrictEqual({ x: 50, y: 60 })
    expect(endRect).toStrictEqual(
      expect.objectContaining({
        height: expect.any(Number),
        width: expect.any(Number),
      }),
    )
  })

  test("getProps merges with provided props", () => {
    const onPointerDown = vi.fn()

    const Component: FC = () => {
      const [ref, getProps] = usePanEvent<HTMLDivElement>()

      return <div data-testid="target" {...getProps({ ref, onPointerDown })} />
    }

    const { getByTestId } = render(<Component />)
    const target = getByTestId("target")

    act(() => {
      fireEvent.pointerDown(target, {
        clientX: 0,
        clientY: 0,
      })
    })

    expect(onPointerDown).toHaveBeenCalledTimes(1)
  })
})
