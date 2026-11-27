import { execFile } from "node:child_process"
import { promisify } from "node:util"
import { useLayoutEffect } from "react"
import { renderHook } from "#test"
import {
  useSafeLayoutEffect,
  useUnmountEffect,
  useUpdateEffect,
} from "./effect"

describe("useSafeLayoutEffect", () => {
  test("should use useLayoutEffect when document is defined", () => {
    expect(useSafeLayoutEffect).toBe(useLayoutEffect)
  })

  test("should use useEffect when document is not defined", async () => {
    const { stdout } = await promisify(execFile)(process.execPath, [
      "--input-type=module",
      "--eval",
      `
        import { useEffect } from ${JSON.stringify(import.meta.resolve("react"))}
        import { useSafeLayoutEffect } from ${JSON.stringify(import.meta.resolve("./effect.ts"))}

        process.stdout.write(String(useSafeLayoutEffect === useEffect))
      `,
    ])

    expect(stdout).toBe("true")
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
