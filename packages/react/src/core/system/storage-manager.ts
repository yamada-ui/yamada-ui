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

export interface StorageManager<Y extends string> {
  get: (defaultValue?: Y) => Y
  set: (value: Y) => void
}

export function createStorageManager<Y extends string>(
  storage: Storage,
  storageKey: string,
  defaultValue: Y,
  cookie?: string,
): StorageManager<Y> {
  return {
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
