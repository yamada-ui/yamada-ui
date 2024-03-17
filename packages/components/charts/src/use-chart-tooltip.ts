import type { CSSUIProps } from "@yamada-ui/core"
import { useTheme } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"
import type { TooltipProps } from "recharts"
import { getComponentProps } from "./chart-utils"
import type { ChartPropGetter, TooltipUIProps } from "./chart.types"
import { tooltipProperties } from "./chart.types"

export type UseChartTooltipProps = {
  /**
   * Props passed down to recharts 'Tooltip' component.
   */
  tooltipProps?: TooltipUIProps
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @default 0
   */
  tooltipAnimationDuration?: number
  /**
   * A function to format values on Y axis and inside the tooltip
   */
  valueFormatter?: (value: number) => string
}

export const useChartTooltip = ({
  tooltipProps: _tooltipProps = {},
  tooltipAnimationDuration = 0,
  valueFormatter,
}: UseChartTooltipProps) => {
  const { theme } = useTheme()
  //TODO: defaultの設定＋stroke,strokewidth,strokedassarrayとか。他のチャートも必要
  const { cursor = {}, ...rest } = _tooltipProps
  const tooltipVars: CSSUIProps["var"] = useMemo(
    () => [
      {
        __prefix: "ui",
        name: "cursor-fill",
        token: "colors",
        value: cursor.fill ?? "transparent",
      },
    ],
    [cursor.fill],
  )
  const [tooltipProps, propClassName] = getComponentProps<Dict, string>([
    rest,
    tooltipProperties,
  ])(theme)

  const getTooltipProps: ChartPropGetter<
    "div",
    Partial<TooltipProps<any, any>>,
    Omit<TooltipProps<any, any>, "ref">
  > = useCallback(
    ({ labelClassName, wrapperClassName, ...props } = {}, ref = null) => ({
      ref,
      labelClassName: cx(labelClassName, propClassName),
      wrapperClassName: cx(wrapperClassName, propClassName),
      animationDuration: tooltipAnimationDuration,
      isAnimationActive: (tooltipAnimationDuration || 0) > 0,
      formatter: valueFormatter,
      cursor: {
        fill: "var(--ui-cursor-fill)",
      },
      ...props,
      ...tooltipProps,
    }),
    [propClassName, tooltipAnimationDuration, valueFormatter, tooltipProps],
  )

  return { getTooltipProps, tooltipVars }
}
