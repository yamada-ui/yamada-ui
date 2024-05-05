import { act, renderHook, waitFor } from "@yamada-ui/test"
import { LoadingProvider, useLoading } from "../src"

describe("<LoadingProvider />", () => {
  test("renders screen loading correctly", async () => {
    const { result } = renderHook(() => useLoading(), {
      wrapper: ({ children }) => <LoadingProvider>{children}</LoadingProvider>,
    })

    await act(async () => {
      result.current.screen.start()
    })

    expect(document.querySelector(".ui-loading-screen")).toBeInTheDocument()

    await act(async () => {
      result.current.screen.finish()
    })

    waitFor(
      () => {
        expect(
          document.querySelector(".ui-loading-screen"),
        ).not.toBeInTheDocument()
      },
      { timeout: 400 },
    )
  })

  test("renders page loading correctly", async () => {
    const { result } = renderHook(() => useLoading(), {
      wrapper: ({ children }) => <LoadingProvider>{children}</LoadingProvider>,
    })

    await act(async () => {
      result.current.page.start()
    })

    expect(document.querySelector(".ui-loading-page")).toBeInTheDocument()

    await act(async () => {
      result.current.page.finish()
    })

    waitFor(
      () => {
        expect(
          document.querySelector(".ui-loading-page"),
        ).not.toBeInTheDocument()
      },
      { timeout: 400 },
    )
  })

  test("renders background loading correctly", async () => {
    const { result } = renderHook(() => useLoading(), {
      wrapper: ({ children }) => <LoadingProvider>{children}</LoadingProvider>,
    })

    await act(async () => {
      result.current.background.start()
    })

    expect(document.querySelector(".ui-loading-background")).toBeInTheDocument()

    await act(async () => {
      result.current.background.finish()
    })

    waitFor(
      () => {
        expect(
          document.querySelector(".ui-loading-background"),
        ).not.toBeInTheDocument()
      },
      { timeout: 400 },
    )
  })
})
