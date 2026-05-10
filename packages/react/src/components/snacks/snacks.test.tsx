import { a11y, act, render, renderHook } from "#test"
import { Snacks } from "./snacks"
import { useSnacks } from "./use-snacks"

describe("<Snacks />", () => {
  test("renders without snacks", () => {
    const { result } = renderHook(() => useSnacks())

    const { queryByRole } = render(<Snacks snacks={result.current.snacks} />)

    expect(queryByRole("list")).not.toBeInTheDocument()
  })

  test("passes a11y checks", async () => {
    const { result } = renderHook(() => useSnacks())

    await a11y(<Snacks snacks={result.current.snacks} />)
  })
})

describe("useSnacks", () => {
  test("snack method returns id", () => {
    const { result } = renderHook(() => useSnacks())

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

  test("snack.update updates an existing snack", () => {
    const { result } = renderHook(() => useSnacks())

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

    expect(
      result.current.snacks.items.find((item) => item.id === id)?.title,
    ).toBe("Updated")
  })

  test("snack.close removes a snack by id", () => {
    const { result } = renderHook(() => useSnacks())

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

  test("snack.closeAll removes all snacks", () => {
    const { result } = renderHook(() => useSnacks())

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

  test("snack.isActive returns true for active snack", () => {
    const { result } = renderHook(() => useSnacks())

    let id: string | undefined

    act(() => {
      id = result.current.snack({
        description: "Active snack",
        title: "Active",
      })
    })

    expect(result.current.snack.isActive(id!)).toBeTruthy()
  })

  test("snack.isActive returns false for non-existent snack", () => {
    const { result } = renderHook(() => useSnacks())

    expect(result.current.snack.isActive("non-existent")).toBeFalsy()
  })

  test("snack with custom id", () => {
    const { result } = renderHook(() => useSnacks())

    act(() => {
      result.current.snack({
        id: "custom-id",
        description: "Custom ID",
        title: "Custom",
      })
    })

    expect(result.current.snacks.items[0]?.id).toBe("custom-id")
  })

  test("snacks returns direction and startIndex", () => {
    const { result } = renderHook(() =>
      useSnacks({ direction: "end", startIndex: 10 }),
    )

    expect(result.current.snacks.direction).toBe("end")
    expect(result.current.snacks.startIndex).toBe(10)
  })
})
