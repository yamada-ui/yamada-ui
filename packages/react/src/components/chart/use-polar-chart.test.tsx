import type { ReactNode } from "react"
import { createElement } from "react"

import { fireEvent, render, renderHook } from "#test"
import { ChartContext, useChart } from "./use-chart"
import {
  useAngleAxis,
  useChartPie,
  useChartPieLabel,
  useChartPieLabelLine,
  useChartRadar,
  useChartRadial,
  useChartSector,
  usePolarChart,
  usePolarGrid,
  useRadiusAxis,
} from "./use-polar-chart"

const ChartTestWrapper = ({ children }: { children: ReactNode }) => {
  const value = useChart()
  return <ChartContext value={value}>{children}</ChartContext>
}
const polarRootPropsCases = [
  { label: "useChartPie", useHook: useChartPie as any, hookProps: {} },
  { label: "useChartSector", useHook: useChartSector as any, hookProps: {} },
  {
    label: "useChartPieLabel",
    useHook: useChartPieLabel as any,
    hookProps: { cx: 0, cy: 0, innerRadius: 0, outerRadius: 10 },
  },
  {
    label: "useChartPieLabelLine",
    useHook: useChartPieLabelLine as any,
    hookProps: {},
  },
  { label: "useChartRadar", useHook: useChartRadar as any, hookProps: {} },
  { label: "useAngleAxis", useHook: useAngleAxis as any, hookProps: {} },
  { label: "useRadiusAxis", useHook: useRadiusAxis as any, hookProps: {} },
  { label: "usePolarGrid", useHook: usePolarGrid as any, hookProps: {} },
  {
    label: "useChartRadial",
    useHook: useChartRadial as any,
    hookProps: { nameKey: "name" },
  },
]

describe("usePolarChart getRootProps", () => {
  test("merges hook rest with user props so user wins for plain fields and className merges", () => {
    const hookRef = vi.fn()
    const hookOnPointerEnter = vi.fn()
    const userRef = vi.fn()
    const userOnPointerEnter = vi.fn()

    const { result } = renderHook(
      () =>
        usePolarChart({
          id: "hook-id",
          ref: hookRef,
          className: "hook",
          "data-testid": "polar-root",
          onPointerEnter: hookOnPointerEnter,
        }),
      { withProvider: false },
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      ref: userRef,
      className: "user",
      style: { padding: 2 },
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
    expect(merged["data-testid"]).toBe("polar-root")
    expect(merged.style).toMatchObject({ padding: 2 })
    expect(hookRef).toHaveBeenCalledWith(root)
    expect(userRef).toHaveBeenCalledWith(root)
    expect(hookOnPointerEnter).toHaveBeenCalledTimes(1)
    expect(userOnPointerEnter).toHaveBeenCalledTimes(1)
  })

  test.each(polarRootPropsCases)(
    "$label composes mergeProps behavior in getRootProps",
    ({ label, useHook, hookProps }) => {
      const hookRef = vi.fn()
      const hookOnPointerEnter = vi.fn()
      const userRef = vi.fn()
      const userOnPointerEnter = vi.fn()

      const { result } = renderHook(
        () =>
          useHook({
            ...hookProps,
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
        style: { padding: 2 },
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
      expect(merged.style).toMatchObject({ padding: 2 })
      expect(hookRef).toHaveBeenCalledWith(root)
      expect(userRef).toHaveBeenCalledWith(root)
      expect(hookOnPointerEnter).toHaveBeenCalledTimes(1)
      expect(userOnPointerEnter).toHaveBeenCalledTimes(1)
    },
  )
})
