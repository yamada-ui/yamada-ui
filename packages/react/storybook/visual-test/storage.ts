import type { VisualTestGlobal, VisualTestStorage } from "./types"

export const clearStorageForVisualTest = (storage?: VisualTestStorage) => {
  try {
    storage?.clear()
  } catch {}
}

export const clearCookiesForVisualTest = (globalObject: VisualTestGlobal) => {
  try {
    const cookies = globalObject.document?.cookie

    if (!cookies) return

    cookies.split(";").forEach((cookie) => {
      const key = cookie.split("=")[0]?.trim()

      if (!key) return

      globalObject.document!.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
    })
  } catch {}
}
