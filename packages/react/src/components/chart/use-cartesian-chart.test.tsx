import type { ReactNode } from "react"
import { createElement } from "react"

import { fireEvent, render, renderHook } from "#test"
import {
  useCartesianChart,
  useChartArea,
  useChartBar,
  useChartGrid,
  useChartLine,
  useChartReferenceLine,
  useChartXAxis,
  useChartYAxis,
} from "./use-cartesian-chart"
import { ChartContext, useChart } from "./use-chart"

const ChartTestWrapper = ({ children }: { children: ReactNode }) => {
  const value = useChart()
  return <ChartContext value={value}>{children}</ChartContext>
}
const cartesianRootPropsCases = [
  { label: "useChartXAxis", useHook: useChartXAxis as any },
  { label: "useChartYAxis", useHook: useChartYAxis as any },
  { label: "useChartLine", useHook: useChartLine as any },
  { label: "useChartArea", useHook: useChartArea as any },
  { label: "useChartBar", useHook: useChartBar as any },
  { label: "useChartReferenceLine", useHook: useChartReferenceLine as any },
  { label: "useChartGrid", useHook: useChartGrid as any },
]

describe("useCartesianChart getRootProps", () => {
  test("merges hook rest with user props so user wins for plain fields and className merges", () => {
    const hookRef = vi.fn()
    const hookOnPointerEnter = vi.fn()
    const userRef = vi.fn()
    const userOnPointerEnter = vi.fn()

    const { result } = renderHook(
      () =>
        useCartesianChart({
          id: "hook-id",
          ref: hookRef,
          className: "hook",
          "data-testid": "chart-root",
          onPointerEnter: hookOnPointerEnter,
        }),
      { withProvider: false },
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      ref: userRef,
      className: "user",
      style: { marginTop: 4 },
      onPointerEnter: userOnPointerEnter,
    })
    const { container } = render(createElement("div", merged), {
      withProvider: false,
    })
    const root = container.firstElementChild
    if (!(root instanceof HTMLDivElement)) {
      throw new Error("expected HTMLDivElement root")
    }

    fireEvent.pointerEnter(root)

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("chart-root")
    expect(merged.style).toMatchObject({ marginTop: 4 })
    expect(hookRef).toHaveBeenCalledWith(root)
    expect(userRef).toHaveBeenCalledWith(root)
    expect(hookOnPointerEnter).toHaveBeenCalledTimes(1)
    expect(userOnPointerEnter).toHaveBeenCalledTimes(1)
  })

  test.each(cartesianRootPropsCases)(
    "$label composes mergeProps behavior in getRootProps",
    ({ label, useHook }) => {
      const hookRef = vi.fn()
      const hookOnPointerEnter = vi.fn()
      const userRef = vi.fn()
      const userOnPointerEnter = vi.fn()

      const { result } = renderHook(
        () =>
          useHook({
            id: "hook-id",
            ref: hookRef,
            className: "hook",
            "data-testid": label,
            onPointerEnter: hookOnPointerEnter,
          }),
        { wrapper: ChartTestWrapper },
      )

      const merged = result.current.getRootProps({
        id: "user-id",
        ref: userRef,
        className: "user",
        style: { marginTop: 4 },
        onPointerEnter: userOnPointerEnter,
      })

      const { container } = render(createElement("div", merged), {
        withProvider: false,
      })
      const root = container.firstElementChild
      if (!(root instanceof HTMLDivElement)) {
        throw new Error("expected HTMLDivElement root")
      }

      fireEvent.pointerEnter(root)

      expect(merged.id).toBe("user-id")
      expect(String(merged.className)).toContain("hook")
      expect(String(merged.className)).toContain("user")
      expect(merged["data-testid"]).toBe(label)
      expect(merged.style).toMatchObject({ marginTop: 4 })
      expect(hookRef).toHaveBeenCalledWith(root)
      expect(userRef).toHaveBeenCalledWith(root)
      expect(hookOnPointerEnter).toHaveBeenCalledTimes(1)
      expect(userOnPointerEnter).toHaveBeenCalledTimes(1)
    },
  )
})
