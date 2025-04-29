import MatchMediaMock from "vitest-matchmedia-mock"
import { useMediaQuery } from "."
import { act, renderHook } from "../../../test"
import { EnvironmentProvider } from "../../providers/environment-provider"

describe("useMediaQuery", () => {
  let matchMediaMock: MatchMediaMock

  beforeAll(() => {
    matchMediaMock = new MatchMediaMock()
  })

  afterEach(() => {
    matchMediaMock.clear()
  })

  afterAll(() => {
    matchMediaMock.destroy()
  })

  test("`(prefers-color-scheme: dark)` should be truthy", () => {
    matchMediaMock.useMediaQuery("(prefers-color-scheme: dark)")

    const { result } = renderHook(() =>
      useMediaQuery("(prefers-color-scheme: dark)"),
    )

    expect(result.current).toBeTruthy()
  })

  test("should correctly return fallback value", () => {
    const environment = {
      getDocument: () => undefined,
      getWindow: () => undefined,
    }

    const { result } = renderHook(
      () => useMediaQuery("(prefers-color-scheme: dark)", true),
      {
        wrapper: ({ children }) => (
          <EnvironmentProvider disabled environment={environment}>
            {children}
          </EnvironmentProvider>
        ),
      },
    )

    expect(result.current).toBeTruthy()
  })

  test("should correctly execute listener", () => {
    const { result } = renderHook(() =>
      useMediaQuery("(prefers-color-scheme: dark)"),
    )

    act(() => {
      matchMediaMock.useMediaQuery("(prefers-color-scheme: dark)")
    })

    expect(result.current).toBeTruthy()
  })
})
