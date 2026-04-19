import { page, renderHook } from "#test/browser"
import { useNotice } from "./use-notice"

async function expectNoticeVisible(text: string) {
  await expect.poll(() => document.body.textContent.includes(text)).toBe(true)
}

async function expectNoticeHidden(text: string) {
  await expect.poll(() => document.body.textContent.includes(text)).toBe(false)
}

describe("useNotice", () => {
  test("creates a notice with default options", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      description: "Test Description",
      title: "Test Notice",
    })

    await expectNoticeVisible("Test Notice")
    await expectNoticeVisible("Test Description")
  })

  test("creates a notice with a specific status", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      status: "success",
      title: "Success Notice",
    })

    await expectNoticeVisible("Success Notice")
  })

  test("creates a notice with a loading scheme", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      loadingScheme: "oval",
      title: "Loading Notice",
    })

    await expectNoticeVisible("Loading Notice")
  })

  test("closes a specific notice by id", async () => {
    const { result } = await renderHook(() => useNotice())

    const noticeId = result.current({
      duration: null,
      title: "Closeable Notice",
    })

    await expectNoticeVisible("Closeable Notice")

    result.current.close(noticeId)

    await expectNoticeHidden("Closeable Notice")
  })

  test("closes all notices", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      duration: null,
      title: "Notice 1",
    })
    result.current({
      duration: null,
      title: "Notice 2",
    })

    await expectNoticeVisible("Notice 1")
    await expectNoticeVisible("Notice 2")

    result.current.closeAll()

    await expectNoticeHidden("Notice 1")
    await expectNoticeHidden("Notice 2")
  })

  test("updates an existing notice", async () => {
    const { result } = await renderHook(() => useNotice())

    const noticeId = result.current({
      duration: null,
      title: "Original Notice",
    })

    await expectNoticeVisible("Original Notice")

    result.current.update(noticeId, {
      duration: null,
      title: "Updated Notice",
    })

    await expectNoticeVisible("Updated Notice")
  })

  test("creates a notice with custom placement", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      placement: "end-end",
      title: "Bottom Right Notice",
    })

    await expectNoticeVisible("Bottom Right Notice")
  })

  test("creates a notice with custom limit", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      limit: 5,
      title: "Limited Notice",
    })

    await expectNoticeVisible("Limited Notice")
  })

  test("updates limit and retrieves the updated limit", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      limit: 10,
      placement: "end-end",
      title: "First Limit Notice",
    })

    await expectNoticeVisible("First Limit Notice")

    result.current({
      limit: 10,
      placement: "end-end",
      title: "Second Limit Notice",
    })

    await expectNoticeVisible("Second Limit Notice")
  })

  test("creates a notice with closeStrategy as a string", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      closeStrategy: "button",
      title: "Button Close Notice",
    })

    await expectNoticeVisible("Button Close Notice")
  })

  test("creates a notice with duration", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      duration: 5000,
      title: "Timed Notice",
    })

    await expectNoticeVisible("Timed Notice")
  })

  test("creates a notice without icon", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      title: "No Icon Notice",
      withIcon: false,
    })

    await expectNoticeVisible("No Icon Notice")
  })

  test("creates a notice with closable and button close strategy", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      closable: true,
      closeStrategy: "button",
      duration: null,
      title: "Closeable Button Notice",
    })

    await expectNoticeVisible("Closeable Button Notice")
    await expect
      .poll(() => !!document.querySelector("[data-close-button]"))
      .toBe(true)
    ;(page.getByRole("button").element() as HTMLElement).click()

    await expectNoticeHidden("Closeable Button Notice")
  })

  test("creates a notice with click close strategy", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      closable: true,
      closeStrategy: "click",
      duration: null,
      title: "Click Close Notice",
    })

    await expectNoticeVisible("Click Close Notice")
    ;(page.getByText("Click Close Notice").element() as HTMLElement).click()

    await expectNoticeHidden("Click Close Notice")
  })

  test("uses default options from hook arguments", async () => {
    const { result } = await renderHook(() =>
      useNotice({
        placement: "end-start",
        status: "warning",
      }),
    )

    result.current({
      title: "Default Options Notice",
    })

    await expectNoticeVisible("Default Options Notice")
  })

  test("creates a notice with closable false", async () => {
    const { result } = await renderHook(() => useNotice())

    result.current({
      closable: false,
      closeStrategy: "button",
      duration: null,
      title: "Non-closable Notice",
    })

    await expectNoticeVisible("Non-closable Notice")
    await expect
      .poll(() => !!document.querySelector("[data-close-button]"))
      .toBe(false)
  })
})
