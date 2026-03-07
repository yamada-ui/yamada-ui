import type { FC } from "react"
import { act, render } from "#test"
import { createElement } from "react"
import { renderToString } from "react-dom/server"
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

  test("returns true when the browser is online", () => {
    onLineSpy.mockReturnValue(true)

    const { getByTestId } = render(<Component />)

    expect(getByTestId("status").textContent).toBe("true")
  })

  test("returns false when the browser is offline", () => {
    onLineSpy.mockReturnValue(false)

    const { getByTestId } = render(<Component />)

    expect(getByTestId("status").textContent).toBe("false")
  })

  test("updates when the browser goes offline", () => {
    onLineSpy.mockReturnValue(true)

    const { getByTestId } = render(<Component />)

    expect(getByTestId("status").textContent).toBe("true")

    act(() => {
      onLineSpy.mockReturnValue(false)
      window.dispatchEvent(new Event("offline"))
    })

    expect(getByTestId("status").textContent).toBe("false")
  })

  test("updates when the browser goes online", () => {
    onLineSpy.mockReturnValue(false)

    const { getByTestId } = render(<Component />)

    expect(getByTestId("status").textContent).toBe("false")

    act(() => {
      onLineSpy.mockReturnValue(true)
      window.dispatchEvent(new Event("online"))
    })

    expect(getByTestId("status").textContent).toBe("true")
  })

  test("removes event listeners on unmount", () => {
    const addSpy = vi.spyOn(window, "addEventListener")
    const removeSpy = vi.spyOn(window, "removeEventListener")

    onLineSpy.mockReturnValue(true)

    const { unmount } = render(<Component />)

    expect(addSpy).toHaveBeenCalledWith("online", expect.any(Function))
    expect(addSpy).toHaveBeenCalledWith("offline", expect.any(Function))

    unmount()

    expect(removeSpy).toHaveBeenCalledWith("online", expect.any(Function))
    expect(removeSpy).toHaveBeenCalledWith("offline", expect.any(Function))

    addSpy.mockRestore()
    removeSpy.mockRestore()
  })

  test("uses default getServerSnapshot returning true during SSR", () => {
    const ServerComponent = () => {
      const online = useOnline()

      return createElement("span", null, String(online))
    }

    const html = renderToString(createElement(ServerComponent))

    expect(html).toContain("true")
  })

  test("uses custom getServerSnapshot returning false during SSR", () => {
    const ServerComponent = () => {
      const online = useOnline(() => false)

      return createElement("span", null, String(online))
    }

    const html = renderToString(createElement(ServerComponent))

    expect(html).toContain("false")
  })
})
