import { renderHook } from "#test"
import {
  chainProps,
  createShouldForwardProp,
  extractProps,
  isEqualProps,
  mergeProps,
  useExtractProps,
  useSplitProps,
} from "./props"

describe("createShouldForwardProp", () => {
  test("forwards props in the forward list", () => {
    const shouldForward = createShouldForwardProp(["customProp"])
    expect(shouldForward("customProp")).toBeTruthy()
  })

  test("does not forward CSS custom properties (--*)", () => {
    const shouldForward = createShouldForwardProp()
    expect(shouldForward("--custom")).toBeFalsy()
  })

  test("forwards unknown props", () => {
    const shouldForward = createShouldForwardProp()
    expect(shouldForward("onClick")).toBeTruthy()
    expect(shouldForward("id")).toBeTruthy()
  })
})

describe("mergeProps", () => {
  test("merges multiple prop objects", () => {
    const result = mergeProps({ a: 1 }, { b: 2 })()
    expect(result).toStrictEqual({ a: 1, b: 2 })
  })

  test("later props override earlier ones", () => {
    const result = mergeProps({ a: 1 }, { a: 2 })()
    expect(result).toStrictEqual({ a: 2 })
  })

  test("merges event handlers with handlerAll", () => {
    const fn1 = vi.fn()
    const fn2 = vi.fn()
    const result = mergeProps({ onClick: fn1 }, { onClick: fn2 })()
    result.onClick()
    expect(fn1).toHaveBeenCalledWith()
    expect(fn2).toHaveBeenCalledWith()
  })

  test("merges className with cx", () => {
    const result = mergeProps({ className: "foo" }, { className: "bar" })()
    expect(result.className).toContain("foo")
    expect(result.className).toContain("bar")
  })

  test("merges style objects", () => {
    const result = mergeProps(
      { style: { color: "red" } },
      { style: { fontSize: "16px" } },
    )()
    expect(result.style).toStrictEqual({ color: "red", fontSize: "16px" })
  })

  test("merges css into array", () => {
    const result = mergeProps(
      { css: { color: "red" } },
      { css: { fontSize: "16px" } },
    )()
    expect(result.css).toStrictEqual([{ color: "red" }, { fontSize: "16px" }])
  })

  test("appends to existing css array", () => {
    const first = mergeProps(
      { css: { color: "red" } },
      { css: { fontSize: "16px" } },
    )()
    const result = mergeProps(first, { css: { margin: "10px" } })()
    expect(result.css).toStrictEqual([
      { color: "red" },
      { fontSize: "16px" },
      { margin: "10px" },
    ])
  })

  test("does not override with undefined", () => {
    const result = mergeProps({ a: 1 }, { a: undefined })()
    expect(result.a).toBe(1)
  })

  test("can disable merging behaviors", () => {
    const fn1 = vi.fn()
    const fn2 = vi.fn()
    const result = mergeProps(
      { className: "a", style: { color: "red" }, onClick: fn1 },
      { className: "b", style: { color: "blue" }, onClick: fn2 },
    )({
      mergeClassName: false,
      mergeCSS: false,
      mergeEvent: false,
      mergeRef: false,
      mergeStyle: false,
    })
    expect(result.className).toBe("b")
    expect(result.onClick).toBe(fn2)
  })
})

describe("chainProps", () => {
  test("returns identity function when no props", () => {
    const chain = chainProps()()
    expect(chain({ a: 1 } as any)).toStrictEqual({ a: 1 })
  })

  test("merges single props object", () => {
    const chain = chainProps({ a: 1, b: 2 })()
    const result = chain({ b: 3, c: 4 } as any)
    expect(result.a).toBe(1)
    expect(result.b).toBe(3)
    expect(result.c).toBe(4)
  })

  test("applies single callback function", () => {
    const chain = chainProps((props: any) => ({
      ...props,
      extra: true,
    }))()
    const result = chain({ a: 1 } as any)
    expect(result.extra).toBeTruthy()
  })

  test("chains multiple props objects", () => {
    const chain = chainProps({ a: 1 }, { b: 2 })()
    const result = chain({ c: 3 } as any)
    expect(result.a).toBe(1)
    expect(result.b).toBe(2)
    expect(result.c).toBe(3)
  })

  test("chains multiple callback functions", () => {
    const addA = (props: any) => ({ ...props, a: 1 })
    const addB = (props: any) => ({ ...props, b: 2 })
    const chain = chainProps(addA, addB)()
    const result = chain({ c: 3 } as any)
    expect(result.a).toBe(1)
    expect(result.b).toBe(2)
    expect(result.c).toBe(3)
  })
})

describe("isEqualProps", () => {
  test("returns true for equal props", () => {
    expect(isEqualProps({ a: 1 }, { a: 1 })).toBeTruthy()
  })

  test("returns false for different props", () => {
    expect(isEqualProps({ a: 1 }, { a: 2 })).toBeFalsy()
  })

  test("omits specified keys from comparison", () => {
    expect(isEqualProps({ a: 1, b: 2 }, { a: 1, b: 3 }, ["b"])).toBeTruthy()
  })
})

describe("extractProps", () => {
  test("extracts CSS props matching keys", () => {
    const result = extractProps({ color: "red", fontSize: "16px" }, ["color"])
    expect(result).toStrictEqual({ color: "red" })
  })

  test("recursively extracts from nested responsive objects", () => {
    const result = extractProps(
      { _hover: { color: "blue", fontSize: "18px" } },
      ["color"],
    )
    expect(result).toStrictEqual({ _hover: { color: "blue" } })
  })

  test("ignores non-CSS props", () => {
    const result = extractProps({ onClick: vi.fn() }, ["onClick"])
    expect(result).toStrictEqual({})
  })
})

describe("useSplitProps", () => {
  test("splits props based on keys", () => {
    const { result } = renderHook(() =>
      useSplitProps({ id: "test", color: "red", fontSize: "16px" }, [
        "color",
        "fontSize",
      ]),
    )
    const [picked, rest] = result.current
    expect(picked).toStrictEqual({ color: "red", fontSize: "16px" })
    expect(rest).toStrictEqual({ id: "test" })
  })
})

describe("useExtractProps", () => {
  test("extracts props via hook", () => {
    const { result } = renderHook(() =>
      useExtractProps({ color: "red", fontSize: "16px" }, ["color"]),
    )
    expect(result.current).toStrictEqual({ color: "red" })
  })
})
