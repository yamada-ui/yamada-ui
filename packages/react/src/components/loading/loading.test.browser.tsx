import type { FC } from "react"
import { page, render } from "#test/browser"
import { useLoading } from "./loading-provider"

function clickElement(testId: string) {
  const el = page.getByTestId(testId).element()

  if (el instanceof HTMLElement) el.click()
}

describe("useLoading", () => {
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

  test("force clears loading state", async () => {
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
