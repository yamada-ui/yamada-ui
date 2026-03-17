import type { FC } from "react"
import { page, render } from "#test/browser"
import { useOnline } from "./"

const Component: FC = () => {
  const online = useOnline()

  return <p data-testid="status">{String(online)}</p>
}

describe("useOnline", () => {
  test("returns the current online status", async () => {
    await render(<Component />)

    const status = page.getByTestId("status")
    await expect.element(status).toHaveTextContent(String(navigator.onLine))
  })

  test("subscribes to online and offline events on mount", async () => {
    const addSpy = vi.spyOn(window, "addEventListener")

    await render(<Component />)

    expect(addSpy).toHaveBeenCalledWith("online", expect.any(Function))
    expect(addSpy).toHaveBeenCalledWith("offline", expect.any(Function))

    addSpy.mockRestore()
  })

  test("removes event listeners on unmount", async () => {
    const addSpy = vi.spyOn(window, "addEventListener")
    const removeSpy = vi.spyOn(window, "removeEventListener")

    const { unmount } = await render(<Component />)

    expect(addSpy).toHaveBeenCalledWith("online", expect.any(Function))
    expect(addSpy).toHaveBeenCalledWith("offline", expect.any(Function))

    unmount()

    expect(removeSpy).toHaveBeenCalledWith("online", expect.any(Function))
    expect(removeSpy).toHaveBeenCalledWith("offline", expect.any(Function))

    addSpy.mockRestore()
    removeSpy.mockRestore()
  })

  test("calls getSnapshot when online event is dispatched", async () => {
    await render(<Component />)

    const status = page.getByTestId("status")
    await expect.element(status).toHaveTextContent("true")

    window.dispatchEvent(new Event("online"))

    await expect.element(status).toHaveTextContent(String(navigator.onLine))
  })

  test("calls getSnapshot when offline event is dispatched", async () => {
    await render(<Component />)

    const status = page.getByTestId("status")
    await expect.element(status).toHaveTextContent("true")

    window.dispatchEvent(new Event("offline"))

    await expect.element(status).toHaveTextContent(String(navigator.onLine))
  })
})
