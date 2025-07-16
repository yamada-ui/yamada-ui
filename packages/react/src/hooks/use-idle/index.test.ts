import { act, renderHook } from "#test"
import { useIdle } from "./"

describe("useIdle", () => {
  beforeAll(() => {
    vi.useFakeTimers()
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  test("initial state is true", () => {
    const { result } = renderHook(() => useIdle(1000))
    expect(result.current).toBeTruthy()
  })

  test("becomes true after specified time has elapsed following an event", () => {
    const { result } = renderHook(() => useIdle(1000))

    act(() => {
      document.dispatchEvent(new Event("mousemove"))
      vi.advanceTimersByTime(500)
    })
    expect(result.current).toBeFalsy()

    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(result.current).toBeTruthy()
  })

  test("is false while events are occurring", () => {
    const { result } = renderHook(() => useIdle(1000))

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
    const { result } = renderHook(() => useIdle(1000, { events: customEvents }))

    act(() => {
      document.dispatchEvent(new Event("mousedown"))
      vi.advanceTimersByTime(1000)
    })
    expect(result.current).toBeTruthy()

    act(() => {
      document.dispatchEvent(new Event("wheel"))
      vi.advanceTimersByTime(1000)
    })
    expect(result.current).toBeTruthy()
  })
})
