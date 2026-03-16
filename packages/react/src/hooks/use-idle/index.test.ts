import { renderHook } from "#test/browser"
import { useIdle } from "./"

describe("useIdle", () => {
  test("initial state is true", async () => {
    const { result } = await renderHook(() => useIdle(50))
    expect(result.current).toBeTruthy()
  })

  test("becomes true after specified time has elapsed following an event", async () => {
    const { act, result } = await renderHook(() => useIdle(100))

    await act(() => {
      document.dispatchEvent(new Event("mousemove"))
    })
    expect(result.current).toBeFalsy()

    await expect.poll(() => result.current).toBeTruthy()
  })

  test("is false while events are occurring", async () => {
    const { act, result } = await renderHook(() => useIdle(100))

    await act(() => {
      document.dispatchEvent(new Event("mousemove"))
    })
    expect(result.current).toBeFalsy()

    await act(() => {
      document.dispatchEvent(new Event("keypress"))
    })
    expect(result.current).toBeFalsy()
  })

  test("can detect idle state with custom events", async () => {
    const customEvents: (keyof DocumentEventMap)[] = ["mousedown", "wheel"]
    const { act, result } = await renderHook(() =>
      useIdle(50, { events: customEvents }),
    )

    await act(() => {
      document.dispatchEvent(new Event("mousedown"))
    })

    await expect.poll(() => result.current).toBeTruthy()

    await act(() => {
      document.dispatchEvent(new Event("wheel"))
    })

    await expect.poll(() => result.current).toBeTruthy()
  })
})
