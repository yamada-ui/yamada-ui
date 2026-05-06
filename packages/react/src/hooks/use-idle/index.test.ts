import { act, renderHook } from "#test"
import { useIdle } from "./"

describe("useIdle", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test("initial state is true", () => {
    const { result } = renderHook(() => useIdle(50))
    expect(result.current).toBeTruthy()
  })

  test("becomes true after specified time has elapsed following an event", () => {
    const { result } = renderHook(() => useIdle(100))

    act(() => {
      document.dispatchEvent(new Event("mousemove"))
    })
    expect(result.current).toBeFalsy()

    act(() => {
      vi.advanceTimersByTime(100)
    })

    expect(result.current).toBeTruthy()
  })

  test("is false while events are occurring", () => {
    const { result } = renderHook(() => useIdle(100))

    act(() => {
      document.dispatchEvent(new Event("mousemove"))
    })
    expect(result.current).toBeFalsy()

    act(() => {
      document.dispatchEvent(new Event("keypress"))
    })
    expect(result.current).toBeFalsy()
  })

  test("can detect idle state with custom events", () => {
    const customEvents: (keyof DocumentEventMap)[] = ["mousedown", "wheel"]
    const { result } = renderHook(() => useIdle(50, { events: customEvents }))

    act(() => {
      document.dispatchEvent(new Event("mousedown"))
    })

    act(() => {
      vi.advanceTimersByTime(50)
    })

    expect(result.current).toBeTruthy()

    act(() => {
      document.dispatchEvent(new Event("wheel"))
    })

    act(() => {
      vi.advanceTimersByTime(50)
    })

    expect(result.current).toBeTruthy()
  })
})
