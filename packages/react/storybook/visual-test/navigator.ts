import type { VisualTestGlobal } from "./types"

const setNavigatorRuntimeValue = <Y>(
  navigator: NonNullable<VisualTestGlobal["navigator"]>,
  key: "language" | "languages" | "onLine" | "userAgent",
  value: Y,
) => {
  try {
    Object.defineProperty(navigator, key, {
      configurable: true,
      get: () => value,
    })
  } catch {}
}

export const setupNavigatorForVisualTest = (
  globalObject: VisualTestGlobal,
  locale: string,
  online: boolean,
  userAgent: string,
) => {
  const navigator = globalObject.navigator

  if (!navigator) return

  setNavigatorRuntimeValue(navigator, "language", locale)
  setNavigatorRuntimeValue(navigator, "languages", [locale])
  setNavigatorRuntimeValue(navigator, "onLine", online)
  setNavigatorRuntimeValue(navigator, "userAgent", userAgent)
}
