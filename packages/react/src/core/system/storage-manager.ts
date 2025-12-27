"use client"

export type Storage = "cookie" | "localStorage"

const hasSupport = !!(globalThis.document as Document | undefined)

function parseCookie<Y extends string>(
  cookie: string,
  key: string,
): undefined | Y {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

  return match?.[2] as undefined | Y
}

export interface StorageManager<Y extends string, M extends Y> {
  default(value: M): M
  get(value?: Y): Y
  set(value: Y): void
}

export function createStorageManager<Y extends string, M extends Y>(
  storage: Storage,
  storageKey: string,
  defaultValue: Y,
  cookie?: string,
): StorageManager<Y, M> {
  return {
    default(value) {
      const defaultStorageKey = `default-${storageKey}`

      if (cookie) return parseCookie(cookie, defaultStorageKey) || value

      if (storage === "localStorage") {
        try {
          return (localStorage.getItem(defaultStorageKey) as M | null) || value
        } catch {
          return value
        }
      } else {
        if (!hasSupport) return value

        return parseCookie(document.cookie, defaultStorageKey) || value
      }
    },
    get(value = defaultValue) {
      if (cookie) return parseCookie(cookie, storageKey) || value

      if (storage === "localStorage") {
        try {
          return (localStorage.getItem(storageKey) as null | Y) || value
        } catch {
          return value
        }
      } else {
        if (!hasSupport) return value

        return parseCookie(document.cookie, storageKey) || value
      }
    },
    set(value: Y) {
      if (storage === "localStorage") {
        localStorage.setItem(storageKey, value)
      } else {
        document.cookie = `${storageKey}=${value}; max-age=31536000; path=/`
      }
    },
  }
}
