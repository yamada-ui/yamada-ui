import type * as Recharts from "recharts"
import type { CSSUIObject, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { LabelProps } from "./chart.types"
import { useCallback } from "react"
import { useTheme } from "../../providers/theme-provider"
import { cx } from "../../utils"
import { getComponentProps } from "./chart-utils"
import { labelProperties } from "./rechart-properties"

export interface UseChartLabelOptions {
  /**
   * Props passed down to recharts 'Label' component.
   */
  labelProps?: LabelProps
}

export interface UseChartLabelProps extends UseChartLabelOptions {
  styles: Dict<CSSUIObject | undefined>
}

export const useChartLabel = ({ styles, ...rest }: UseChartLabelProps) => {
  const { theme } = useTheme()

  const [labelProps, labelClassName] = getComponentProps<Dict, string>(
    [rest.labelProps ?? {}, labelProperties],
    styles.label,
  )(theme)

  const getLabelProps: PropGetter<
    Omit<Recharts.LabelProps, "ref">,
    Omit<Recharts.LabelProps, "ref">
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => {
      return {
        ref,
        className: cx(className, labelClassName),
        ...props,
        ...labelProps,
      }
    },
    [labelClassName, labelProps],
  )

  return { getLabelProps }
}
