import type { FC } from "react"
import { page, render } from "#test/browser"
import { Snacks } from "./snacks"
import { useSnacks } from "./use-snacks"

const TestComponent: FC<{
  options?: Parameters<typeof useSnacks>[0]
}> = ({ options }) => {
  const { snack, snacks } = useSnacks(options)

  return (
    <>
      <button
        data-testid="add"
        onClick={() =>
          snack({ description: "Test description", title: "Test" })
        }
      >
        Add
      </button>
      <button data-testid="close-all" onClick={snack.closeAll}>
        Close All
      </button>
      <Snacks data-testid="snacks" snacks={snacks} />
    </>
  )
}

describe("<Snacks />", () => {
  test("renders with direction end", async () => {
    const { user } = await render(
      <TestComponent options={{ direction: "end" }} />,
    )

    await user.click(page.getByTestId("add"))

    await expect.element(page.getByRole("list")).toBeInTheDocument()
  })

  test("closes all snacks", async () => {
    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("add"))

    await expect.element(page.getByRole("list")).toBeInTheDocument()

    await user.click(page.getByTestId("close-all"))

    await expect.element(page.getByRole("list").query()).not.toBeInTheDocument()
  })

  test("respects limit option", async () => {
    const { user } = await render(<TestComponent options={{ limit: 2 }} />)

    await user.click(page.getByTestId("add"))
    await expect.element(page.getByRole("listitem")).toBeVisible()

    await user.click(page.getByTestId("add"))
    await expect
      .poll(() => page.getByRole("listitem").elements().length)
      .toBe(2)

    await user.click(page.getByTestId("add"))

    await expect
      .poll(() => page.getByRole("listitem").elements().length)
      .toBe(2)
  })

  test("renders with closable false", async () => {
    const TestClosable: FC = () => {
      const { snack, snacks } = useSnacks({ closable: false })

      return (
        <>
          <button
            data-testid="add"
            onClick={() =>
              snack({ description: "No close button", title: "No close" })
            }
          >
            Add
          </button>
          <Snacks snacks={snacks} />
        </>
      )
    }

    const { user } = await render(<TestClosable />)

    await user.click(page.getByTestId("add"))

    await expect.element(page.getByText(/^No close$/)).toBeInTheDocument()
  })

  test("renders snack with loading scheme", async () => {
    const TestLoading: FC = () => {
      const { snack, snacks } = useSnacks()

      return (
        <>
          <button
            data-testid="add"
            onClick={() =>
              snack({
                description: "Loading...",
                loadingScheme: "oval",
                title: "Loading",
              })
            }
          >
            Add
          </button>
          <Snacks snacks={snacks} />
        </>
      )
    }

    const { user } = await render(<TestLoading />)

    await user.click(page.getByTestId("add"))

    await expect.element(page.getByText(/^Loading$/)).toBeInTheDocument()
  })

  test("renders snack without icon", async () => {
    const TestNoIcon: FC = () => {
      const { snack, snacks } = useSnacks({ withIcon: false })

      return (
        <>
          <button
            data-testid="add"
            onClick={() =>
              snack({ description: "No icon snack", title: "No icon" })
            }
          >
            Add
          </button>
          <Snacks snacks={snacks} />
        </>
      )
    }

    const { user } = await render(<TestNoIcon />)

    await user.click(page.getByTestId("add"))

    await expect.element(page.getByText(/^No icon$/)).toBeInTheDocument()
  })

  test("pauses duration on mouse enter and resumes on mouse leave", async () => {
    const TestHover: FC = () => {
      const { snack, snacks } = useSnacks()

      return (
        <>
          <button
            data-testid="add"
            onClick={() =>
              snack({
                description: "Hover me",
                duration: 200,
                title: "Hover test",
              })
            }
          >
            Add
          </button>
          <Snacks snacks={snacks} />
        </>
      )
    }

    const { user } = await render(<TestHover />)

    await user.click(page.getByTestId("add"))

    const snackItem = page.getByRole("listitem")
    const snackTitle = page.getByText(/^Hover test$/)

    await expect.element(snackTitle).toBeInTheDocument()

    await user.hover(snackItem)

    await new Promise<void>((resolve) => setTimeout(resolve, 350))

    await expect.element(snackTitle).toBeInTheDocument()

    await user.unhover(snackItem)

    await expect.element(snackTitle.query()).not.toBeInTheDocument()
  })
})
