import { act, renderHook } from "#test"
import { usePromiseDisclosure } from "./use-promise-disclosure"

describe("usePromiseDisclosure", () => {
  test("should initialize with open as false", () => {
    const { result } = renderHook(() => usePromiseDisclosure())

    expect(result.current.open).toBeFalsy()
  })

  test("should initialize with open as true", () => {
    const { result } = renderHook(() =>
      usePromiseDisclosure({ defaultOpen: true }),
    )

    expect(result.current.open).toBeTruthy()
  })

  test("should open and close correctly with onSuccess", () => {
    const { result } = renderHook(() => usePromiseDisclosure())

    act(() => {
      result.current.onOpen()
    })

    expect(result.current.open).toBeTruthy()

    act(() => {
      result.current.onSuccess()
    })

    expect(result.current.open).toBeFalsy()
  })

  test("should reject the pending promise when onClose is called", async () => {
    const error = new Error("closed")
    const { result } = renderHook(() => usePromiseDisclosure({ error }))

    let promise: Promise<void>

    act(() => {
      promise = result.current.onOpen() as Promise<void>
    })

    expect(result.current.open).toBeTruthy()

    act(() => {
      result.current.onClose()
    })

    await expect(promise!).rejects.toThrow("closed")
    expect(result.current.open).toBeFalsy()
  })

  test("should handle disableCloseOnSuccess correctly", () => {
    const { result } = renderHook(() =>
      usePromiseDisclosure({ disableCloseOnSuccess: true }),
    )

    act(() => {
      result.current.onOpen()
    })

    expect(result.current.open).toBeTruthy()

    act(() => {
      result.current.onSuccess()
    })

    expect(result.current.open).toBeTruthy()
  })
})
