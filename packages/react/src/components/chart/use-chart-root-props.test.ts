import { renderHook } from "#test"
import { useCartesianChart } from "./use-cartesian-chart"
import { usePolarChart } from "./use-polar-chart"

describe("useCartesianChart getRootProps", () => {
  test("merges hook rest with user props so user wins for plain fields and className merges", () => {
    const { result } = renderHook(() =>
      useCartesianChart({
        id: "hook-id",
        className: "hook",
        "data-testid": "chart-root",
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
      style: { marginTop: 4 },
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("chart-root")
    expect(merged.style).toMatchObject({ marginTop: 4 })
  })
})

describe("usePolarChart getRootProps", () => {
  test("merges hook rest with user props so user wins for plain fields and className merges", () => {
    const { result } = renderHook(() =>
      usePolarChart({
        id: "hook-id",
        className: "hook",
        "data-testid": "polar-root",
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
      style: { padding: 2 },
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("polar-root")
    expect(merged.style).toMatchObject({ padding: 2 })
  })
})
