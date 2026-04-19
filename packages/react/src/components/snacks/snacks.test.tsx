import type { FC } from "react"
import { render, renderHook } from "#test/browser"
import { act, fireEvent, screen, waitFor } from "@testing-library/react"
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

    expect(screen.queryByRole("list")).not.toBeInTheDocument()
  })

  test("renders snack items when added", async () => {
    await render(<TestComponent />)

    act(() => {
      fireEvent.click(screen.getByTestId("add"))
    })

    await waitFor(() => {
      expect(screen.getByRole("list")).toBeInTheDocument()
      expect(screen.getByRole("listitem")).toBeInTheDocument()
      expect(screen.getByText("Test")).toBeInTheDocument()
      expect(screen.getByText("Test description")).toBeInTheDocument()
    })
  })

  test("renders with direction end", async () => {
    await render(<TestComponent options={{ direction: "end" }} />)

    act(() => {
      fireEvent.click(screen.getByTestId("add"))
    })

    await waitFor(() => {
      expect(screen.getByRole("list")).toBeInTheDocument()
    })
  })

  test("renders with startIndex", async () => {
    await render(<TestComponent options={{ startIndex: 5 }} />)

    act(() => {
      fireEvent.click(screen.getByTestId("add"))
    })

    await waitFor(() => {
      expect(screen.getByRole("listitem")).toBeInTheDocument()
    })
  })

  test("closes all snacks", async () => {
    await render(<TestComponent />)

    act(() => {
      fireEvent.click(screen.getByTestId("add"))
    })

    await waitFor(() => {
      expect(screen.getByRole("list")).toBeInTheDocument()
    })

    act(() => {
      fireEvent.click(screen.getByTestId("close-all"))
    })

    await waitFor(
      () => {
        expect(screen.queryByRole("list")).not.toBeInTheDocument()
      },
      { timeout: 3000 },
    )
  })

  test("respects limit option", async () => {
    await render(<TestComponent options={{ limit: 2 }} />)

    act(() => {
      fireEvent.click(screen.getByTestId("add"))
      fireEvent.click(screen.getByTestId("add"))
      fireEvent.click(screen.getByTestId("add"))
    })

    await waitFor(() => {
      const items = screen.getAllByRole("listitem")
      expect(items).toHaveLength(2)
    })
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

    await render(<TestClosable />)

    act(() => {
      fireEvent.click(screen.getByTestId("add"))
    })

    await waitFor(() => {
      expect(screen.getByText("No close")).toBeInTheDocument()
    })
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

    await render(<TestVariant />)

    act(() => {
      fireEvent.click(screen.getByTestId("add"))
    })

    await waitFor(() => {
      expect(screen.getByText("Plain")).toBeInTheDocument()
    })
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

    await render(<TestLoading />)

    act(() => {
      fireEvent.click(screen.getByTestId("add"))
    })

    await waitFor(() => {
      expect(screen.getByText("Loading")).toBeInTheDocument()
    })
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

    await render(<TestNoIcon />)

    act(() => {
      fireEvent.click(screen.getByTestId("add"))
    })

    await waitFor(() => {
      expect(screen.getByText("No icon")).toBeInTheDocument()
    })
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

    await render(<TestHover />)

    act(() => {
      fireEvent.click(screen.getByTestId("add"))
    })

    await waitFor(() => {
      expect(screen.getByText("Hover test")).toBeInTheDocument()
    })

    const snackEl = screen.getByRole("listitem")

    act(() => {
      fireEvent.mouseEnter(snackEl)
    })

    act(() => {
      fireEvent.mouseLeave(snackEl)
    })

    expect(screen.getByText("Hover test")).toBeInTheDocument()
  })
})

describe("useSnacks", () => {
  test("snack method returns id", async () => {
    const { result } = await renderHook(() => useSnacks())

    let id: string | undefined

    act(() => {
      id = result.current.snack({
        description: "Test",
        title: "Test",
      })
    })

    expect(id).toBeDefined()
    expect(typeof id).toBe("string")
  })

  test("snack.update updates an existing snack", async () => {
    const { result } = await renderHook(() => useSnacks())

    let id: string | undefined

    act(() => {
      id = result.current.snack({
        description: "Original desc",
        title: "Original",
      })
    })

    act(() => {
      result.current.snack.update(id!, {
        description: "Updated desc",
        title: "Updated",
      })
    })

    const updated = result.current.snacks.items.find((item) => item.id === id)
    expect(updated?.title).toBe("Updated")
  })

  test("snack.close removes a snack by id", async () => {
    const { result } = await renderHook(() => useSnacks())

    let id: string | undefined

    act(() => {
      id = result.current.snack({
        description: "To be closed",
        title: "Close me",
      })
    })

    expect(result.current.snacks.items).toHaveLength(1)

    act(() => {
      result.current.snack.close(id!)
    })

    expect(result.current.snacks.items).toHaveLength(0)
  })

  test("snack.closeAll removes all snacks", async () => {
    const { result } = await renderHook(() => useSnacks())

    act(() => {
      result.current.snack({ description: "1", title: "1" })
      result.current.snack({ description: "2", title: "2" })
    })

    expect(result.current.snacks.items.length).toBeGreaterThan(0)

    act(() => {
      result.current.snack.closeAll()
    })

    expect(result.current.snacks.items).toHaveLength(0)
  })

  test("snack.isActive returns true for active snack", async () => {
    const { result } = await renderHook(() => useSnacks())

    let id: string | undefined

    act(() => {
      id = result.current.snack({
        description: "Active snack",
        title: "Active",
      })
    })

    expect(result.current.snack.isActive(id!)).toBeTruthy()
  })

  test("snack.isActive returns false for non-existent snack", async () => {
    const { result } = await renderHook(() => useSnacks())

    expect(result.current.snack.isActive("non-existent")).toBeFalsy()
  })

  test("snack with custom id", async () => {
    const { result } = await renderHook(() => useSnacks())

    act(() => {
      result.current.snack({
        id: "custom-id",
        description: "Custom ID",
        title: "Custom",
      })
    })

    expect(result.current.snacks.items[0]?.id).toBe("custom-id")
  })

  test("snacks returns direction and startIndex", async () => {
    const { result } = await renderHook(() =>
      useSnacks({ direction: "end", startIndex: 10 }),
    )

    expect(result.current.snacks.direction).toBe("end")
    expect(result.current.snacks.startIndex).toBe(10)
  })
})
