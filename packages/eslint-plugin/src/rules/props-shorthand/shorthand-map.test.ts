import { getShorthandMap } from "./shorthand-map"

describe("getShorthandMap", () => {
  test("returns the same cached instance on subsequent calls", () => {
    const first = getShorthandMap()
    const second = getShorthandMap()
    expect(second).toBe(first)
  })

  test("shorthandToLonghand contains well-known shorthand props", () => {
    const { shorthandToLonghand } = getShorthandMap()
    expect(shorthandToLonghand.has("m")).toBe(true)
    expect(shorthandToLonghand.has("p")).toBe(true)
    expect(shorthandToLonghand.has("bg")).toBe(true)
    expect(shorthandToLonghand.has("flexDir")).toBe(true)
  })

  test("shorthandToLonghand does not contain longhand prop names", () => {
    const { shorthandToLonghand } = getShorthandMap()
    expect(shorthandToLonghand.has("margin")).toBe(false)
    expect(shorthandToLonghand.has("padding")).toBe(false)
    expect(shorthandToLonghand.has("background")).toBe(false)
    expect(shorthandToLonghand.has("flexDirection")).toBe(false)
  })

  test("shorthandToLonghand does not contain non-style identifiers", () => {
    const { shorthandToLonghand } = getShorthandMap()
    expect(shorthandToLonghand.has("onClick")).toBe(false)
    expect(shorthandToLonghand.has("children")).toBe(false)
  })

  test("shorthandToLonghand maps each shorthand to its longhand counterpart", () => {
    const { shorthandToLonghand } = getShorthandMap()
    expect(shorthandToLonghand.get("m")).toBe("margin")
    expect(shorthandToLonghand.get("p")).toBe("padding")
    expect(shorthandToLonghand.get("bg")).toBe("background")
    expect(shorthandToLonghand.get("flexDir")).toBe("flexDirection")
  })

  test("shorthandToLonghand maps multi-property shorthands to their multi-property longhand, not a single CSS property", () => {
    const { shorthandToLonghand } = getShorthandMap()
    expect(shorthandToLonghand.get("mx")).toBe("marginX")
    expect(shorthandToLonghand.get("my")).toBe("marginY")
    expect(shorthandToLonghand.get("px")).toBe("paddingX")
    expect(shorthandToLonghand.get("py")).toBe("paddingY")
    expect(shorthandToLonghand.get("roundedTop")).toBe("borderTopRadius")
    expect(shorthandToLonghand.get("roundedBottom")).toBe("borderBottomRadius")
    expect(shorthandToLonghand.get("roundedLeft")).toBe("borderLeftRadius")
    expect(shorthandToLonghand.get("roundedRight")).toBe("borderRightRadius")
  })

  test("shorthandToLonghand returns undefined for non-shorthand names", () => {
    const { shorthandToLonghand } = getShorthandMap()
    expect(shorthandToLonghand.get("margin")).toBeUndefined()
    expect(shorthandToLonghand.get("unknown")).toBeUndefined()
  })

  test("longhandToShorthands maps each longhand to all matching shorthands", () => {
    const { longhandToShorthands } = getShorthandMap()
    expect(longhandToShorthands.get("margin")).toEqual(["m"])
    expect(longhandToShorthands.get("padding")).toEqual(["p"])
    expect(longhandToShorthands.get("flexDirection")).toEqual(["flexDir"])
  })

  test("longhandToShorthands does not list multi-property shorthands under single CSS-property longhands", () => {
    const { longhandToShorthands } = getShorthandMap()
    expect(longhandToShorthands.get("marginInlineStart")).not.toContain("mx")
    expect(longhandToShorthands.get("marginTop")).not.toContain("my")
    expect(longhandToShorthands.get("paddingInlineStart")).not.toContain("px")
    expect(longhandToShorthands.get("paddingTop")).not.toContain("py")
    expect(longhandToShorthands.get("borderTopLeftRadius")).not.toContain(
      "roundedTop",
    )
  })

  test.each([
    ["backgroundImage", ["bgGradient", "bgImage", "bgImg"]],
    ["backgroundPositionX", ["bgPositionX", "bgPosX"]],
    ["backgroundPositionY", ["bgPositionY", "bgPosY"]],
    ["borderEndEndRadius", ["borderBottomEndRadius", "roundedBottomEnd"]],
    ["borderEndStartRadius", ["borderBottomStartRadius", "roundedBottomStart"]],
    ["borderInlineEndRadius", ["borderEndRadius", "roundedEnd"]],
    ["borderInlineStartRadius", ["borderStartRadius", "roundedStart"]],
    ["borderStartEndRadius", ["borderTopEndRadius", "roundedTopEnd"]],
    ["borderStartStartRadius", ["borderTopStartRadius", "roundedTopStart"]],
    ["columnGap", ["gapX", "gx"]],
    ["marginInlineEnd", ["marginEnd", "me"]],
    ["marginInlineStart", ["marginStart", "ms"]],
    ["paddingInlineEnd", ["paddingEnd", "pe"]],
    ["paddingInlineStart", ["paddingStart", "ps"]],
    ["rowGap", ["gapY", "gy"]],
  ])(
    "longhandToShorthands pins multi-mapped longhand %s",
    (longhand, shorthands) => {
      const { longhandToShorthands } = getShorthandMap()
      expect(longhandToShorthands.get(longhand)).toEqual(shorthands)
    },
  )

  test("longhandToShorthands returns undefined for unknown longhands", () => {
    const { longhandToShorthands } = getShorthandMap()
    expect(longhandToShorthands.get("notARealProp")).toBeUndefined()
  })

  test("every shorthand-to-longhand mapping is reflected back in longhand-to-shorthands", () => {
    const { longhandToShorthands, shorthandToLonghand } = getShorthandMap()
    for (const [short, long] of shorthandToLonghand) {
      expect(longhandToShorthands.get(long)).toContain(short)
    }
  })
})
