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

    const { act, result, unmount } = await renderHook(() => useOnline())

    expect(result.current).toBeTruthy()

    unmount()

    await act(() => {
      onLineSpy.mockReturnValue(false)
      window.dispatchEvent(new Event("offline"))
    })

    expect(result.current).toBeTruthy()
  })
})
