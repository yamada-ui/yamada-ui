import { userEvent } from "vitest/browser"
import { page, renderHook } from "#test/browser"
import { useNotice } from "./use-notice"

async function expectNoticeVisible(text: string) {
  await expect.element(page.getByText(text)).toBeInTheDocument()
}

async function expectNoticeHidden(text: string) {
  await expect.element(page.getByText(text).query()).not.toBeInTheDocument()
}

describe("useNotice", () => {
  test("creates a notice with closable and button close strategy", async () => {
    const user = userEvent.setup()
    const { result } = await renderHook(() => useNotice())

    result.current({
      closable: true,
      closeStrategy: "button",
      duration: null,
      title: "Closeable Button Notice",
    })

    await expectNoticeVisible("Closeable Button Notice")

    await user.click(page.getByRole("button", { name: /close/i }))

    await expectNoticeHidden("Closeable Button Notice")
  })

  test("creates a notice with click close strategy", async () => {
    const user = userEvent.setup()
    const { result } = await renderHook(() => useNotice())

    result.current({
      closable: true,
      closeStrategy: "click",
      duration: null,
      title: "Click Close Notice",
    })

    await expectNoticeVisible("Click Close Notice")

    await user.click(page.getByText("Click Close Notice"))

    await expectNoticeHidden("Click Close Notice")
  })
})
