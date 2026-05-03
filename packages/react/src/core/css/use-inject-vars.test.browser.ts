import { renderHook } from "#test/browser"
import { useInjectVarsIntoCss, useInjectVarsIntoProps } from "./use-inject-vars"

describe("useInjectVarsIntoCss", () => {
  test("injects values into css", async () => {
    const css = { opacity: "1" }
    const { result } = await renderHook(() =>
      useInjectVarsIntoCss(css, { opacity: "opacity" }),
    )
    expect(result.current).toStrictEqual({ "--opacity": "1" })
  })
})

describe("useInjectVarsIntoProps", () => {
  test("injects values into props", async () => {
    const props = { opacity: "1" }
    const { result } = await renderHook(() =>
      useInjectVarsIntoProps(props, { opacity: "opacity" }),
    )
    expect(result.current).toStrictEqual({ "--opacity": "1" })
  })
})
