import type { FC } from "react"
import { a11y, fireEvent, render, renderHook, screen } from "#test"
import { Text } from "../text"
import { Loading } from "./"
import { useLoading } from "./loading-provider"
import { Suspense } from "./suspense"

const TargetComponent: FC = () => (
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
  test("passes a11y checks", async () => {
    await a11y(<TargetComponent />)
  })

  test("renders Oval with secondaryColor", () => {
    render(<Loading.Oval data-testid="oval-secondary" secondaryColor="red" />)
    expect(screen.getByTestId("oval-secondary")).toBeInTheDocument()
  })
})

describe("useLoading", () => {
  test("returns background, page, screen methods", () => {
    const { result } = renderHook(() => useLoading())

    for (const key of ["background", "page", "screen"] as const) {
      expect(result.current[key]).toBeDefined()
      expect(result.current[key].start).toBeInstanceOf(Function)
      expect(result.current[key].finish).toBeInstanceOf(Function)
      expect(result.current[key].update).toBeInstanceOf(Function)
      expect(result.current[key].force).toBeInstanceOf(Function)
    }
  })

  test("screen.start renders screen loading", () => {
    const TestComponent: FC = () => {
      const { screen: screenLoading } = useLoading()

      return (
        <button data-testid="start" onClick={() => screenLoading.start()}>
          Start
        </button>
      )
    }

    render(<TestComponent />)
    fireEvent.click(screen.getByTestId("start"))
    expect(document.querySelector("div[data-loading]")).toBeInTheDocument()
  })

  test("screen.start renders with string message", () => {
    const TestComponent: FC = () => {
      const { screen: screenLoading } = useLoading()

      return (
        <button
          data-testid="start"
          onClick={() => screenLoading.start({ message: "Screen loading" })}
        >
          Start
        </button>
      )
    }

    render(<TestComponent />)
    fireEvent.click(screen.getByTestId("start"))
    expect(screen.getByText("Screen loading")).toBeInTheDocument()
  })

  test("screen.start renders with ReactNode message", () => {
    const TestComponent: FC = () => {
      const { screen: screenLoading } = useLoading()

      return (
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
      )
    }

    render(<TestComponent />)
    fireEvent.click(screen.getByTestId("start"))
    expect(screen.getByTestId("screen-msg")).toBeInTheDocument()
  })

  test("page.start renders page loading with string message", () => {
    const TestComponent: FC = () => {
      const { page: pageLoading } = useLoading()

      return (
        <button
          data-testid="start"
          onClick={() => pageLoading.start({ message: "Loading data" })}
        >
          Start
        </button>
      )
    }

    render(<TestComponent />)
    fireEvent.click(screen.getByTestId("start"))
    expect(screen.getByText("Loading data")).toBeInTheDocument()
  })

  test("page.start renders page loading with ReactNode message", () => {
    const TestComponent: FC = () => {
      const { page: pageLoading } = useLoading()

      return (
        <button
          data-testid="start"
          onClick={() =>
            pageLoading.start({
              message: <Text data-testid="custom-msg">Custom</Text>,
            })
          }
        >
          Start
        </button>
      )
    }

    render(<TestComponent />)
    fireEvent.click(screen.getByTestId("start"))
    expect(screen.getByTestId("custom-msg")).toBeInTheDocument()
  })

  test("background.start renders background loading", () => {
    const TestComponent: FC = () => {
      const { background } = useLoading()

      return (
        <button data-testid="start" onClick={() => background.start()}>
          Start
        </button>
      )
    }

    render(<TestComponent />)
    fireEvent.click(screen.getByTestId("start"))
    expect(document.querySelector("div[data-loading]")).toBeInTheDocument()
  })

  test("background.start renders with string message", () => {
    const TestComponent: FC = () => {
      const { background } = useLoading()

      return (
        <button
          data-testid="start"
          onClick={() => background.start({ message: "Saving" })}
        >
          Start
        </button>
      )
    }

    render(<TestComponent />)
    fireEvent.click(screen.getByTestId("start"))
    expect(screen.getByText("Saving")).toBeInTheDocument()
  })

  test("background.start renders with ReactNode message", () => {
    const TestComponent: FC = () => {
      const { background } = useLoading()

      return (
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
      )
    }

    render(<TestComponent />)
    fireEvent.click(screen.getByTestId("start"))
    expect(screen.getByTestId("bg-msg")).toBeInTheDocument()
  })

  test("update changes loading message", () => {
    const TestComponent: FC = () => {
      const { page: pageLoading } = useLoading()

      return (
        <>
          <button
            data-testid="start"
            onClick={() => pageLoading.start({ message: "Initial" })}
          >
            Start
          </button>
          <button
            data-testid="update"
            onClick={() => pageLoading.update({ message: "Updated" })}
          >
            Update
          </button>
        </>
      )
    }

    render(<TestComponent />)
    fireEvent.click(screen.getByTestId("start"))
    expect(screen.getByText("Initial")).toBeInTheDocument()

    fireEvent.click(screen.getByTestId("update"))
    expect(screen.getByText("Updated")).toBeInTheDocument()
  })

  test("force shows forced loading message", () => {
    const TestComponent: FC = () => {
      const { page: pageLoading } = useLoading()

      return (
        <button
          data-testid="force"
          onClick={() =>
            pageLoading.force({ loadingCount: 1, message: "Forced loading" })
          }
        >
          Force
        </button>
      )
    }

    render(<TestComponent />)
    fireEvent.click(screen.getByTestId("force"))
    expect(screen.getByText("Forced loading")).toBeInTheDocument()
  })

  test("start with custom loadingScheme", () => {
    const TestComponent: FC = () => {
      const { screen: screenLoading } = useLoading()

      return (
        <button
          data-testid="start"
          onClick={() => screenLoading.start({ loadingScheme: "dots" })}
        >
          Start
        </button>
      )
    }

    render(<TestComponent />)
    fireEvent.click(screen.getByTestId("start"))
    expect(document.querySelector("div[data-loading]")).toBeInTheDocument()
  })
})

describe("<Loading.Suspense />", () => {
  function createSuspendingChild() {
    let resolve: (value: string) => void = () => {}
    const promise = new Promise<string>((r) => {
      resolve = r
    })
    const cache: { value?: string } = {}

    const SuspendingChild: FC = () => {
      if (cache.value === undefined) {
        throw promise.then((value) => {
          cache.value = value
        })
      }

      return <div data-testid="child">{cache.value}</div>
    }

    return { resolve: (value: string) => resolve(value), SuspendingChild }
  }

  test("renders fallback loading when children suspend", async () => {
    const { resolve, SuspendingChild } = createSuspendingChild()

    render(
      <Suspense>
        <SuspendingChild />
      </Suspense>,
    )

    expect(document.querySelector("svg[data-loading]")).toBeInTheDocument()

    resolve("loaded")
    await screen.findByTestId("child")
  })

  test("renders custom fallback when provided", async () => {
    const { resolve, SuspendingChild } = createSuspendingChild()

    render(
      <Suspense fallback={<div data-testid="custom-fallback">Wait...</div>}>
        <SuspendingChild />
      </Suspense>,
    )

    expect(screen.getByTestId("custom-fallback")).toBeInTheDocument()

    resolve("loaded")
    await screen.findByTestId("child")
  })

  test("renders with custom loadingScheme", async () => {
    const { resolve, SuspendingChild } = createSuspendingChild()

    render(
      <Suspense loadingScheme="dots">
        <SuspendingChild />
      </Suspense>,
    )

    expect(document.querySelector("svg[data-loading]")).toBeInTheDocument()

    resolve("loaded")
    await screen.findByTestId("child")
  })
})
