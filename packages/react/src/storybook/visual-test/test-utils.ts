import type { VisualTestGlobal } from "#storybook/visual-test"

interface VisualTestStorage {
  cleared: boolean
  clear: () => void
}

const createStorage = (): VisualTestStorage => {
  return {
    clear() {
      this.cleared = true
    },
    cleared: false,
  }
}

export const createVisualTestGlobal = (search = "") => {
  const localStorage = createStorage()
  const sessionStorage = createStorage()
  const intl = {
    DateTimeFormat: Intl.DateTimeFormat,
    NumberFormat: Intl.NumberFormat,
  } as typeof Intl

  const target = {
    crypto: { randomUUID: () => "runtime-uuid" },
    Date,
    document: {
      cookie: "session=123;theme=light",
      documentElement: { lang: "" },
    },
    Intl: intl,
    localStorage,
    location: { search },
    Math: { random: () => 0.5 },
    navigator: {
      language: "ja-JP",
      languages: ["ja-JP"],
      userAgent: "test-agent",
      onLine: false,
    },
    sessionStorage,
  } satisfies VisualTestGlobal

  return { target, localStorage, sessionStorage }
}
