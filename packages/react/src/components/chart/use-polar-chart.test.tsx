import { createElement } from "react"

import { fireEvent, render, renderHook } from "#test"
import { usePolarChart } from "./use-polar-chart"

describe("usePolarChart getRootProps", () => {
  test("merges hook rest with user props so user wins for plain fields and className merges", () => {
    const hookRef = vi.fn()
    const hookOnClick = vi.fn()
    const userRef = vi.fn()
    const userOnClick = vi.fn()

    const { result } = renderHook(
      () =>
        usePolarChart({
          id: "hook-id",
          ref: hookRef,
          className: "hook",
          "data-testid": "polar-root",
          onClick: hookOnClick,
        }),
      { withProvider: false },
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      ref: userRef,
      className: "user",
      style: { padding: 2 },
      onClick: userOnClick,
    })
    const { container } = render(createElement("div", merged), {
      withProvider: false,
    })
    const root = container.firstElementChild
    if (!(root instanceof HTMLDivElement)) {
      throw new Error("expected HTMLDivElement root")
    }

    fireEvent.click(root)

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("polar-root")
    expect(merged.style).toMatchObject({ padding: 2 })
    expect(hookRef).toHaveBeenCalledWith(root)
    expect(userRef).toHaveBeenCalledWith(root)
    expect(hookOnClick).toHaveBeenCalledTimes(1)
    expect(userOnClick).toHaveBeenCalledTimes(1)
  })
})
