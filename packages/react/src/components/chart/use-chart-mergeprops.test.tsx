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

  test("mergeProps getter paths compose handlers and merge style objects", () => {
    const hookStyle = { color: "tomato", padding: 4 }
    const userStyle = { marginTop: 8, padding: 12 }

    const cases = [
      {
        getMergedProps: (hookHandler: () => void, userHandler: () => void) => {
          const { result } = renderHook(
            () =>
              useChartLegend({ style: hookStyle, onPointerEnter: hookHandler }),
            { wrapper: ChartTestWrapper },
          )
          return result.current.getRootProps({
            style: userStyle,
            onPointerEnter: userHandler,
          })
        },
      },
      {
        getMergedProps: (hookHandler: () => void, userHandler: () => void) => {
          const { result } = renderHook(() =>
            useChartTooltip({ style: hookStyle, onPointerEnter: hookHandler }),
          )
          return result.current.getContentProps({
            style: userStyle,
            onPointerEnter: userHandler,
          })
        },
      },
      {
        getMergedProps: (hookHandler: () => void, userHandler: () => void) => {
          const { result } = renderHook(() =>
            useChartLabelList({
              style: hookStyle,
              onPointerEnter: hookHandler,
            }),
          )
          return result.current.getRootProps({
            style: userStyle,
            onPointerEnter: userHandler,
          })
        },
      },
      {
        getMergedProps: (hookHandler: () => void, userHandler: () => void) => {
          const { result } = renderHook(() =>
            useChartLabel({ style: hookStyle, onPointerEnter: hookHandler }),
          )
          return result.current.getRootProps({
            style: userStyle,
            onPointerEnter: userHandler,
          })
        },
      },
    ]

    for (const { getMergedProps } of cases) {
      const hookHandler = vi.fn()
      const userHandler = vi.fn()
      const merged = getMergedProps(hookHandler, userHandler)

      ;(merged.onPointerEnter as ((event: unknown) => void) | undefined)?.({})

      expect(hookHandler).toHaveBeenCalledTimes(1)
      expect(userHandler).toHaveBeenCalledTimes(1)
      expect(merged.style).toMatchObject({
        color: "tomato",
        marginTop: 8,
        padding: 12,
      })
    }
  })

  test("useChartTooltip getContentProps composes duplicate onClick handlers", () => {
    const hookOnClick = vi.fn()
    const userOnClick = vi.fn()

    const { result } = renderHook(() =>
      useChartTooltip({
        onClick: hookOnClick,
      }),
    )

    const merged = result.current.getContentProps({
      onClick: userOnClick,
    })

    ;(merged.onClick as ((event: unknown) => void) | undefined)?.({})

    expect(hookOnClick).toHaveBeenCalledTimes(1)
    expect(userOnClick).toHaveBeenCalledTimes(1)
  })
})
