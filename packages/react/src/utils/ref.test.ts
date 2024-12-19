import { createRef } from "react"
import { act, renderHook } from "../../test"
import {
  assignRef,
  isRefObject,
  mergeRefs,
  useCallbackRef,
  useMergeRefs,
} from "./ref"

describe("isRefObject", () => {
  test("should return true for ref objects", () => {
    const refObject = { current: null }
    expect(isRefObject(refObject)).toBeTruthy()
  })

  test("should return false for non-ref objects", () => {
    const nonRefObject = { notCurrent: null }
    expect(isRefObject(nonRefObject)).toBeFalsy()
  })

  test("should return false for null", () => {
    expect(isRefObject(null)).toBeFalsy()
  })

  test("should return false for undefined", () => {
    expect(isRefObject(undefined)).toBeFalsy()
  })
})

describe("useMergeRefs", () => {
  test("should merge multiple refs into a single callback ref", () => {
    const ref1 = createRef()
    const ref2 = createRef()

    const { result } = renderHook(() => useMergeRefs(ref1, ref2))

    const el = document.createElement("div")

    act(() => {
      const mergedRef = result.current
      mergedRef(el)
    })

    expect(ref1.current).toBe(el)
    expect(ref2.current).toBe(el)
  })
})

describe("useCallbackRef", () => {
  test("should return a stable callback ref that calls the latest callback", () => {
    let latestValue = 0
    const { result } = renderHook(() =>
      useCallbackRef(() => {
        latestValue += 1
      }),
    )
    act(() => {
      result.current()
    })
    expect(latestValue).toBe(1)
  })
})

describe("assignRef", () => {
  test("should assign a value to a ref object", () => {
    const refObject = { current: null }
    assignRef(refObject, 123)
    expect(refObject.current).toBe(123)
  })

  test("should call a ref callback with a value", () => {
    const refCallback = vi.fn()
    assignRef(refCallback, 123)
    expect(refCallback).toHaveBeenCalledWith(123)
  })
})

describe("mergeRefs", () => {
  test("should merge multiple refs", () => {
    const refObject1 = createRef()
    const refObject2 = createRef()
    const mergedRef = mergeRefs(refObject1, refObject2)
    const el = document.createElement("div")
    mergedRef(el)
    expect(refObject1.current).toBe(el)
    expect(refObject2.current).toBe(el)
  })
})
