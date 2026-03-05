import { renderHook } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { useInputBorder } from "./use-input-border"

describe("useInputBorder", () => {
  test("returns undefined vars by default", () => {
    const { result } = renderHook(() => useInputBorder())
    expect(result.current["--error-border-color"]).toBeUndefined()
    expect(result.current["--focus-border-color"]).toBeUndefined()
  })

  test("sets error border color when provided", () => {
    const { result } = renderHook(() =>
      useInputBorder({ errorBorderColor: "red.500" }),
    )
    expect(result.current["--error-border-color"]).toBe("colors.red.500")
    expect(result.current["--focus-border-color"]).toBeUndefined()
  })

  test("sets focus border color when provided", () => {
    const { result } = renderHook(() =>
      useInputBorder({ focusBorderColor: "blue.500" }),
    )
    expect(result.current["--error-border-color"]).toBeUndefined()
    expect(result.current["--focus-border-color"]).toBe("colors.blue.500")
  })

  test("sets both vars when both provided", () => {
    const { result } = renderHook(() =>
      useInputBorder({
        errorBorderColor: "red.500",
        focusBorderColor: "blue.500",
      }),
    )
    expect(result.current["--error-border-color"]).toBe("colors.red.500")
    expect(result.current["--focus-border-color"]).toBe("colors.blue.500")
  })
})
