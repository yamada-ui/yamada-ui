import type { Ref } from "react"
import { act, renderHook } from "#test"
import { useCarousel } from "./use-carousel"

const mockState = vi.hoisted(() => {
  return {
    canScrollNext: vi.fn(() => true),
    off: vi.fn(),
    scrollNext: vi.fn(),
    on: vi.fn(),
  }
})

vi.mock("embla-carousel-react", () => ({
  default: () => [
    vi.fn(),
    {
      canScrollNext: mockState.canScrollNext,
      canScrollPrev: vi.fn(() => false),
      off: mockState.off,
      reInit: vi.fn(),
      scrollNext: mockState.scrollNext,
      scrollPrev: vi.fn(),
      scrollProgress: vi.fn(() => 0),
      scrollTo: vi.fn(),
      selectedScrollSnap: vi.fn(() => 0),
      on: mockState.on,
    },
  ],
}))

function invokeCallbackRef<T>(ref: Ref<T> | undefined, node: null | T) {
  if (typeof ref === "function") ref(node)
}

function invokeHandler<E>(handler: ((event: E) => void) | undefined, event: E) {
  handler?.(event)
}

describe("useCarousel getRootProps", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    mockState.canScrollNext.mockReset()
    mockState.canScrollNext.mockReturnValue(true)
    mockState.off.mockReset()
    mockState.on.mockReset()
    mockState.scrollNext.mockReset()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test("merges hook defaults with user props via mergeProps", () => {
    const hookRef = vi.fn()
    const userRef = vi.fn()
    const hookOnMouseEnter = vi.fn()
    const hookOnMouseLeave = vi.fn()
    const userOnMouseEnter = vi.fn()
    const userOnMouseLeave = vi.fn()
    const { result } = renderHook(() =>
      useCarousel({
        id: "hook-id",
        ref: hookRef,
        className: "hook",
        style: { color: "red" },
        "data-testid": "carousel-root",
        autoplay: true,
        delay: 20,
        orientation: "vertical",
        onMouseEnter: hookOnMouseEnter,
        onMouseLeave: hookOnMouseLeave,
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      ref: userRef,
      className: "user",
      style: { backgroundColor: "blue" },
      onMouseEnter: userOnMouseEnter,
      onMouseLeave: userOnMouseLeave,
    })
    const node = document.createElement("section")
    const enterEvent = new MouseEvent("mouseenter")
    const leaveEvent = new MouseEvent("mouseleave")

    expect(typeof merged.ref).toBe("function")

    invokeCallbackRef(merged.ref, node)
    invokeCallbackRef(merged.ref, null)

    expect(hookRef).toHaveBeenCalledTimes(2)
    expect(hookRef).toHaveBeenNthCalledWith(1, node)
    expect(hookRef).toHaveBeenNthCalledWith(2, null)
    expect(userRef).toHaveBeenCalledTimes(2)
    expect(userRef).toHaveBeenNthCalledWith(1, node)
    expect(userRef).toHaveBeenNthCalledWith(2, null)

    act(() => {
      vi.advanceTimersByTime(20)
    })
    expect(mockState.scrollNext).toHaveBeenCalledTimes(1)

    act(() => {
      invokeHandler(merged.onMouseEnter, enterEvent as never)
    })

    expect(hookOnMouseEnter).toHaveBeenCalledTimes(1)
    expect(hookOnMouseEnter).toHaveBeenCalledWith(enterEvent)
    expect(userOnMouseEnter).toHaveBeenCalledTimes(1)
    expect(userOnMouseEnter).toHaveBeenCalledWith(enterEvent)

    act(() => {
      vi.advanceTimersByTime(40)
    })
    expect(mockState.scrollNext).toHaveBeenCalledTimes(1)

    act(() => {
      invokeHandler(merged.onMouseLeave, leaveEvent as never)
    })

    expect(hookOnMouseLeave).toHaveBeenCalledTimes(1)
    expect(hookOnMouseLeave).toHaveBeenCalledWith(leaveEvent)
    expect(userOnMouseLeave).toHaveBeenCalledTimes(1)
    expect(userOnMouseLeave).toHaveBeenCalledWith(leaveEvent)

    act(() => {
      vi.advanceTimersByTime(20)
    })
    expect(mockState.scrollNext).toHaveBeenCalledTimes(2)

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged.style).toStrictEqual({
      backgroundColor: "blue",
      color: "red",
    })
    expect(merged["data-orientation"]).toBe("vertical")
    expect(merged["data-testid"]).toBe("carousel-root")
    expect(merged["aria-roledescription"]).toBe("carousel")
  })
})
