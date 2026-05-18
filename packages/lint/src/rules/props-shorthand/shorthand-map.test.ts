import { describe, expect, test } from "vitest"
import { getShorthandMap } from "./shorthand-map"

describe("getShorthandMap", () => {
  // 2 回目以降の呼び出しでは同じキャッシュインスタンスを返す
  test("returns the same cached instance on subsequent calls", () => {
    const first = getShorthandMap()
    const second = getShorthandMap()
    expect(second).toBe(first)
  })

  // shorthandToLonghand が代表的な shorthand prop（m, p, bg, flexDir など）を持つ
  test("shorthandToLonghand contains well-known shorthand props", () => {
    const { shorthandToLonghand } = getShorthandMap()
    expect(shorthandToLonghand.has("m")).toBe(true)
    expect(shorthandToLonghand.has("p")).toBe(true)
    expect(shorthandToLonghand.has("bg")).toBe(true)
    expect(shorthandToLonghand.has("flexDir")).toBe(true)
  })

  // shorthandToLonghand に longhand prop 名（margin, padding など）は含まれない
  test("shorthandToLonghand does not contain longhand prop names", () => {
    const { shorthandToLonghand } = getShorthandMap()
    expect(shorthandToLonghand.has("margin")).toBe(false)
    expect(shorthandToLonghand.has("padding")).toBe(false)
    expect(shorthandToLonghand.has("background")).toBe(false)
    expect(shorthandToLonghand.has("flexDirection")).toBe(false)
  })

  // shorthandToLonghand にスタイル以外の識別子（onClick, children など）は含まれない
  test("shorthandToLonghand does not contain non-style identifiers", () => {
    const { shorthandToLonghand } = getShorthandMap()
    expect(shorthandToLonghand.has("onClick")).toBe(false)
    expect(shorthandToLonghand.has("children")).toBe(false)
  })

  // shorthandToLonghand が各 shorthand を対応する longhand に対応付ける（m → margin など）
  test("shorthandToLonghand maps each shorthand to its longhand counterpart", () => {
    const { shorthandToLonghand } = getShorthandMap()
    expect(shorthandToLonghand.get("m")).toBe("margin")
    expect(shorthandToLonghand.get("p")).toBe("padding")
    expect(shorthandToLonghand.get("bg")).toBe("background")
    expect(shorthandToLonghand.get("flexDir")).toBe("flexDirection")
  })

  // 複数プロパティ系の shorthand（mx, my など）は、単一 CSS プロパティではなく
  // 対応する複数プロパティ系 longhand（marginX, marginY など）に対応付ける
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

  // shorthandToLonghand は shorthand でない名前（longhand 名や未知の名前）に対して undefined を返す
  test("shorthandToLonghand returns undefined for non-shorthand names", () => {
    const { shorthandToLonghand } = getShorthandMap()
    expect(shorthandToLonghand.get("margin")).toBeUndefined()
    expect(shorthandToLonghand.get("unknown")).toBeUndefined()
  })

  // longhandToShorthands が各 longhand を、対応するすべての shorthand のリストに対応付ける
  test("longhandToShorthands maps each longhand to all matching shorthands", () => {
    const { longhandToShorthands } = getShorthandMap()
    expect(longhandToShorthands.get("margin")).toEqual(["m"])
    expect(longhandToShorthands.get("padding")).toEqual(["p"])
    expect(longhandToShorthands.get("flexDirection")).toEqual(["flexDir"])
  })

  // 単一 CSS プロパティの longhand（marginInlineStart など）に対して、
  // 複数プロパティ系 shorthand（mx, my, px, py, roundedTop）は紐づかない
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

  // 1 つの longhand に複数の shorthand が紐づくケースを、対応関係ごと固定する
  // （ルールが「longhand → 最初の shorthand」を提案するため、配列の並びが意図通りかも検証）
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

  // longhandToShorthands は未知の longhand 名に対して undefined を返す
  test("longhandToShorthands returns undefined for unknown longhands", () => {
    const { longhandToShorthands } = getShorthandMap()
    expect(longhandToShorthands.get("notARealProp")).toBeUndefined()
  })

  // 整合性チェック: shorthand → longhand の対応関係が、必ず longhand → shorthands 側にも反映されている
  test("every shorthand-to-longhand mapping is reflected back in longhand-to-shorthands", () => {
    const { longhandToShorthands, shorthandToLonghand } = getShorthandMap()
    for (const [short, long] of shorthandToLonghand) {
      expect(longhandToShorthands.get(long)).toContain(short)
    }
  })
})
