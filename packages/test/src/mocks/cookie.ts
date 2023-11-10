export const cookieStorage = (key: string, value: string | null) => {
  Object.defineProperty(document, "cookie", {
    writable: true,
    value: value ? `${key}=${value}` : "",
  })
}
