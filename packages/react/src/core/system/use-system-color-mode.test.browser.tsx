import { renderHook } from "#test/browser"
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

  test("returns system color mode", async () => {
    const { result } = await renderHook(() =>
      useSystemColorMode({ defaultColorMode: "light" }),
    )
    expect(result.current.systemColorMode).toBeDefined()
    expect(["light", "dark"]).toContain(result.current.systemColorMode)
  })

  test("getSystemColorMode returns light when prefers light", async () => {
    mockMatchMedia(false)
    const { result } = await renderHook(() =>
      useSystemColorMode({ defaultColorMode: "light" }),
    )
    expect(result.current.getSystemColorMode()).toBe("light")
  })

  test("getSystemColorMode returns dark when prefers dark", async () => {
    mockMatchMedia(true)
    const { result } = await renderHook(() =>
      useSystemColorMode({ defaultColorMode: "light" }),
    )
    expect(result.current.getSystemColorMode()).toBe("dark")
  })

  test("accepts callback option without error", async () => {
    const callback = vi.fn()

    await renderHook(() =>
      useSystemColorMode({ callback, defaultColorMode: "light" }),
    )
  })
})
