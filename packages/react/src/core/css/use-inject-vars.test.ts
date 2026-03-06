import { renderHook } from "#test"
import { useInjectVarsIntoCss, useInjectVarsIntoProps } from "./use-inject-vars"

describe("useInjectVarsIntoCss", () => {
  test("injects values into css", () => {
    const css = { opacity: "1" }
    const { result } = renderHook(() =>
      useInjectVarsIntoCss(css, { opacity: "opacity" }),
    )
    expect(result.current).toStrictEqual({ "--opacity": "1" })
  })
})

describe("useInjectVarsIntoProps", () => {
  test("injects values into props", () => {
    const props = { opacity: "1" }
    const { result } = renderHook(() =>
      useInjectVarsIntoProps(props, { opacity: "opacity" }),
    )
    expect(result.current).toStrictEqual({ "--opacity": "1" })
  })
})
