import { useTheme, type CSSUIObject } from "@yamada-ui/core"
import { splitObject, type Dict, cx } from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"
import type * as Recharts from "recharts"
import { getClassName } from "./chart-utils"
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
  /**
   * A function to format values on inside the tooltip.
   */
  valueFormatter?: (value: any) => string
  /**
   * A function to format labels on inside the tooltip.
   */
  labelFormatter?: (label: string) => string
}

type UseChartTooltipProps = UseChartTooltipOptions & {
  styles: Dict<CSSUIObject>
}

export const useChartTooltip = ({
  tooltipProps: _tooltipProps = {},
  tooltipAnimationDuration = 0,
  styles,
}: UseChartTooltipProps) => {
  const { theme } = useTheme()
  const { cursor, ...rest } = _tooltipProps
  const cursorClassName = useMemo(
    () => getClassName({ ...styles.cursor, ...cursor })(theme),
    [cursor, styles.cursor, theme],
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
        className: cx("ui-chart__cursor", cursorClassName),
      },
      ...props,
      ...tooltipProps,
    }),
    [cursorClassName, tooltipAnimationDuration, tooltipProps],
  )

  return { tooltipProps: tooltipUIProps, getTooltipProps }
}
