import type { ReactNode } from "react"
import { renderHook } from "#test"
import {
  ChartContext,
  useChart,
  useChartLabel,
  useChartLabelList,
  useChartLegend,
  useChartTooltip,
} from "./use-chart"

const ChartTestWrapper = ({ children }: { children: ReactNode }) => {
  const value = useChart()
  return <ChartContext value={value}>{children}</ChartContext>
}

describe("use-chart mergeProps getters", () => {
  test("useChartLegend getRootProps merges rest and user props", () => {
    const { result } = renderHook(
      () =>
        useChartLegend({
          id: "hook-id",
          className: "hook",
          "data-testid": "legend-root",
        }),
      { wrapper: ChartTestWrapper },
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("legend-root")
  })

  test("useChartTooltip getContentProps merges rest and user props", () => {
    const { result } = renderHook(() =>
      useChartTooltip({
        id: "hook-id",
        className: "hook",
        "data-testid": "tooltip-content",
      }),
    )

    const merged = result.current.getContentProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("tooltip-content")
  })

  test("useChartLabelList getRootProps merges rest and user props", () => {
    const { result } = renderHook(() =>
      useChartLabelList({
        id: "hook-id",
        className: "hook",
        "data-testid": "label-list",
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("label-list")
  })

  test("useChartLabel getRootProps merges rest and user props", () => {
    const { result } = renderHook(() =>
      useChartLabel({
        id: "hook-id",
        className: "hook",
        "data-testid": "chart-label",
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("chart-label")
  })
})
