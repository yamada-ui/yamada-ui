import { useTheme } from "@yamada-ui/core"
import type { CSSUIObject, PropGetter } from "@yamada-ui/core"
import { splitObject, cx } from "@yamada-ui/utils"
import type { Dict } from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"
import type * as Recharts from "recharts"
import { getClassName } from "./chart-utils"
import type { TooltipProps } from "./chart.types"
import { tooltipProperties } from "./rechart-properties"

export interface UseChartTooltipOptions {
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

interface UseChartTooltipProps extends UseChartTooltipOptions {
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

  const getTooltipProps: PropGetter<
    Partial<Recharts.TooltipProps<any, any>>,
    Recharts.TooltipProps<any, any>
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
