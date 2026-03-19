import { runIfFn } from "@yamada-ui/utils"

export function createLocalStorage<Y>(key: string, defaultValue: Y) {
  function get() {
    const value = localStorage.getItem(key)

    if (!value) return defaultValue

    try {
      return JSON.parse(value) as Y
    } catch {
      return defaultValue as Y
    }
  }

  function set(value: ((prev: Y) => Y) | Y) {
    try {
      localStorage.setItem(key, JSON.stringify(runIfFn(value, get())))
    } catch {}
  }

  return [get, set] as const
}
