import { describe, expect, test } from "vitest"
import { i18nCache } from "./i18n-cache"

describe("i18nCache", () => {
  test("returns cached instance on second call with same args", () => {
    const create = i18nCache(Intl.NumberFormat)
    const first = create("en-US", { style: "currency", currency: "USD" })
    const second = create("en-US", { style: "currency", currency: "USD" })

    expect(first).toBe(second)
  })

  test("creates new instance for different locale", () => {
    const create = i18nCache(Intl.NumberFormat)
    const en = create("en-US")
    const ja = create("ja-JP")

    expect(en).not.toBe(ja)
  })

  test("creates new instance for different options", () => {
    const create = i18nCache(Intl.NumberFormat)
    const currency = create("en-US", { style: "currency", currency: "USD" })
    const decimal = create("en-US", { style: "decimal" })

    expect(currency).not.toBe(decimal)
  })
})
