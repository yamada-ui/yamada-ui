import type { FC } from "react"
import { a11y, page, render, renderHook } from "#test/browser"
import { Text } from "../text"
import { Loading } from "./"
import { useLoading } from "./loading-provider"
import { Suspense } from "./suspense"

function clickElement(testId: string) {
  const el = page.getByTestId(testId).element()

  if (el instanceof HTMLElement) el.click()
}

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

    await expect.element(page.getByTestId("oval-secondary")).toBeInTheDocument()
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

    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("start"))

    await expect
      .poll(() => document.querySelector("div[data-loading]"))
      .toBeTruthy()
    clickElement("finish")
  })

  test("screen.finish removes screen loading", async () => {
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

    const { user } = await render(<TestComponent />)
    await user.click(page.getByTestId("start"))

    await expect
      .poll(() => document.querySelector("div[data-loading]"))
      .toBeTruthy()
    clickElement("finish")

    await expect
      .poll(() => document.querySelector("div[data-loading]"))
      .toBeFalsy()
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

    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("start"))

    await expect.element(page.getByText("Screen loading")).toBeInTheDocument()
    clickElement("finish")
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

    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("start"))

    await expect.element(page.getByTestId("screen-msg")).toBeInTheDocument()
    clickElement("finish")
  })

  test("page.start renders page loading with string message", async () => {
    const TestComponent: FC = () => {
      const { page: pageLoading } = useLoading()

      return (
        <>
          <button
            data-testid="start"
            onClick={() => pageLoading.start({ message: "Loading data" })}
          >
            Start
          </button>
          <button data-testid="finish" onClick={() => pageLoading.finish()}>
            Finish
          </button>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("start"))

    await expect.element(page.getByText("Loading data")).toBeInTheDocument()
    clickElement("finish")
  })

  test("page.start renders page loading with ReactNode message", async () => {
    const TestComponent: FC = () => {
      const { page: pageLoading } = useLoading()

      return (
        <>
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
          <button data-testid="finish" onClick={() => pageLoading.finish()}>
            Finish
          </button>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("start"))

    await expect.element(page.getByTestId("custom-msg")).toBeInTheDocument()
    clickElement("finish")
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

    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("start"))

    await expect
      .poll(() => document.querySelector("div[data-loading]"))
      .toBeTruthy()
    clickElement("finish")
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

    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("start"))

    await expect.element(page.getByText("Saving")).toBeInTheDocument()
    clickElement("finish")
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

    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("start"))

    await expect.element(page.getByTestId("bg-msg")).toBeInTheDocument()
    clickElement("finish")
  })

  test("update changes loading message", async () => {
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

    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("start"))

    await expect.element(page.getByText("Initial")).toBeInTheDocument()
    clickElement("update")

    await expect.element(page.getByText("Updated")).toBeInTheDocument()
  })

  test("force sets loading state", async () => {
    const TestComponent: FC = () => {
      const { page: pageLoading } = useLoading()

      return (
        <>
          <button
            data-testid="force"
            onClick={() =>
              pageLoading.force({ loadingCount: 1, message: "Forced loading" })
            }
          >
            Force
          </button>
          <button
            data-testid="force-off"
            onClick={() => pageLoading.force({ loadingCount: 0 })}
          >
            Force Off
          </button>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("force"))

    await expect.element(page.getByText("Forced loading")).toBeInTheDocument()
    clickElement("force-off")

    await expect
      .element(page.getByText("Forced loading").query())
      .not.toBeInTheDocument()
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

    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("start"))

    await expect
      .poll(() => document.querySelector("div[data-loading]"))
      .toBeTruthy()
    clickElement("finish")
  })

  test("start with duration auto-finishes", async () => {
    const TestComponent: FC = () => {
      const { background } = useLoading()

      return (
        <button
          data-testid="start"
          onClick={() => background.start({ duration: 100 })}
        >
          Start
        </button>
      )
    }

    const { user } = await render(<TestComponent />)
    await user.click(page.getByTestId("start"))

    await expect
      .poll(() => document.querySelector("div[data-loading]"))
      .toBeTruthy()

    await expect
      .poll(() => document.querySelector("div[data-loading]"))
      .toBeFalsy()
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
      .poll(() => document.querySelector("svg[data-loading]"))
      .toBeTruthy()

    resolve!("loaded")

    await expect.element(page.getByTestId("child")).toBeInTheDocument()
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

    await expect
      .element(page.getByTestId("custom-fallback"))
      .toBeInTheDocument()

    resolve!("loaded")

    await expect.element(page.getByTestId("child")).toBeInTheDocument()
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
      .poll(() => document.querySelector("svg[data-loading]"))
      .toBeTruthy()

    resolve!("loaded")
  })

  describe("message props", () => {
    describe("background component", () => {
      test("renders string message with Text branch", async () => {
        const text = "loading..."
        const TestComponent = () => {
          const { background } = useLoading()

          return (
            <button
              data-testid="start"
              onClick={() => background.start({ message: text })}
            >
              Start
            </button>
          )
        }

        const { user } = await render(<TestComponent />)
        await user.click(page.getByTestId("start"))
        await expect.element(page.getByText(text)).toBeInTheDocument()
        await expect
          .poll(() => document.querySelector("[data-loading]"))
          .toBeTruthy()
      })

      test("renders without message with Text branch", async () => {
        const text = true
        const TestComponent = () => {
          const { background } = useLoading()

          return (
            <button
              data-testid="start"
              onClick={() => background.start({ message: text })}
            >
              Start
            </button>
          )
        }

        const { user } = await render(<TestComponent />)
        await user.click(page.getByTestId("start"))
        await expect
          .element(page.getByTestId("screen-node").query())
          .not.toBeInTheDocument()
        await expect
          .poll(() => document.querySelector("[data-loading]"))
          .toBeTruthy()
      })
    })

    describe("page component", () => {
      test("renders string message with Text branch", async () => {
        const text = "loading..."
        const TestComponent = () => {
          const { page: pageLoading } = useLoading()

          return (
            <button
              data-testid="start"
              onClick={() => pageLoading.start({ message: text })}
            >
              Start
            </button>
          )
        }

        const { user } = await render(<TestComponent />)
        await user.click(page.getByTestId("start"))
        await expect.element(page.getByText(text)).toBeInTheDocument()
        await expect
          .poll(() => document.querySelector("[data-loading]"))
          .toBeTruthy()
      })

      test("renders without message with Text branch", async () => {
        const text = true
        const TestComponent = () => {
          const { page: pageLoading } = useLoading()

          return (
            <button
              data-testid="start"
              onClick={() => pageLoading.start({ message: text })}
            >
              Start
            </button>
          )
        }

        const { user } = await render(<TestComponent />)
        await user.click(page.getByTestId("start"))
        await expect
          .element(page.getByTestId("screen-node").query())
          .not.toBeInTheDocument()
        await expect
          .poll(() => document.querySelector("[data-loading]"))
          .toBeTruthy()
      })
    })

    describe("screen component", () => {
      test("renders string message with Text branch", async () => {
        const text = "loading..."
        const TestComponent = () => {
          const { screen: screenLoading } = useLoading()

          return (
            <button
              data-testid="start"
              onClick={() => screenLoading.start({ message: text })}
            >
              Start
            </button>
          )
        }

        const { user } = await render(<TestComponent />)
        await user.click(page.getByTestId("start"))
        await expect.element(page.getByText(text)).toBeInTheDocument()
        await expect
          .poll(() => document.querySelector("[data-loading]"))
          .toBeTruthy()
      })

      test("renders without message with Text branch", async () => {
        const text = true
        const TestComponent = () => {
          const { screen: screenLoading } = useLoading()

          return (
            <button
              data-testid="start"
              onClick={() => screenLoading.start({ message: text })}
            >
              Start
            </button>
          )
        }

        const { user } = await render(<TestComponent />)
        await user.click(page.getByTestId("start"))
        await expect
          .element(page.getByTestId("screen-node").query())
          .not.toBeInTheDocument()
        await expect
          .poll(() => document.querySelector("[data-loading]"))
          .toBeTruthy()
      })
    })
  })
})
