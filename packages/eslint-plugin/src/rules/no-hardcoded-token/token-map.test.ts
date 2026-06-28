import { getPropTokenScaleMap, getValueToTokenMap } from "./token-map"

describe("getPropTokenScaleMap", () => {
  test("maps standard props to their token scale", () => {
    const map = getPropTokenScaleMap()
    expect(map.get("padding")).toBe("spaces")
    expect(map.get("color")).toBe("colors")
  })

  test("maps shorthand props to their token scale", () => {
    const map = getPropTokenScaleMap()
    expect(map.get("p")).toBe("spaces")
    expect(map.get("bg")).toBe("colors")
  })

  test("does not include props without a token scale", () => {
    const map = getPropTokenScaleMap()
    expect(map.has("display")).toBe(false)
    expect(map.has("flexDirection")).toBe(false)
  })

  test("does not include borderWidth which has no token scale", () => {
    const map = getPropTokenScaleMap()
    expect(map.has("borderWidth")).toBe(false)
  })
})

describe("getValueToTokenMap", () => {
  test("spaces scale reverse lookup", () => {
    const scaleMap = getValueToTokenMap().get("spaces")
    expect(scaleMap?.get("0.25rem")).toBe("1")
  })

  test("fontSizes scale reverse lookup", () => {
    const scaleMap = getValueToTokenMap().get("fontSizes")
    expect(scaleMap?.get("0.75rem")).toBe("xs")
  })

  test("colors scale reverse lookup for hex value", () => {
    const scaleMap = getValueToTokenMap().get("colors")
    expect(scaleMap?.get("#e2edfd")).toBe("blue.50")
  })

  test("fontWeights scale numeric value reverse lookup", () => {
    const scaleMap = getValueToTokenMap().get("fontWeights")
    expect(scaleMap?.get("700")).toBe("bold")
  })

  test("stored hex keys are normalized to lowercase", () => {
    const scaleMap = getValueToTokenMap().get("colors")
    expect(scaleMap?.get("#e2edfd")).toBe("blue.50")
  })

  test("colors blackAlpha reverse lookup", () => {
    const scaleMap = getValueToTokenMap().get("colors")
    expect(scaleMap?.get("rgb(0, 0, 0/ .05)")).toBe("blackAlpha.50")
  })

  test("colors whiteAlpha reverse lookup", () => {
    const scaleMap = getValueToTokenMap().get("colors")
    expect(scaleMap?.get("rgb(255, 255, 255/ .05)")).toBe("whiteAlpha.50")
  })

  test("excluded scales are not present in the map", () => {
    const map = getValueToTokenMap()
    expect(map.has("shadows")).toBe(false)
    expect(map.has("fonts")).toBe(false)
    expect(map.has("animations")).toBe(false)
    expect(map.has("keyframes")).toBe(false)
    expect(map.has("gradients")).toBe(false)
    expect(map.has("semanticTokens")).toBe(false)
    expect(map.has("styles")).toBe(false)
    expect(map.has("breakpoints")).toBe(false)
  })
})

describe("cache", () => {
  test("getPropTokenScaleMap returns the same instance on subsequent calls", () => {
    expect(getPropTokenScaleMap()).toBe(getPropTokenScaleMap())
  })

  test("getValueToTokenMap returns the same instance on subsequent calls", () => {
    expect(getValueToTokenMap()).toBe(getValueToTokenMap())
  })
})
