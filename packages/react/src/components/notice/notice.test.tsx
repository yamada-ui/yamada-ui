import { act, renderHook, screen, waitFor } from "#test"
import { useNotice } from "./use-notice"

describe("useNotice", () => {
  test("creates a notice with default options", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        description: "Test Description",
        title: "Test Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Test Notice")).toBeInTheDocument()
      expect(screen.getByText("Test Description")).toBeInTheDocument()
    })
  })

  test("creates a notice with a specific status", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        status: "success",
        title: "Success Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Success Notice")).toBeInTheDocument()
    })
  })

  test("creates a notice with a loading scheme", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        loadingScheme: "oval",
        title: "Loading Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Loading Notice")).toBeInTheDocument()
    })
  })

  test("closes a specific notice by id", async () => {
    const { result } = renderHook(() => useNotice())
    let noticeId: number | string | undefined

    act(() => {
      noticeId = result.current({
        duration: null,
        title: "Closeable Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Closeable Notice")).toBeInTheDocument()
    })

    act(() => {
      result.current.close(noticeId!)
    })

    await waitFor(() => {
      expect(screen.queryByText("Closeable Notice")).not.toBeInTheDocument()
    })
  })

  test("closes all notices", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        duration: null,
        title: "Notice 1",
      })
      result.current({
        duration: null,
        title: "Notice 2",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Notice 1")).toBeInTheDocument()
      expect(screen.getByText("Notice 2")).toBeInTheDocument()
    })

    act(() => {
      result.current.closeAll()
    })

    await waitFor(() => {
      expect(screen.queryByText("Notice 1")).not.toBeInTheDocument()
      expect(screen.queryByText("Notice 2")).not.toBeInTheDocument()
    })
  })

  test("updates an existing notice", async () => {
    const { result } = renderHook(() => useNotice())
    let noticeId: number | string | undefined

    act(() => {
      noticeId = result.current({
        duration: null,
        title: "Original Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Original Notice")).toBeInTheDocument()
    })

    act(() => {
      result.current.update(noticeId!, {
        duration: null,
        title: "Updated Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Updated Notice")).toBeInTheDocument()
    })
  })

  test("creates a notice with custom placement", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        placement: "end-end",
        title: "Bottom Right Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Bottom Right Notice")).toBeInTheDocument()
    })
  })

  test("creates a notice with custom limit", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        limit: 5,
        title: "Limited Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Limited Notice")).toBeInTheDocument()
    })
  })

  test("updates limit and retrieves the updated limit", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        limit: 10,
        placement: "end-end",
        title: "First Limit Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("First Limit Notice")).toBeInTheDocument()
    })

    act(() => {
      result.current({
        limit: 10,
        placement: "end-end",
        title: "Second Limit Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Second Limit Notice")).toBeInTheDocument()
    })
  })

  test("creates a notice with closeStrategy as a string", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        closeStrategy: "button",
        title: "Button Close Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Button Close Notice")).toBeInTheDocument()
    })
  })

  test("creates a notice with duration", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        duration: 5000,
        title: "Timed Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Timed Notice")).toBeInTheDocument()
    })
  })

  test("creates a notice without icon", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        title: "No Icon Notice",
        withIcon: false,
      })
    })

    await waitFor(() => {
      expect(screen.getByText("No Icon Notice")).toBeInTheDocument()
    })
  })

  test("creates a notice with closable and button close strategy", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        closable: true,
        closeStrategy: "button",
        duration: null,
        title: "Closeable Button Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Closeable Button Notice")).toBeInTheDocument()
      expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument()
    })

    act(() => {
      screen.getByRole("button", { name: /close/i }).click()
    })

    await waitFor(() => {
      expect(
        screen.queryByText("Closeable Button Notice"),
      ).not.toBeInTheDocument()
    })
  })

  test("creates a notice with click close strategy", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        closable: true,
        closeStrategy: "click",
        duration: null,
        title: "Click Close Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Click Close Notice")).toBeInTheDocument()
    })

    act(() => {
      screen.getByText("Click Close Notice").click()
    })

    await waitFor(() => {
      expect(screen.queryByText("Click Close Notice")).not.toBeInTheDocument()
    })
  })

  test("uses default options from hook arguments", async () => {
    const { result } = renderHook(() =>
      useNotice({
        placement: "end-start",
        status: "warning",
      }),
    )

    act(() => {
      result.current({
        title: "Default Options Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Default Options Notice")).toBeInTheDocument()
    })
  })

  test("creates a notice with closable false", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        closable: false,
        closeStrategy: "button",
        duration: null,
        title: "Non-closable Notice",
      })
    })

    await waitFor(() => {
      expect(screen.getByText("Non-closable Notice")).toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: /close/i }),
      ).not.toBeInTheDocument()
    })
  })
})
