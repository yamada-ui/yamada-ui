import { EnvironmentProvider } from "@yamada-ui/core"
import type { MatchMediaMock } from "@yamada-ui/test"
import { act, mocks, renderHook } from "@yamada-ui/test"
import { useMediaQuery } from "../src"

describe("useMediaQuery", () => {
  let mock: MatchMediaMock
  let defaultMatchMedia: typeof window.matchMedia

  beforeAll(() => {
    mock = mocks.matchMedia()
    defaultMatchMedia = window.matchMedia
  })

  afterEach(() => {
    mock.clear()
    window.matchMedia = defaultMatchMedia
  })

  test("`(prefers-color-scheme: dark)` should be truthy", () => {
    mock.useMediaQuery("(prefers-color-scheme: dark)")

    const { result } = renderHook(() =>
      useMediaQuery("(prefers-color-scheme: dark)"),
    )

    expect(result.current[0]).toBeTruthy()
  })

  test("should correctly accept an array", () => {
    mock.useMediaQuery("(max-width: 480px)")

    const { result } = renderHook(() =>
      useMediaQuery(["(max-width: 480px)", "(max-width: 768px)"]),
    )

    expect(result.current[0]).toBeTruthy()
    expect(result.current[1]).toBeFalsy()
  })

  test("should disable server-side rendering", () => {
    mock.useMediaQuery("(prefers-color-scheme: dark)")

    const { result } = renderHook(() =>
      useMediaQuery("(prefers-color-scheme: dark)", { ssr: false }),
    )

    expect(result.current[0]).toBeTruthy()
  })

  test("should correctly return fallback values", () => {
    const environment = {
      getWindow: () => undefined,
      getDocument: () => undefined,
    }

    const { result: result1 } = renderHook(
      () => useMediaQuery("(prefers-color-scheme: dark)", { fallback: true }),
      {
        wrapper: ({ children }) => (
          <EnvironmentProvider disabled environment={environment}>
            {children}
          </EnvironmentProvider>
        ),
      },
    )
    const { result: result2 } = renderHook(
      () => useMediaQuery("(prefers-color-scheme: dark)", { fallback: [true] }),
      {
        wrapper: ({ children }) => (
          <EnvironmentProvider disabled environment={environment}>
            {children}
          </EnvironmentProvider>
        ),
      },
    )

    expect(result1.current[0]).toBeTruthy()
    expect(result2.current[0]).toBeTruthy()
  })

  test("should correctly execute listeners", async () => {
    const { result } = renderHook(() =>
      useMediaQuery("(prefers-color-scheme: dark)"),
    )

    await act(async () => {
      mock.useMediaQuery("(prefers-color-scheme: dark)")
    })

    expect(result.current[0]).toBeTruthy()
  })

  test("should use addEventListener if addListener is not supported", async () => {
    vi.spyOn(window, "matchMedia").mockImplementation(
      (query) =>
        ({
          matches: false,
          media: query,
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          onchange: null,
          addListener: undefined,
          removeListener: undefined,
          dispatchEvent: undefined,
        }) as unknown as MediaQueryList,
    )

    const { result } = renderHook(() => useMediaQuery("(max-width: 600px)"))

    expect(result.current[0]).toBeFalsy()
  })
})
