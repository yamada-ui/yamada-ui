import type { SetupFixedDateOptions, VisualTestGlobal } from "./types"
import { VISUAL_TEST_FIXED_NOW } from "./constants"
import { isVisualTest } from "./detection"

export const setupFixedDateForVisualTest = ({
  envValue,
  globalObject = globalThis as unknown as VisualTestGlobal,
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
