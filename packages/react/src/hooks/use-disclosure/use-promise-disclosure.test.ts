import { act, renderHook } from "../../../test"
import { usePromiseDisclosure } from "./use-promise-disclosure"

describe("usePromiseDisclosure", () => {
  test("should initialize with isOpen as false", () => {
    const { result } = renderHook(() => usePromiseDisclosure())

    expect(result.current.isOpen).toBeFalsy()
  })

  test("should initialize with isOpen as true", () => {
    const { result } = renderHook(() =>
      usePromiseDisclosure({ defaultIsOpen: true }),
    )

    expect(result.current.isOpen).toBeTruthy()
  })

  test("should open and close correctly with onSuccess", () => {
    const { result } = renderHook(() => usePromiseDisclosure())

    act(() => {
      result.current.onOpen()
    })

    expect(result.current.isOpen).toBeTruthy()

    act(() => {
      result.current.onSuccess()
    })

    expect(result.current.isOpen).toBeFalsy()
  })

  test("should handle disableCloseOnSuccess correctly", () => {
    const { result } = renderHook(() =>
      usePromiseDisclosure({ disableCloseOnSuccess: true }),
    )

    act(() => {
      result.current.onOpen()
    })

    expect(result.current.isOpen).toBeTruthy()

    act(() => {
      result.current.onSuccess()
    })

    expect(result.current.isOpen).toBeTruthy()
  })
})
