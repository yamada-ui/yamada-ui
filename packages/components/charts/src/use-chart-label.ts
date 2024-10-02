import type { CSSUIObject, PropGetter } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import type * as Recharts from "recharts"
import type { LabelProps } from "./chart.types"
import { useTheme } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useCallback } from "react"
import { getComponentProps } from "./chart-utils"
import { labelProperties } from "./rechart-properties"

export interface UseChartLabelOptions {
  /**
   * Props passed down to recharts 'Label' component.
   */
  labelProps?: LabelProps
}

export interface UseChartLabelProps extends UseChartLabelOptions {
  styles: Dict<CSSUIObject>
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
