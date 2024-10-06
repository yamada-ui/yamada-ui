import type { CSSUIObject, RequiredPropGetter } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import type * as Recharts from "recharts"
import type { LabelListProps } from "./chart.types"
import { getCSS, useTheme } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"
import { getComponentProps } from "./chart-utils"
import { labelListProperties } from "./rechart-properties"

export interface UseChartLabelListOptions {
  /**
   * Props passed down to recharts `LabelList` components.
   */
  labelListProps?: LabelListProps[]
}

interface UseChartLabelListProps extends UseChartLabelListOptions {
  styles: Dict<CSSUIObject | undefined>
}

export const useChartLabelList = ({
  styles,
  labelListProps = [],
}: UseChartLabelListProps) => {
  const { theme } = useTheme()
  const styleClassName = getCSS(styles.labelList)(theme)

  const propList = useMemo(
    () =>
      labelListProps.map((props) =>
        getComponentProps<Dict, string>(
          [props, labelListProperties],
          styleClassName,
        )(theme, true),
      ),
    [labelListProps, styleClassName, theme],
  )

  const getLabelLineProps: RequiredPropGetter<
    { index: number } & Partial<Recharts.LabelListProps<Dict>>,
    Omit<Recharts.LabelListProps<Dict>, "ref">
  > = useCallback(
    ({ className, index, ...props }, ref = null) => {
      const { className: propClassName, ...rest } = propList[index] ?? {}

      return {
        ref,
        className: cx(className, propClassName),
        ...(props as Recharts.LabelListProps<Dict>),
        ...rest,
      }
    },
    [propList],
  )

  return { getLabelLineProps }
}
