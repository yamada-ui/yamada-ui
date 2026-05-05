import { a11y, act, renderHook, screen, waitFor } from "#test"
import { NoticeProvider } from "./notice-provider"
import { useNotice } from "./use-notice"

async function expectNoticeVisible(text: string) {
  await waitFor(() => {
    expect(screen.getByText(text)).toBeInTheDocument()
  })
}

async function expectNoticeHidden(text: string) {
  await waitFor(() => {
    expect(screen.queryByText(text)).not.toBeInTheDocument()
  })
}

describe("useNotice", () => {
  test("passes a11y checks", async () => {
    await a11y(<NoticeProvider />)
  })

  test("creates a notice with default options", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        description: "Test Description",
        title: "Test Notice",
      })
    })

    await expectNoticeVisible("Test Notice")
    await expectNoticeVisible("Test Description")
  })

  test("creates a notice with a specific status", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        status: "success",
        title: "Success Notice",
      })
    })

    await expectNoticeVisible("Success Notice")
  })

  test("creates a notice with a loading scheme", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        loadingScheme: "oval",
        title: "Loading Notice",
      })
    })

    await expectNoticeVisible("Loading Notice")
  })

  test("closes a specific notice by id", async () => {
    const { result } = renderHook(() => useNotice())

    let noticeId: number | string = ""

    act(() => {
      noticeId = result.current({
        duration: null,
        title: "Closeable Notice",
      })
    })

    await expectNoticeVisible("Closeable Notice")

    act(() => {
      result.current.close(noticeId)
    })

    await expectNoticeHidden("Closeable Notice")
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

    await expectNoticeVisible("Notice 1")
    await expectNoticeVisible("Notice 2")

    act(() => {
      result.current.closeAll()
    })

    await expectNoticeHidden("Notice 1")
    await expectNoticeHidden("Notice 2")
  })

  test("updates an existing notice", async () => {
    const { result } = renderHook(() => useNotice())

    let noticeId: number | string = ""

    act(() => {
      noticeId = result.current({
        duration: null,
        title: "Original Notice",
      })
    })

    await expectNoticeVisible("Original Notice")

    act(() => {
      result.current.update(noticeId, {
        duration: null,
        title: "Updated Notice",
      })
    })

    await expectNoticeVisible("Updated Notice")
  })

  test("creates a notice with custom placement", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        placement: "end-end",
        title: "Bottom Right Notice",
      })
    })

    await expectNoticeVisible("Bottom Right Notice")
  })

  test("creates a notice with custom limit", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        limit: 5,
        title: "Limited Notice",
      })
    })

    await expectNoticeVisible("Limited Notice")
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

    await expectNoticeVisible("First Limit Notice")

    act(() => {
      result.current({
        limit: 10,
        placement: "end-end",
        title: "Second Limit Notice",
      })
    })

    await expectNoticeVisible("Second Limit Notice")
  })

  test("creates a notice with closeStrategy as a string", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        closeStrategy: "button",
        title: "Button Close Notice",
      })
    })

    await expectNoticeVisible("Button Close Notice")
  })

  test("creates a notice with duration", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        duration: 5000,
        title: "Timed Notice",
      })
    })

    await expectNoticeVisible("Timed Notice")
  })

  test("creates a notice without icon", async () => {
    const { result } = renderHook(() => useNotice())

    act(() => {
      result.current({
        title: "No Icon Notice",
        withIcon: false,
      })
    })

    await expectNoticeVisible("No Icon Notice")
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

    await expectNoticeVisible("Default Options Notice")
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

    await expectNoticeVisible("Non-closable Notice")
    expect(
      screen.queryByRole("button", { name: /close/i }),
    ).not.toBeInTheDocument()
  })
})
