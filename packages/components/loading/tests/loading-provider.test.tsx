import { act, renderHook, screen, waitFor } from "@yamada-ui/test"
import { LoadingProvider, useLoading } from "../src"

describe("<LoadingProvider />", () => {
  test("renders screen loading correctly", async () => {
    const { result } = renderHook(() => useLoading(), {
      wrapper: ({ children }) => <LoadingProvider>{children}</LoadingProvider>,
    })

    expect(document.querySelector(".ui-loading-screen")).not.toBeInTheDocument()

    act(() => {
      result.current.screen.start()
    })

    expect(document.querySelector(".ui-loading-screen")).toBeInTheDocument()

    act(() => {
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

    act(() => {
      result.current.page.start()
    })

    expect(document.querySelector(".ui-loading-page")).toBeInTheDocument()

    act(() => {
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

    act(() => {
      result.current.background.start()
    })

    expect(document.querySelector(".ui-loading-background")).toBeInTheDocument()

    act(() => {
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

  test("force is functioning correctly", async () => {
    const { result } = renderHook(() => useLoading(), {
      wrapper: ({ children }) => <LoadingProvider>{children}</LoadingProvider>,
    })

    expect(
      document.querySelector(".ui-loading-background"),
    ).not.toBeInTheDocument()

    act(() => {
      result.current.background.start()
    })

    expect(document.querySelector(".ui-loading-background")).toBeInTheDocument()

    act(() => {
      result.current.background.force({
        loadingCount: 1,
        message: "Please wait",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Please wait")).toBeInTheDocument()
    })

    act(() => {
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
