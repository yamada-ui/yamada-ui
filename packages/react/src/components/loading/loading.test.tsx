import type { FC } from "react"
import { a11y, act, render, renderHook, screen, waitFor } from "#test"
import { Text } from "../text"
import { Loading } from "./"
import { useLoading } from "./loading-provider"
import { Suspense } from "./suspense"

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

describe("<Loading />", () => {
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

  test("sets `className` correctly", () => {
    render(<TargetComponent />)
    expect(screen.getByTestId("oval")).toHaveClass("ui-loading")
    expect(screen.getByTestId("audio")).toHaveClass("ui-loading")
    expect(screen.getByTestId("circles")).toHaveClass("ui-loading")
    expect(screen.getByTestId("dots")).toHaveClass("ui-loading")
    expect(screen.getByTestId("grid")).toHaveClass("ui-loading")
    expect(screen.getByTestId("puff")).toHaveClass("ui-loading")
    expect(screen.getByTestId("rings")).toHaveClass("ui-loading")
  })

  test("renders HTML tag correctly", () => {
    render(<TargetComponent />)
    expect(screen.getByTestId("oval").tagName).toBe("svg")
    expect(screen.getByTestId("audio").tagName).toBe("svg")
    expect(screen.getByTestId("circles").tagName).toBe("svg")
    expect(screen.getByTestId("dots").tagName).toBe("svg")
    expect(screen.getByTestId("grid").tagName).toBe("svg")
    expect(screen.getByTestId("puff").tagName).toBe("svg")
    expect(screen.getByTestId("rings").tagName).toBe("svg")
  })

  test("renders Oval with secondaryColor", () => {
    render(<Loading.Oval data-testid="oval-secondary" secondaryColor="red" />)

    expect(screen.getByTestId("oval-secondary")).toBeInTheDocument()
  })
})

describe("useLoading", () => {
  test("returns background, page, screen methods", () => {
    const { result } = renderHook(() => useLoading())

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
    const TestComponent: FC = () => {
      const { screen: screenLoading } = useLoading()

      return (
        <>
          <button data-testid="start" onClick={() => screenLoading.start()}>
            Start
          </button>
          <button data-testid="finish" onClick={() => screenLoading.finish()}>
            Finish
          </button>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    await user.click(screen.getByTestId("start"))

    await waitFor(() => {
      expect(document.querySelector("div[data-loading]")).toBeInTheDocument()
    })

    await user.click(screen.getByTestId("finish"))
  })

  test("screen.finish removes screen loading", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })

    const TestComponent: FC = () => {
      const { screen: screenLoading } = useLoading()

      return (
        <>
          <button data-testid="start" onClick={() => screenLoading.start()}>
            Start
          </button>
          <button data-testid="finish" onClick={() => screenLoading.finish()}>
            Finish
          </button>
        </>
      )
    }

    render(<TestComponent />)

    act(() => {
      screen.getByTestId("start").click()
    })

    expect(document.querySelector("div[data-loading]")).toBeInTheDocument()

    act(() => {
      screen.getByTestId("finish").click()
    })

    act(() => {
      vi.advanceTimersByTime(500)
    })

    await waitFor(() => {
      expect(
        document.querySelector("div[data-loading]"),
      ).not.toBeInTheDocument()
    })

    vi.useRealTimers()
  })

  test("screen.start renders with string message", async () => {
    const TestComponent: FC = () => {
      const { screen: screenLoading } = useLoading()

      return (
        <>
          <button
            data-testid="start"
            onClick={() => screenLoading.start({ message: "Screen loading" })}
          >
            Start
          </button>
          <button data-testid="finish" onClick={() => screenLoading.finish()}>
            Finish
          </button>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    await user.click(screen.getByTestId("start"))

    await waitFor(() => {
      expect(screen.getByText("Screen loading")).toBeInTheDocument()
    })

    await user.click(screen.getByTestId("finish"))
  })

  test("screen.start renders with ReactNode message", async () => {
    const TestComponent: FC = () => {
      const { screen: screenLoading } = useLoading()

      return (
        <>
          <button
            data-testid="start"
            onClick={() =>
              screenLoading.start({
                message: <Text data-testid="screen-msg">Custom Screen</Text>,
              })
            }
          >
            Start
          </button>
          <button data-testid="finish" onClick={() => screenLoading.finish()}>
            Finish
          </button>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    await user.click(screen.getByTestId("start"))

    await waitFor(() => {
      expect(screen.getByTestId("screen-msg")).toBeInTheDocument()
    })

    await user.click(screen.getByTestId("finish"))
  })

  test("page.start renders page loading with string message", async () => {
    const TestComponent: FC = () => {
      const { page } = useLoading()

      return (
        <>
          <button
            data-testid="start"
            onClick={() => page.start({ message: "Loading data" })}
          >
            Start
          </button>
          <button data-testid="finish" onClick={() => page.finish()}>
            Finish
          </button>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    await user.click(screen.getByTestId("start"))

    await waitFor(() => {
      expect(screen.getByText("Loading data")).toBeInTheDocument()
    })

    await user.click(screen.getByTestId("finish"))
  })

  test("page.start renders page loading with ReactNode message", async () => {
    const TestComponent: FC = () => {
      const { page } = useLoading()

      return (
        <>
          <button
            data-testid="start"
            onClick={() =>
              page.start({
                message: <Text data-testid="custom-msg">Custom</Text>,
              })
            }
          >
            Start
          </button>
          <button data-testid="finish" onClick={() => page.finish()}>
            Finish
          </button>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    await user.click(screen.getByTestId("start"))

    await waitFor(() => {
      expect(screen.getByTestId("custom-msg")).toBeInTheDocument()
    })

    await user.click(screen.getByTestId("finish"))
  })

  test("background.start renders background loading", async () => {
    const TestComponent: FC = () => {
      const { background } = useLoading()

      return (
        <>
          <button data-testid="start" onClick={() => background.start()}>
            Start
          </button>
          <button data-testid="finish" onClick={() => background.finish()}>
            Finish
          </button>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    await user.click(screen.getByTestId("start"))

    await waitFor(() => {
      expect(document.querySelector("div[data-loading]")).toBeInTheDocument()
    })

    await user.click(screen.getByTestId("finish"))
  })

  test("background.start renders with string message", async () => {
    const TestComponent: FC = () => {
      const { background } = useLoading()

      return (
        <>
          <button
            data-testid="start"
            onClick={() => background.start({ message: "Saving" })}
          >
            Start
          </button>
          <button data-testid="finish" onClick={() => background.finish()}>
            Finish
          </button>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    await user.click(screen.getByTestId("start"))

    await waitFor(() => {
      expect(screen.getByText("Saving")).toBeInTheDocument()
    })

    await user.click(screen.getByTestId("finish"))
  })

  test("background.start renders with ReactNode message", async () => {
    const TestComponent: FC = () => {
      const { background } = useLoading()

      return (
        <>
          <button
            data-testid="start"
            onClick={() =>
              background.start({
                message: <Text data-testid="bg-msg">Custom BG</Text>,
              })
            }
          >
            Start
          </button>
          <button data-testid="finish" onClick={() => background.finish()}>
            Finish
          </button>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    await user.click(screen.getByTestId("start"))

    await waitFor(() => {
      expect(screen.getByTestId("bg-msg")).toBeInTheDocument()
    })

    await user.click(screen.getByTestId("finish"))
  })

  test("update changes loading message", async () => {
    const TestComponent: FC = () => {
      const { page } = useLoading()

      return (
        <>
          <button
            data-testid="start"
            onClick={() => page.start({ message: "Initial" })}
          >
            Start
          </button>
          <button
            data-testid="update"
            onClick={() => page.update({ message: "Updated" })}
          >
            Update
          </button>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    await user.click(screen.getByTestId("start"))

    await waitFor(() => {
      expect(screen.getByText("Initial")).toBeInTheDocument()
    })

    await user.click(screen.getByTestId("update"))

    await waitFor(() => {
      expect(screen.getByText("Updated")).toBeInTheDocument()
    })
  })

  test("force sets loading state", async () => {
    const TestComponent: FC = () => {
      const { page } = useLoading()

      return (
        <>
          <button
            data-testid="force"
            onClick={() =>
              page.force({ loadingCount: 1, message: "Forced loading" })
            }
          >
            Force
          </button>
          <button
            data-testid="force-off"
            onClick={() => page.force({ loadingCount: 0 })}
          >
            Force Off
          </button>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    await user.click(screen.getByTestId("force"))

    await waitFor(() => {
      expect(screen.getByText("Forced loading")).toBeInTheDocument()
    })

    await user.click(screen.getByTestId("force-off"))

    await waitFor(() => {
      expect(screen.queryByText("Forced loading")).not.toBeInTheDocument()
    })
  })

  test("start with custom loadingScheme", async () => {
    const TestComponent: FC = () => {
      const { screen: screenLoading } = useLoading()

      return (
        <>
          <button
            data-testid="start"
            onClick={() => screenLoading.start({ loadingScheme: "dots" })}
          >
            Start
          </button>
          <button data-testid="finish" onClick={() => screenLoading.finish()}>
            Finish
          </button>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    await user.click(screen.getByTestId("start"))

    await waitFor(() => {
      expect(document.querySelector("div[data-loading]")).toBeInTheDocument()
    })

    await user.click(screen.getByTestId("finish"))
  })

  test("start with duration auto-finishes", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })

    const TestComponent: FC = () => {
      const { background } = useLoading()

      return (
        <button
          data-testid="start"
          onClick={() => background.start({ duration: 500 })}
        >
          Start
        </button>
      )
    }

    render(<TestComponent />)

    act(() => {
      screen.getByTestId("start").click()
    })

    expect(document.querySelector("div[data-loading]")).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(600)
    })

    await waitFor(() => {
      expect(
        document.querySelector("div[data-loading]"),
      ).not.toBeInTheDocument()
    })

    vi.useRealTimers()
  }, 10000)
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

    render(
      <Suspense>
        <SuspendingChild />
      </Suspense>,
    )

    expect(document.querySelector("svg[data-loading]")).toBeInTheDocument()

    act(() => {
      resolve!("loaded")
    })

    await waitFor(() => {
      expect(screen.getByTestId("child")).toBeInTheDocument()
    })
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

    render(
      <Suspense fallback={<div data-testid="custom-fallback">Wait...</div>}>
        <SuspendingChild />
      </Suspense>,
    )

    expect(screen.getByTestId("custom-fallback")).toBeInTheDocument()

    act(() => {
      resolve!("loaded")
    })

    await waitFor(() => {
      expect(screen.getByTestId("child")).toBeInTheDocument()
    })
  })

  test("renders with custom loadingScheme", () => {
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

    render(
      <Suspense loadingScheme="dots">
        <SuspendingChild />
      </Suspense>,
    )

    expect(document.querySelector("svg[data-loading]")).toBeInTheDocument()

    act(() => {
      resolve!("loaded")
    })
  })
})
