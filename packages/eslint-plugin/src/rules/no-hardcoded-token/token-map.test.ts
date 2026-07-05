import { getPropTokenScaleMap, getValueToTokenMap } from "./token-map"

describe("getPropTokenScaleMap", () => {
  // 正式名の prop がトークンスケールにマッピングされる
  test("maps standard props to their token scale", () => {
    const map = getPropTokenScaleMap()
    expect(map.get("padding")).toBe("spaces")
    expect(map.get("color")).toBe("colors")
  })

  // 省略形の prop も同じトークンスケールにマッピングされる
  test("maps shorthand props to their token scale", () => {
    const map = getPropTokenScaleMap()
    expect(map.get("p")).toBe("spaces")
    expect(map.get("bg")).toBe("colors")
  })

  // トークンスケールを持たない prop はマップに含まれない
  test("does not include props without a token scale", () => {
    const map = getPropTokenScaleMap()
    expect(map.has("display")).toBe(false)
    expect(map.has("flexDirection")).toBe(false)
  })

  // トークンスケールを持たない borderWidth はマップに含まれない
  test("does not include borderWidth which has no token scale", () => {
    const map = getPropTokenScaleMap()
    expect(map.has("borderWidth")).toBe(false)
  })
})

describe("getValueToTokenMap", () => {
  // spaces スケールの逆引き（CSS 実値 → トークンキー）
  test("spaces scale reverse lookup", () => {
    const scaleMap = getValueToTokenMap().get("spaces")
    expect(scaleMap?.get("0.25rem")).toBe("1")
  })

  // fontSizes スケールの逆引き
  test("fontSizes scale reverse lookup", () => {
    const scaleMap = getValueToTokenMap().get("fontSizes")
    expect(scaleMap?.get("0.75rem")).toBe("xs")
  })

  // colors スケールの hex 値の逆引き（2 階層トークンは "blue.50" 形式）
  test("colors scale reverse lookup for hex value", () => {
    const scaleMap = getValueToTokenMap().get("colors")
    expect(scaleMap?.get("#e2edfd")).toBe("blue.50")
  })

  // fontWeights スケールの数値（文字列化して格納される）の逆引き
  test("fontWeights scale numeric value reverse lookup", () => {
    const scaleMap = getValueToTokenMap().get("fontWeights")
    expect(scaleMap?.get("700")).toBe("bold")
  })

  // 格納される hex キーは小文字に正規化される
  test("stored hex keys are normalized to lowercase", () => {
    const scaleMap = getValueToTokenMap().get("colors")
    expect(scaleMap?.get("#e2edfd")).toBe("blue.50")
  })

  // colors の blackAlpha（rgb 構文の値）の逆引き
  test("colors blackAlpha reverse lookup", () => {
    const scaleMap = getValueToTokenMap().get("colors")
    expect(scaleMap?.get("rgb(0, 0, 0/ .05)")).toBe("blackAlpha.50")
  })

  // colors の whiteAlpha（rgb 構文の値）の逆引き
  test("colors whiteAlpha reverse lookup", () => {
    const scaleMap = getValueToTokenMap().get("colors")
    expect(scaleMap?.get("rgb(255, 255, 255/ .05)")).toBe("whiteAlpha.50")
  })

  // EXCLUDED_SCALES に含まれるスケールはマップに存在しない
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
  // getPropTokenScaleMap は 2 回目以降の呼び出しで同じインスタンスを返す
  test("getPropTokenScaleMap returns the same instance on subsequent calls", () => {
    expect(getPropTokenScaleMap()).toBe(getPropTokenScaleMap())
  })

  // getValueToTokenMap も 2 回目以降の呼び出しで同じインスタンスを返す
  test("getValueToTokenMap returns the same instance on subsequent calls", () => {
    expect(getValueToTokenMap()).toBe(getValueToTokenMap())
  })
})
