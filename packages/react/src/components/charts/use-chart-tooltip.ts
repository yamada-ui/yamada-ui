import type * as Recharts from "recharts"
import type { CSSObject, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { TooltipProps } from "./chart.types"
import { useCallback, useMemo } from "react"
import { useTheme } from "../../providers/theme-provider"
import { cx, splitObject } from "../../utils"
import { getClassName } from "./chart-utils"
import { tooltipProperties } from "./rechart-properties"

export interface UseChartTooltipOptions {
  /**
   * A function to format labels on inside the tooltip.
   */
  labelFormatter?: (label: string) => string
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
   * Props passed down to recharts 'Tooltip' component.
   */
  tooltipProps?: TooltipProps
}

interface UseChartTooltipProps extends UseChartTooltipOptions {
  styles: Dict<CSSObject | undefined>
}

export const useChartTooltip = ({
  styles,
  tooltipAnimationDuration = 0,
  tooltipProps: _tooltipProps = {},
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

  const getTooltipProps: PropGetter<
    Partial<Recharts.TooltipProps<any, any>>,
    Recharts.TooltipProps<any, any>
  > = useCallback(
    (props) => ({
      animationDuration: tooltipAnimationDuration,
      cursor: {
        className: cx("ui-chart__cursor", cursorClassName),
      },
      isAnimationActive: (tooltipAnimationDuration || 0) > 0,
      ...props,
      ...tooltipProps,
    }),
    [cursorClassName, tooltipAnimationDuration, tooltipProps],
  )

  return { getTooltipProps, tooltipProps: tooltipUIProps }
}
