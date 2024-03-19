import type { CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { splitObject, type Dict } from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"
import type * as Recharts from "recharts"
import type { ChartPropGetter, TooltipProps } from "./chart.types"
import { tooltipProperties } from "./rechart-properties"

export type UseChartTooltipOptions = {
  /**
   * Props passed down to recharts 'Tooltip' component.
   */
  tooltipProps?: TooltipProps
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @default 0
   */
  tooltipAnimationDuration?: number
}

type UseChartTooltipProps = UseChartTooltipOptions & {
  styles: Dict<CSSUIObject>
}

export const useChartTooltip = ({
  tooltipProps: _tooltipProps = {},
  tooltipAnimationDuration = 0,
  styles,
}: UseChartTooltipProps) => {
  const { cursor, ...rest } = _tooltipProps
  const resolvedCursor = useMemo(
    () => ({ ...styles.cursor, ...cursor }),
    [cursor, styles],
  )

  // TODO: replace `className`
  const tooltipVars: Required<CSSUIProps>["var"] = useMemo(
    () =>
      [
        {
          __prefix: "ui",
          name: "cursor-fill",
          token: "colors",
          value: resolvedCursor.fill!,
        },
        {
          __prefix: "ui",
          name: "cursor-stroke",
          token: "colors",
          value: resolvedCursor.stroke!,
        },
        {
          __prefix: "ui",
          name: "cursor-stroke-width",
          token: "colors",
          value: resolvedCursor.strokeWidth!,
        },
        {
          __prefix: "ui",
          name: "cursor-stroke-dasharray",
          token: "colors",
          value: resolvedCursor.strokeDasharray!,
        },
      ] as Required<CSSUIProps>["var"],
    [resolvedCursor],
  )

  const [tooltipProps, tooltipUIProps] = splitObject<Dict, string>(
    rest,
    tooltipProperties,
  )

  const getTooltipProps: ChartPropGetter<
    "div",
    Partial<Recharts.TooltipProps<any, any>>,
    Omit<Recharts.TooltipProps<any, any>, "ref">
  > = useCallback(
    (props, ref = null) => ({
      ref,
      animationDuration: tooltipAnimationDuration,
      isAnimationActive: (tooltipAnimationDuration || 0) > 0,
      cursor: {
        fill: "var(--ui-cursor-fill)",
        stroke: "var(--ui-cursor-stroke)",
        strokeWidth: "var(--ui-cursor-stroke-width)",
        strokeDasharray: "var(--ui-cursor-stroke-dasharray)",
      },
      ...props,
      ...tooltipProps,
    }),
    [tooltipAnimationDuration, tooltipProps],
  )

  return { tooltipProps: tooltipUIProps, getTooltipProps, tooltipVars }
}
