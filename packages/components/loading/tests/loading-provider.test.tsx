import { act, renderHook } from "@yamada-ui/test"
import { LoadingProvider, useLoading } from "../src"

describe("<LoadingProvider />", () => {
  test("renders screen loading correctly", async () => {
    const { result } = renderHook(() => useLoading(), {
      wrapper: ({ children }) => <LoadingProvider>{children}</LoadingProvider>,
    })

    expect(document.querySelector(".ui-loading-screen")).not.toBeInTheDocument()

    await act(async () => {
      result.current.screen.start()
    })

    expect(document.querySelector(".ui-loading-screen")).toBeInTheDocument()

    await act(async () => {
      result.current.screen.finish()
    })

    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 500)
      })
    })

    expect(document.querySelector(".ui-loading-screen")).not.toBeInTheDocument()
  })

  test("renders page loading correctly", async () => {
    const { result } = renderHook(() => useLoading(), {
      wrapper: ({ children }) => <LoadingProvider>{children}</LoadingProvider>,
    })

    expect(document.querySelector(".ui-loading-page")).not.toBeInTheDocument()

    await act(async () => {
      result.current.page.start()
    })

    expect(document.querySelector(".ui-loading-page")).toBeInTheDocument()

    await act(async () => {
      result.current.page.finish()
    })

    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 500)
      })
    })

    expect(document.querySelector(".ui-loading-page")).not.toBeInTheDocument()
  })

  test("renders background loading correctly", async () => {
    const { result } = renderHook(() => useLoading(), {
      wrapper: ({ children }) => <LoadingProvider>{children}</LoadingProvider>,
    })

    expect(
      document.querySelector(".ui-loading-background"),
    ).not.toBeInTheDocument()

    await act(async () => {
      result.current.background.start()
    })

    expect(document.querySelector(".ui-loading-background")).toBeInTheDocument()

    await act(async () => {
      result.current.background.finish()
    })

    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 500)
      })
    })

    expect(
      document.querySelector(".ui-loading-background"),
    ).not.toBeInTheDocument()
  })
})
