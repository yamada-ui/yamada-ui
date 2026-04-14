type VisualTestGlobal = typeof globalThis & {
  __YAMADA_UI_FIXED_DATE_APPLIED__?: boolean
  __YAMADA_UI_VISUAL_TEST__?: boolean
  IS_CHROMATIC?: boolean
}

interface SetupFixedDateOptions {
  envValue?: string
  globalObject?: VisualTestGlobal
}

export const VISUAL_TEST_FIXED_NOW = Date.UTC(2025, 3, 15, 13, 24, 36)

export const isVisualTest = (
  globalObject: VisualTestGlobal,
  envValue?: string,
) => {
  if (envValue === "true") return true
  if (globalObject.__YAMADA_UI_VISUAL_TEST__) return true
  if (globalObject.IS_CHROMATIC) return true

  const search = globalObject.location.search

  if (!search) return false

  const params = new URLSearchParams(search)

  return params.get("visual-test") === "true"
}

export const setupFixedDateForVisualTest = ({
  envValue,
  globalObject = globalThis as VisualTestGlobal,
}: SetupFixedDateOptions = {}) => {
  if (
    !isVisualTest(globalObject, envValue) ||
    globalObject.__YAMADA_UI_FIXED_DATE_APPLIED__
  ) {
    return false
  }

  const RealDate = globalObject.Date

  class MockDate extends RealDate {
    constructor(...args: unknown[]) {
      if (!args.length) {
        super(VISUAL_TEST_FIXED_NOW)

        return
      }

      super(...(args as ConstructorParameters<typeof Date>))
    }

    static now() {
      return VISUAL_TEST_FIXED_NOW
    }
  }

  globalObject.Date = MockDate as DateConstructor
  globalObject.__YAMADA_UI_FIXED_DATE_APPLIED__ = true

  return true
}
