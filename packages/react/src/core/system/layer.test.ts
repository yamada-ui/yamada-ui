import { createLayers, defaultLayers } from "./layer"

describe("createLayers", () => {
  test("returns defaultLayers when layers is false", () => {
    const result = createLayers(false)
    expect(result).toBe(defaultLayers)
  })

  test("creates layers with correct names and atRule", () => {
    const config = {
      size: { name: "yamada-size", order: 2 },
      variant: { name: "yamada-variant", order: 3 },
      base: { name: "yamada-base", order: 1 },
    } as any
    const result = createLayers(config)
    expect(result.names).toStrictEqual([
      "yamada-base",
      "yamada-size",
      "yamada-variant",
    ])
    expect(result.atRule).toBe(
      "@layer yamada-base, yamada-size, yamada-variant;",
    )
  })

  test("wrap wraps style in @layer", () => {
    const config = {
      size: { name: "yamada-size", order: 2 },
      variant: { name: "yamada-variant", order: 3 },
      base: { name: "yamada-base", order: 1 },
    } as any
    const result = createLayers(config)
    const wrapped = result.wrap("base", { color: "red" })
    expect(wrapped).toStrictEqual({
      "@layer yamada-base": { color: "red" },
    })
  })

  test("wrap handles function-style style", () => {
    const config = {
      base: { name: "yamada-base", order: 1 },
    } as any
    const result = createLayers(config)
    const wrapped = result.wrap("base", () => ({ color: "blue" }))
    expect(wrapped).toStrictEqual({
      "@layer yamada-base": { color: "blue" },
    })
  })

  test("getAtRule returns correct at-rule string", () => {
    const config = {
      base: { name: "yamada-base", order: 1 },
    } as any
    const result = createLayers(config)
    expect(result.getAtRule?.("base")).toBe("@layer yamada-base")
  })
})

describe("defaultLayers", () => {
  test("has no atRule", () => {
    expect(defaultLayers.atRule).toBeUndefined()
  })

  test("has empty names", () => {
    expect(defaultLayers.names).toStrictEqual([])
  })

  test("wrap returns style as-is", () => {
    const style = { color: "red" }
    expect(defaultLayers.wrap("base", style)).toStrictEqual(style)
  })

  test("wrap handles undefined style", () => {
    expect(defaultLayers.wrap("base")).toStrictEqual({})
  })
})
