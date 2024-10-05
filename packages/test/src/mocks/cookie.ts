export function cookieStorage(key: string, value: null | string) {
  Object.defineProperty(document, "cookie", {
    value: value ? `${key}=${value}` : "",
    writable: true,
  })
}
