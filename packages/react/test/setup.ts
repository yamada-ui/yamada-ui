import { cleanup } from "@testing-library/react/pure"
import { toast } from "sonner"

const clearCookies = () => {
  if (typeof document === "undefined" || !document.cookie) return

  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim()

    if (name)
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
  }
}

beforeAll(() => {
  ;(
    globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
  ).IS_REACT_ACT_ENVIRONMENT = true
})

afterEach(() => {
  vi.unstubAllGlobals()
  vi.unstubAllEnvs()
  cleanup()
  vi.useRealTimers()
  toast.dismiss()

  if (typeof localStorage !== "undefined") localStorage.clear()
  if (typeof sessionStorage !== "undefined") sessionStorage.clear()

  clearCookies()

  if (typeof document !== "undefined") {
    delete document.documentElement.dataset.mode
    delete document.documentElement.dataset.theme
    document.documentElement.removeAttribute("style")
    document.documentElement.removeAttribute("dir")
    document.documentElement.removeAttribute("class")
    document.title = ""
    document.body.removeAttribute("class")
    document.body.removeAttribute("style")
    document.body.removeAttribute("data-scroll-lock")
    document.body.replaceChildren()
  }

  if (typeof window !== "undefined")
    if (window.location.hash)
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      )
})
