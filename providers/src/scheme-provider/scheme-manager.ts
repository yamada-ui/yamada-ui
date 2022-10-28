import { Scheme } from '@yamada-ui/styled'
import { createdDom } from '@yamada-ui/utils'

const hasSupport = () => typeof Storage !== 'undefined'

export const storageKey = 'ui-scheme'

export type SchemeManager = {
  get(init?: Scheme): Scheme
  set(value: Scheme): void
  type: 'cookie' | 'localStorage'
}

export const localStorageManager: SchemeManager = {
  get(init = 'light') {
    if (!hasSupport()) return init

    try {
      const value = localStorage.getItem(storageKey) as Scheme

      return value ?? init
    } catch (e) {
      return init
    }
  },

  set(value) {
    if (!hasSupport()) return

    try {
      localStorage.setItem(storageKey, value)
    } catch (e) {}
  },

  type: 'localStorage',
}

export const cookieStorageManager = (cookies = ''): SchemeManager => ({
  get(init = 'light') {
    const match = cookies.match(new RegExp(`(^| )${storageKey}=([^;]+)`))

    return (match?.[2] ?? init) as Scheme
  },

  set(value) {
    document.cookie = `${storageKey}=${value}; max-age=31536000; path=/`
  },

  type: 'cookie',
})

export type RootManager = {
  get(): Scheme | undefined
  set(value: Scheme): void
}

export const rootManager: RootManager = {
  get: () =>
    (document.documentElement.style.getPropertyValue('color-scheme') ||
      document.documentElement.dataset.theme) as Scheme | undefined,

  set: (value: Scheme) => {
    const isBrowser = createdDom()

    if (isBrowser) {
      document.documentElement.style.setProperty('color-scheme', value)
      document.documentElement.setAttribute('data-theme', value)
    }
  },
}
