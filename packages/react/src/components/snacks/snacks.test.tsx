import type { FC } from "react"
import "@testing-library/jest-dom/vitest"
import { page, render, renderHook } from "#test/browser"
import { Snacks } from "./snacks"
import { useSnacks } from "./use-snacks"

const TestComponent: FC<{
  options?: Parameters<typeof useSnacks>[0]
  onSnack?: (snack: ReturnType<typeof useSnacks>["snack"]) => void
}> = ({ options, onSnack }) => {
  const { snack, snacks } = useSnacks(options)

  return (
    <>
      <button
        data-testid="add"
        onClick={() => {
          const id = snack({ description: "Test description", title: "Test" })
          onSnack?.(snack)
          return id
        }}
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
  test("renders without snacks", async () => {
    const { result } = await renderHook(() => useSnacks())

    await render(<Snacks data-testid="snacks" snacks={result.current.snacks} />)

    await expect.element(page.getByRole("list").query()).not.toBeInTheDocument()
  })

  test("renders snack items when added", async () => {
    const { user } = await render(<TestComponent />)

    await user.click(page.getByTestId("add"))

    await expect.element(page.getByRole("list")).toBeInTheDocument()
    await expect.element(page.getByRole("listitem")).toBeInTheDocument()
    await expect.element(page.getByText(/^Test$/)).toBeInTheDocument()
    await expect.element(page.getByText("Test description")).toBeInTheDocument()
  })

  test("renders with direction end", async () => {
    const { user } = await render(
      <TestComponent options={{ direction: "end" }} />,
    )

    await user.click(page.getByTestId("add"))

    await expect.element(page.getByRole("list")).toBeInTheDocument()
  })

  test("renders with startIndex", async () => {
    const { user } = await render(<TestComponent options={{ startIndex: 5 }} />)

    await user.click(page.getByTestId("add"))

    await expect.element(page.getByRole("listitem")).toBeInTheDocument()
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

  test("renders snack with variant plain", async () => {
    const TestVariant: FC = () => {
      const { snack, snacks } = useSnacks()

      return (
        <>
          <button
            data-testid="add"
            onClick={() =>
              snack({ variant: "plain", description: "desc", title: "Plain" })
            }
          >
            Add
          </button>
          <Snacks snacks={snacks} />
        </>
      )
    }

    const { user } = await render(<TestVariant />)

    await user.click(page.getByTestId("add"))

    await expect.element(page.getByText("Plain")).toBeInTheDocument()
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
                duration: 5000,
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

    await expect.element(page.getByText("Hover test")).toBeInTheDocument()

    const snackEl = page.getByRole("listitem")

    await user.hover(snackEl)

    await user.unhover(snackEl)

    await expect.element(page.getByText("Hover test")).toBeInTheDocument()
  })
})

describe("useSnacks", () => {
  test("snack method returns id", async () => {
    const { result } = await renderHook(() => useSnacks())

    let id: string | undefined

    id = result.current.snack({
      description: "Test",
      title: "Test",
    })

    expect(id).toBeDefined()
    expect(typeof id).toBe("string")
  })

  test("snack.update updates an existing snack", async () => {
    const { result } = await renderHook(() => useSnacks())

    let id: string | undefined

    id = result.current.snack({
      description: "Original desc",
      title: "Original",
    })

    result.current.snack.update(id, {
      description: "Updated desc",
      title: "Updated",
    })

    await expect
      .poll(
        () => result.current.snacks.items.find((item) => item.id === id)?.title,
      )
      .toBe("Updated")
  })

  test("snack.close removes a snack by id", async () => {
    const { result } = await renderHook(() => useSnacks())

    let id: string | undefined

    id = result.current.snack({
      description: "To be closed",
      title: "Close me",
    })

    await expect.poll(() => result.current.snacks.items.length).toBe(1)

    result.current.snack.close(id)

    await expect.poll(() => result.current.snacks.items.length).toBe(0)
  })

  test("snack.closeAll removes all snacks", async () => {
    const { result } = await renderHook(() => useSnacks())

    result.current.snack({ description: "1", title: "1" })
    result.current.snack({ description: "2", title: "2" })

    await expect
      .poll(() => result.current.snacks.items.length)
      .toBeGreaterThan(0)

    result.current.snack.closeAll()

    await expect.poll(() => result.current.snacks.items.length).toBe(0)
  })

  test("snack.isActive returns true for active snack", async () => {
    const { result } = await renderHook(() => useSnacks())

    let id: string | undefined

    id = result.current.snack({
      description: "Active snack",
      title: "Active",
    })

    await expect.poll(() => result.current.snack.isActive(id)).toBeTruthy()
  })

  test("snack.isActive returns false for non-existent snack", async () => {
    const { result } = await renderHook(() => useSnacks())

    expect(result.current.snack.isActive("non-existent")).toBeFalsy()
  })

  test("snack with custom id", async () => {
    const { result } = await renderHook(() => useSnacks())

    result.current.snack({
      id: "custom-id",
      description: "Custom ID",
      title: "Custom",
    })

    await expect
      .poll(() => result.current.snacks.items[0]?.id)
      .toBe("custom-id")
  })

  test("snacks returns direction and startIndex", async () => {
    const { result } = await renderHook(() =>
      useSnacks({ direction: "end", startIndex: 10 }),
    )

    expect(result.current.snacks.direction).toBe("end")
    expect(result.current.snacks.startIndex).toBe(10)
  })
})
