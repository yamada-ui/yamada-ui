import { renderHook } from "#test/browser"
import { usePromiseDisclosure } from "./use-promise-disclosure"

describe("usePromiseDisclosure", () => {
  test("should initialize with open as false", async () => {
    const { result } = await renderHook(() => usePromiseDisclosure())

    expect(result.current.open).toBeFalsy()
  })

  test("should initialize with open as true", async () => {
    const { result } = await renderHook(() =>
      usePromiseDisclosure({ defaultOpen: true }),
    )

    expect(result.current.open).toBeTruthy()
  })

  test("should open and close correctly with onSuccess", async () => {
    const { act, result } = await renderHook(() => usePromiseDisclosure())

    await act(() => {
      result.current.onOpen()
    })

    expect(result.current.open).toBeTruthy()

    await act(() => {
      result.current.onSuccess()
    })

    expect(result.current.open).toBeFalsy()
  })

  test("should reject the pending promise when onClose is called", async () => {
    const error = new Error("closed")
    const { act, result } = await renderHook(() =>
      usePromiseDisclosure({ error }),
    )

    let promise: Promise<void> | undefined

    await act(() => {
      const p = result.current.onOpen()
      if (p instanceof Promise) {
        promise = p
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        promise.catch(() => {})
      }
    })

    expect(result.current.open).toBeTruthy()

    await act(() => {
      result.current.onClose()
    })

    await expect(promise).rejects.toThrow("closed")
    expect(result.current.open).toBeFalsy()
  })

  test("should handle disableCloseOnSuccess correctly", async () => {
    const { act, result } = await renderHook(() =>
      usePromiseDisclosure({ disableCloseOnSuccess: true }),
    )

    await act(() => {
      result.current.onOpen()
    })

    expect(result.current.open).toBeTruthy()

    await act(() => {
      result.current.onSuccess()
    })

    expect(result.current.open).toBeTruthy()
  })
})
