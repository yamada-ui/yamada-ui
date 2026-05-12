import type { FC } from "react"
import { page, render } from "#test/browser"
import { useOnline } from "./"

const Component: FC<{ getServerSnapshot?: () => boolean }> = ({
  getServerSnapshot,
}) => {
  const online = useOnline(getServerSnapshot)

  return <p data-testid="status">{String(online)}</p>
}

describe("useOnline", () => {
  const onLineSpy = vi.spyOn(window.navigator, "onLine", "get")

  afterEach(() => {
    onLineSpy.mockReset()
  })

  test("returns true when the browser is online", async () => {
    onLineSpy.mockReturnValue(true)

    await render(<Component />, { withProvider: false })

    await expect.element(page.getByTestId("status")).toHaveTextContent("true")
  })

  test("returns false when the browser is offline", async () => {
    onLineSpy.mockReturnValue(false)

    await render(<Component />, { withProvider: false })

    await expect.element(page.getByTestId("status")).toHaveTextContent("false")
  })

  test("updates when the browser goes offline", async () => {
    onLineSpy.mockReturnValue(true)

    await render(<Component />, { withProvider: false })
    await expect.element(page.getByTestId("status")).toHaveTextContent("true")

    onLineSpy.mockReturnValue(false)
    window.dispatchEvent(new Event("offline"))

    await expect.element(page.getByTestId("status")).toHaveTextContent("false")
  })

  test("updates when the browser goes online", async () => {
    onLineSpy.mockReturnValue(false)

    await render(<Component />, { withProvider: false })
    await expect.element(page.getByTestId("status")).toHaveTextContent("false")

    onLineSpy.mockReturnValue(true)
    window.dispatchEvent(new Event("online"))

    await expect.element(page.getByTestId("status")).toHaveTextContent("true")
  })

  test("removes online and offline listeners with the same callback on unmount", async () => {
    const addEventListenerSpy = vi.spyOn(window, "addEventListener")
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener")

    const { unmount } = await render(<Component />, { withProvider: false })
    const onlineCallback = addEventListenerSpy.mock.calls.find(
      ([event]) => event === "online",
    )?.[1]
    const offlineCallback = addEventListenerSpy.mock.calls.find(
      ([event]) => event === "offline",
    )?.[1]

    expect(onlineCallback).toBeDefined()
    expect(offlineCallback).toBeDefined()
    expect(onlineCallback).toBe(offlineCallback)

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "online",
      onlineCallback,
    )
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "offline",
      offlineCallback,
    )
  })
})
