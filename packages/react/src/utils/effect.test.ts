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

  test("should use useEffect when document is not defined", async () => {
    vi.resetModules()

    const originalDocument = globalThis.document
    // @ts-ignore
    delete globalThis.document

    try {
      const { useSafeLayoutEffect: ssrEffect } = await import("./effect")
      const React = await import("react")

      expect(ssrEffect).toBe(React.useEffect)
    } finally {
      globalThis.document = originalDocument
    }
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

  test("should call effect on dependency change", () => {
    const effect = vi.fn()
    const { rerender } = renderHook(
      ({ dep }) => useUpdateEffect(effect, [dep]),
      { initialProps: { dep: 0 } },
    )

    expect(effect).not.toHaveBeenCalled()

    rerender({ dep: 1 })
    expect(effect).toHaveBeenCalledTimes(1)
  })
})
