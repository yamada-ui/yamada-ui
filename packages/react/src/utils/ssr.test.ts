import { renderHook } from "#test"
import { createElement } from "react"
import { renderToString } from "react-dom/server"
import { useSsr } from "./ssr"

describe("useSsr", () => {
  test("should return false in browser environment", () => {
    const { result } = renderHook(() => useSsr())
    expect(result.current).toBeFalsy()
  })

  test("should return true during SSR", () => {
    const Component = () => {
      const isSsr = useSsr()
      return createElement("div", null, String(isSsr))
    }
    const html = renderToString(createElement(Component))
    expect(html).toContain("true")
  })

  test("should return false when useSyncExternalStore is not available", async () => {
    vi.resetModules()
    vi.doMock("react", async () => {
      const actual = await vi.importActual("react")
      return { ...actual, useSyncExternalStore: undefined }
    })

    const { useSsr: useSsrFallback } = await import("./ssr")
    expect(useSsrFallback()).toBeFalsy()

    vi.doUnmock("react")
  })
})
