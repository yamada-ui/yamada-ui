import { describe, expect, test } from "vitest"
import { isRtl } from "./i18n"

describe("isRtl", () => {
  test("Arabic and Hebrew are recognized as RTL", () => {
    expect(isRtl("ar")).toBeTruthy()
    expect(isRtl("ar-EG")).toBeTruthy()
    expect(isRtl("he")).toBeTruthy()
    expect(isRtl("he-IL")).toBeTruthy()
  })

  test("English and Japanese are recognized as LTR", () => {
    expect(isRtl("en")).toBeFalsy()
    expect(isRtl("en-US")).toBeFalsy()
    expect(isRtl("ja")).toBeFalsy()
    expect(isRtl("ja-JP")).toBeFalsy()
  })
})
