import { renderHook } from "#test"
import {
  useSafeLayoutEffect,
  useUnmountEffect,
  useUpdateEffect,
} from "./effect"

describe("useSafeLayoutEffect", () => {
  test("should use useLayoutEffect when document is defined", () => {
    expect(useSafeLayoutEffect).toBeDefined()
  })
})

describe("useUnmountEffect", () => {
  test("should call callback on component unmount", () => {
    const mockCallback = vi.fn()
    const { unmount } = renderHook(() => useUnmountEffect(mockCallback))
    unmount()
    expect(mockCallback).toHaveBeenCalledExactlyOnceWith()
  })
})

describe("useUpdateEffect", () => {
  test("should not call effect on initial render", () => {
    const effect = vi.fn()
    renderHook(() => useUpdateEffect(effect, []))
    expect(effect).not.toHaveBeenCalled()
  })
})
