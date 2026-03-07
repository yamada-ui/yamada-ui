import { renderHook } from "#test"
import { useSystemColorMode } from "./use-system-color-mode"

const mockMatchMedia = (matches = false) => {
  Object.defineProperty(window, "matchMedia", {
    value: vi.fn().mockImplementation((query: string) => ({
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches,
      media: query,
      removeEventListener: vi.fn(),
      removeListener: vi.fn(),
      onchange: null,
    })),
    writable: true,
  })
}

describe("useSystemColorMode", () => {
  beforeEach(() => {
    mockMatchMedia(false)
  })

  test("returns system color mode", () => {
    const { result } = renderHook(() =>
      useSystemColorMode({ defaultColorMode: "light" }),
    )
    expect(result.current.systemColorMode).toBeDefined()
    expect(["light", "dark"]).toContain(result.current.systemColorMode)
  })

  test("getSystemColorMode returns light when prefers light", () => {
    mockMatchMedia(false)
    const { result } = renderHook(() =>
      useSystemColorMode({ defaultColorMode: "light" }),
    )
    expect(result.current.getSystemColorMode()).toBe("light")
  })

  test("getSystemColorMode returns dark when prefers dark", () => {
    mockMatchMedia(true)
    const { result } = renderHook(() =>
      useSystemColorMode({ defaultColorMode: "light" }),
    )
    expect(result.current.getSystemColorMode()).toBe("dark")
  })

  test("invokes callback when provided without error", () => {
    const callback = vi.fn()
    renderHook(() =>
      useSystemColorMode({ callback, defaultColorMode: "light" }),
    )
  })
})
