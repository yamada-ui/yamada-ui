import { describe, expect, test, vi } from "vitest"
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

  test("Falls back to RTL_SCRIPTS when textInfo is not available", () => {
    const OriginalLocale = Intl.Locale

    vi.spyOn(globalThis, "Intl", "get").mockReturnValue({
      ...Intl,
      Locale: class MockLocale {
        script?: string
        language: string

        constructor(locale: string) {
          const real = new OriginalLocale(locale)
          this.language = real.language
        }

        maximize() {
          const real = new OriginalLocale(this.language).maximize()

          return {
            language: real.language,
            script: real.script,
          }
        }
      },
    } as typeof Intl)

    expect(isRtl("ar")).toBeTruthy()
    expect(isRtl("en")).toBeFalsy()

    vi.restoreAllMocks()
  })

  test("Falls back to RTL_LANGS when script is not available", () => {
    const OriginalLocale = Intl.Locale

    vi.spyOn(globalThis, "Intl", "get").mockReturnValue({
      ...Intl,
      Locale: class MockLocale {
        language: string

        constructor(locale: string) {
          const real = new OriginalLocale(locale)
          this.language = real.language
        }

        maximize() {
          return {
            language: this.language,
          }
        }
      },
    } as typeof Intl)

    expect(isRtl("ar")).toBeTruthy()
    expect(isRtl("en")).toBeFalsy()

    vi.restoreAllMocks()
  })
})
