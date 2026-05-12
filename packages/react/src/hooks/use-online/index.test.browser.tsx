import { renderHook } from "#test/browser"
import { useOnline } from "./"

describe("useOnline", () => {
  const onLineSpy = vi.spyOn(window.navigator, "onLine", "get")

  afterEach(() => {
    onLineSpy.mockReset()
  })

  test("returns true when the browser is online", async () => {
    onLineSpy.mockReturnValue(true)

    const { result } = await renderHook(() => useOnline())

    expect(result.current).toBeTruthy()
  })

  test("returns false when the browser is offline", async () => {
    onLineSpy.mockReturnValue(false)

    const { result } = await renderHook(() => useOnline())

    expect(result.current).toBeFalsy()
  })

  test("updates when the browser goes offline", async () => {
    onLineSpy.mockReturnValue(true)

    const { act, result } = await renderHook(() => useOnline())

    expect(result.current).toBeTruthy()

    await act(() => {
      onLineSpy.mockReturnValue(false)
      window.dispatchEvent(new Event("offline"))
    })

    expect(result.current).toBeFalsy()
  })

  test("updates when the browser goes online", async () => {
    onLineSpy.mockReturnValue(false)

    const { act, result } = await renderHook(() => useOnline())

    expect(result.current).toBeFalsy()

    await act(() => {
      onLineSpy.mockReturnValue(true)
      window.dispatchEvent(new Event("online"))
    })

    expect(result.current).toBeTruthy()
  })

  test("stops reacting to events after unmount", async () => {
    onLineSpy.mockReturnValue(true)
    const addEventListenerSpy = vi.spyOn(window, "addEventListener")
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener")

    const { act, result, unmount } = await renderHook(() => useOnline())

    expect(result.current).toBeTruthy()

    const onlineAddCall = addEventListenerSpy.mock.calls.find(
      (call) => call[0] === "online",
    )
    const offlineAddCall = addEventListenerSpy.mock.calls.find(
      (call) => call[0] === "offline",
    )

    expect(onlineAddCall).toBeDefined()
    expect(offlineAddCall).toBeDefined()

    unmount()

    expect(
      removeEventListenerSpy.mock.calls.some(
        (call) => call[0] === "online" && call[1] === onlineAddCall?.[1],
      ),
    ).toBeTruthy()
    expect(
      removeEventListenerSpy.mock.calls.some(
        (call) => call[0] === "offline" && call[1] === offlineAddCall?.[1],
      ),
    ).toBeTruthy()

    await act(() => {
      onLineSpy.mockReturnValue(false)
      window.dispatchEvent(new Event("offline"))
    })

    expect(result.current).toBeTruthy()
  })
})
