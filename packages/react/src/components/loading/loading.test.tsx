import type { FC } from "react"
import { a11y, page, render, renderHook } from "#test/browser"
import { Text } from "../text"
import { Loading } from "./"
import { useLoading } from "./loading-provider"
import { Suspense } from "./suspense"

describe("<Loading />", () => {
  const TargetComponent = () => (
    <>
      <Loading.Oval data-testid="oval" />
      <Loading.Audio data-testid="audio" />
      <Loading.Circles data-testid="circles" />
      <Loading.Dots data-testid="dots" />
      <Loading.Grid data-testid="grid" />
      <Loading.Puff data-testid="puff" />
      <Loading.Rings data-testid="rings" />
    </>
  )

  test("renders component correctly", async () => {
    await a11y(<TargetComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(Loading.Oval.displayName).toBe("Loading")
    expect(Loading.Audio.displayName).toBe("Loading")
    expect(Loading.Circles.displayName).toBe("Loading")
    expect(Loading.Dots.displayName).toBe("Loading")
    expect(Loading.Grid.displayName).toBe("Loading")
    expect(Loading.Puff.displayName).toBe("Loading")
    expect(Loading.Rings.displayName).toBe("Loading")
  })

  test("sets `className` correctly", async () => {
    await render(<TargetComponent />)
    await expect.element(page.getByTestId("oval")).toHaveClass("ui-loading")
    await expect.element(page.getByTestId("audio")).toHaveClass("ui-loading")
    await expect.element(page.getByTestId("circles")).toHaveClass("ui-loading")
    await expect.element(page.getByTestId("dots")).toHaveClass("ui-loading")
    await expect.element(page.getByTestId("grid")).toHaveClass("ui-loading")
    await expect.element(page.getByTestId("puff")).toHaveClass("ui-loading")
    await expect.element(page.getByTestId("rings")).toHaveClass("ui-loading")
  })

  test("renders HTML tag correctly", async () => {
    await render(<TargetComponent />)
    expect(page.getByTestId("oval").element().tagName).toBe("svg")
    expect(page.getByTestId("audio").element().tagName).toBe("svg")
    expect(page.getByTestId("circles").element().tagName).toBe("svg")
    expect(page.getByTestId("dots").element().tagName).toBe("svg")
    expect(page.getByTestId("grid").element().tagName).toBe("svg")
    expect(page.getByTestId("puff").element().tagName).toBe("svg")
    expect(page.getByTestId("rings").element().tagName).toBe("svg")
  })

  test("renders Oval with secondaryColor", async () => {
    await render(
      <Loading.Oval data-testid="oval-secondary" secondaryColor="red" />,
    )

    await expect.element(page.getByTestId("oval-secondary")).toBeVisible()
  })
})

describe("useLoading", () => {
  test("returns background, page, screen methods", async () => {
    const { result } = await renderHook(() => useLoading())

    expect(result.current.background).toBeDefined()
    expect(result.current.background.start).toBeInstanceOf(Function)
    expect(result.current.background.finish).toBeInstanceOf(Function)
    expect(result.current.background.update).toBeInstanceOf(Function)
    expect(result.current.background.force).toBeInstanceOf(Function)
    expect(result.current.page).toBeDefined()
    expect(result.current.page.start).toBeInstanceOf(Function)
    expect(result.current.page.finish).toBeInstanceOf(Function)
    expect(result.current.page.update).toBeInstanceOf(Function)
    expect(result.current.page.force).toBeInstanceOf(Function)
    expect(result.current.screen).toBeDefined()
    expect(result.current.screen.start).toBeInstanceOf(Function)
    expect(result.current.screen.finish).toBeInstanceOf(Function)
    expect(result.current.screen.update).toBeInstanceOf(Function)
    expect(result.current.screen.force).toBeInstanceOf(Function)
  })

  test("screen.start renders screen loading", async () => {
    const { act, result } = await renderHook(() => useLoading())

    await act(() => {
      result.current.screen.start()
    })
    await expect
      .element(page.getByQuerySelector("div[data-loading]"))
      .toBeVisible()
  })

  test("screen.finish removes screen loading", async () => {
    const { act, result } = await renderHook(() => useLoading())

    await act(() => {
      result.current.screen.start()
    })
    await expect
      .element(page.getByQuerySelector("div[data-loading]"))
      .toBeVisible()

    await act(() => {
      result.current.screen.finish()
    })
    await expect
      .element(page.getByQuerySelector("div[data-loading]"))
      .not.toBeInTheDocument()
  })

  test("screen.start renders with string message", async () => {
    const { act, result } = await renderHook(() => useLoading())

    await act(() => {
      result.current.screen.start({ message: "Screen loading" })
    })
    await expect.element(page.getByText("Screen loading")).toBeVisible()
  })

  test("screen.start renders with ReactNode message", async () => {
    const { act, result } = await renderHook(() => useLoading())

    await act(() => {
      result.current.screen.start({
        message: <Text>Custom Screen</Text>,
      })
    })
    await expect.element(page.getByText("Custom Screen")).toBeVisible()
  })

  test("page.start renders page loading with string message", async () => {
    const { act, result } = await renderHook(() => useLoading())

    await act(() => {
      result.current.page.start({ message: "Loading data" })
    })
    await expect.element(page.getByText("Loading data")).toBeVisible()
  })

  test("page.start renders page loading with ReactNode message", async () => {
    const { act, result } = await renderHook(() => useLoading())

    await act(() => {
      result.current.page.start({
        message: <Text>Custom</Text>,
      })
    })
    await expect.element(page.getByText("Custom")).toBeVisible()
  })

  test("background.start renders background loading", async () => {
    const { act, result } = await renderHook(() => useLoading())

    await act(() => {
      result.current.background.start()
    })
    await expect
      .element(page.getByQuerySelector("div[data-loading]"))
      .toBeVisible()

    await act(() => {
      result.current.background.finish()
    })
  })

  test("background.start renders with string message", async () => {
    const { act, result } = await renderHook(() => useLoading())

    await act(() => {
      result.current.background.start({ message: "Saving" })
    })
    await expect.element(page.getByText("Saving")).toBeVisible()

    await act(() => {
      result.current.background.finish()
    })
  })

  test("background.start renders with ReactNode message", async () => {
    const { act, result } = await renderHook(() => useLoading())

    await act(() => {
      result.current.background.start({
        message: <Text>Custom BG</Text>,
      })
    })
    await expect.element(page.getByText("Custom BG")).toBeVisible()

    await act(() => {
      result.current.background.finish()
    })
  })

  test("update changes loading message", async () => {
    const { act, result } = await renderHook(() => useLoading())

    await act(() => {
      result.current.page.start({ message: "Initial" })
    })
    await expect.element(page.getByText("Initial")).toBeVisible()

    await act(() => {
      result.current.page.update({ message: "Updated" })
    })
    await expect.element(page.getByText("Updated")).toBeVisible()
  })

  test("force sets loading state", async () => {
    const { act, result } = await renderHook(() => useLoading())

    await act(() => {
      result.current.page.force({
        loadingCount: 1,
        message: "Forced loading",
      })
    })
    await expect.element(page.getByText("Forced loading")).toBeVisible()

    await act(() => {
      result.current.page.force({ loadingCount: 0 })
    })
    await expect
      .element(page.getByText("Forced loading"))
      .not.toBeInTheDocument()
  })

  test("start with custom loadingScheme", async () => {
    const { act, result } = await renderHook(() => useLoading())

    await act(() => {
      result.current.screen.start({ loadingScheme: "dots" })
    })
    await expect
      .element(page.getByQuerySelector("div[data-loading]"))
      .toBeVisible()
  })

  test("start with duration auto-finishes", async () => {
    vi.useFakeTimers()

    try {
      const { act, result } = await renderHook(() => useLoading())

      await act(() => {
        result.current.background.start({ duration: 100 })
      })

      await expect
        .element(page.getByQuerySelector("div[data-loading]"))
        .toBeVisible()

      await act(() => {
        vi.advanceTimersByTime(100)
      })

      vi.useRealTimers()

      await expect
        .element(page.getByQuerySelector("div[data-loading]"))
        .not.toBeInTheDocument()
    } finally {
      vi.useRealTimers()
    }
  })
})

describe("<Loading.Suspense />", () => {
  test("renders fallback loading when children suspend", async () => {
    let resolve: (v: string) => void
    const promise = new Promise<string>((r) => {
      resolve = r
    })

    const cache: { value?: string } = {}

    const SuspendingChild: FC = () => {
      if (!cache.value) {
        throw promise.then((v) => {
          cache.value = v
        })
      }

      return <div data-testid="child">{cache.value}</div>
    }

    await render(
      <Suspense>
        <SuspendingChild />
      </Suspense>,
    )

    await expect
      .element(page.getByQuerySelector("svg[data-loading]"))
      .toBeVisible()

    resolve!("loaded")

    await expect.element(page.getByTestId("child")).toBeVisible()
  })

  test("renders custom fallback when provided", async () => {
    let resolve: (v: string) => void
    const promise = new Promise<string>((r) => {
      resolve = r
    })

    const cache: { value?: string } = {}

    const SuspendingChild: FC = () => {
      if (!cache.value) {
        throw promise.then((v) => {
          cache.value = v
        })
      }

      return <div data-testid="child">{cache.value}</div>
    }

    await render(
      <Suspense fallback={<div data-testid="custom-fallback">Wait...</div>}>
        <SuspendingChild />
      </Suspense>,
    )

    await expect.element(page.getByTestId("custom-fallback")).toBeVisible()

    resolve!("loaded")

    await expect.element(page.getByTestId("child")).toBeVisible()
  })

  test("renders with custom loadingScheme", async () => {
    let resolve: (v: string) => void
    const promise = new Promise<string>((r) => {
      resolve = r
    })

    const cache: { value?: string } = {}

    const SuspendingChild: FC = () => {
      if (!cache.value) {
        throw promise.then((v) => {
          cache.value = v
        })
      }

      return <div>{cache.value}</div>
    }

    await render(
      <Suspense loadingScheme="dots">
        <SuspendingChild />
      </Suspense>,
    )

    await expect
      .element(page.getByQuerySelector("svg[data-loading]"))
      .toBeVisible()

    resolve!("loaded")
  })

  describe("message props", () => {
    describe("background component", () => {
      test("renders string message with Text branch", async () => {
        const text = "loading..."
        const TestComponent = () => {
          const { background } = useLoading()

          return (
            <>
              <button onClick={() => background.start({ message: text })}>
                Start
              </button>
              <button onClick={() => background.finish()}>Finish</button>
            </>
          )
        }

        const { user } = await render(<TestComponent />)
        await user.click(page.getByRole("button", { name: "Start" }))

        await expect.element(page.getByText(text)).toBeVisible()
        await expect
          .element(page.getByQuerySelector("div[data-loading]"))
          .toBeVisible()

        await user.click(page.getByRole("button", { name: "Finish" }))
      })

      test("renders without message with Text branch", async () => {
        const text = true
        const TestComponent = () => {
          const { background } = useLoading()

          return (
            <>
              <button onClick={() => background.start({ message: text })}>
                Start
              </button>
              <button onClick={() => background.finish()}>Finish</button>
            </>
          )
        }

        const { user } = await render(<TestComponent />)
        await user.click(page.getByRole("button", { name: "Start" }))

        await expect
          .element(page.getByTestId("screen-node"))
          .not.toBeInTheDocument()

        await expect
          .element(page.getByQuerySelector("div[data-loading]"))
          .toBeVisible()

        await user.click(page.getByRole("button", { name: "Finish" }))
      })
    })

    describe("page component", () => {
      test("renders string message with Text branch", async () => {
        const text = "loading..."
        const TestComponent = () => {
          const { page: pageLoading } = useLoading()

          return (
            <button onClick={() => pageLoading.start({ message: text })}>
              Start
            </button>
          )
        }

        const { user } = await render(<TestComponent />)

        await user.click(page.getByRole("button", { name: "Start" }))
        await expect.element(page.getByText(text)).toBeVisible()

        await expect
          .element(page.getByQuerySelector("div[data-loading]"))
          .toBeVisible()
      })

      test("renders without message with Text branch", async () => {
        const text = true
        const TestComponent = () => {
          const { page: pageLoading } = useLoading()

          return (
            <button onClick={() => pageLoading.start({ message: text })}>
              Start
            </button>
          )
        }

        const { user } = await render(<TestComponent />)
        await user.click(page.getByRole("button", { name: "Start" }))

        await expect
          .element(page.getByTestId("screen-node"))
          .not.toBeInTheDocument()

        await expect
          .element(page.getByQuerySelector("div[data-loading]"))
          .toBeVisible()
      })
    })

    describe("screen component", () => {
      test("renders string message with Text branch", async () => {
        const text = "loading..."
        const TestComponent = () => {
          const { screen: screenLoading } = useLoading()

          return (
            <button onClick={() => screenLoading.start({ message: text })}>
              Start
            </button>
          )
        }

        const { user } = await render(<TestComponent />)
        await user.click(page.getByRole("button", { name: "Start" }))
        await expect.element(page.getByText(text)).toBeVisible()

        await expect
          .element(page.getByQuerySelector("div[data-loading]"))
          .toBeVisible()
      })

      test("renders without message with Text branch", async () => {
        const text = true
        const TestComponent = () => {
          const { screen: screenLoading } = useLoading()

          return (
            <button onClick={() => screenLoading.start({ message: text })}>
              Start
            </button>
          )
        }

        const { user } = await render(<TestComponent />)
        await user.click(page.getByRole("button", { name: "Start" }))

        await expect
          .element(page.getByTestId("screen-node"))
          .not.toBeInTheDocument()

        await expect
          .element(page.getByQuerySelector("div[data-loading]"))
          .toBeVisible()
      })
    })
  })
})
