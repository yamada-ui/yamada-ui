import { renderHook } from "@yamada-ui/test"
import { useOS } from "../src"

describe("useOS", () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  test.each([
    {
      expected: "macos",
      // M1 MacBook Air
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    },
    {
      expected: "windows",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.3",
    },
    {
      expected: "ios",
      // iPhone13 Pro Max
      userAgent:
        "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    },
    {
      expected: "ios",
      // iPad
      userAgent:
        "Mozilla/5.0 (iPad; CPU OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)",
    },
    {
      expected: "android",
      // Google Pixel 7
      userAgent:
        "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36",
    },
    {
      expected: "linux",
      // A smart TV
      userAgent:
        "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.105 Safari/537.36 WebAppManager",
    },
    {
      expected: "undetermined",
      // Nintendo Switch
      userAgent:
        "Mozilla/5.0 (Nintendo Switch; WifiWebAuthApplet) AppleWebKit/601.6 (KHTML, like Gecko) NF/4.0.0.5.10 NintendoBrowser/5.1.0.13343",
    },
    {
      expected: "undetermined",
      // PlayStation 5
      userAgent:
        "Mozilla/5.0 (PlayStation; PlayStation 5/2.26) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15",
    },
    {
      expected: "undetermined",
      userAgent: "yamada",
    },
  ])("should return $expected", ({ expected, userAgent }) => {
    vi.stubGlobal("navigator", { userAgent })

    const { result } = renderHook(() => useOS())
    expect(result.current).toBe(expected)
  })

  test('should return "undetermined" when window is undefined', () => {
    const defaultWindow = global.window
    ;(global as any).window = undefined as unknown as typeof globalThis & Window

    const result = useOS()
    expect(result).toBe("undetermined")
    ;(global as any).window = defaultWindow
  })
})
