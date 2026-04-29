import { createElement } from "react"

import { fireEvent, render, renderHook } from "#test"
import { useCartesianChart } from "./use-cartesian-chart"
import { usePolarChart } from "./use-polar-chart"

describe("useCartesianChart getRootProps", () => {
  test("merges hook rest with user props so user wins for plain fields and className merges", () => {
    const hookRef = vi.fn()
    const hookOnClick = vi.fn()
    const userRef = vi.fn()
    const userOnClick = vi.fn()

    const { result } = renderHook(
      () =>
        useCartesianChart({
          id: "hook-id",
          ref: hookRef,
          className: "hook",
          "data-testid": "chart-root",
          onClick: hookOnClick,
        }),
      { withProvider: false },
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      ref: userRef,
      className: "user",
      style: { marginTop: 4 },
      onClick: userOnClick,
    })
    const { container } = render(createElement("div", merged), {
      withProvider: false,
    })
    const root = container.firstElementChild as HTMLDivElement

    fireEvent.click(root)

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("chart-root")
    expect(merged.style).toMatchObject({ marginTop: 4 })
    expect(hookRef).toHaveBeenCalledWith(root)
    expect(userRef).toHaveBeenCalledWith(root)
    expect(hookOnClick).toHaveBeenCalledTimes(1)
    expect(userOnClick).toHaveBeenCalledTimes(1)
  })
})

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
    const root = container.firstElementChild as HTMLDivElement

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
