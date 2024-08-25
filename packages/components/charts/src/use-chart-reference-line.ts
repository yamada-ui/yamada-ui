import { getCSS, getVar, useTheme } from "@yamada-ui/core"
import type { CSSUIObject } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { isObject, cx } from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"
import type * as Recharts from "recharts"
import { getComponentProps } from "./chart-utils"
import type { ReferenceLineProps, RequiredChartPropGetter } from "./chart.types"
import { referenceLineProperties } from "./rechart-properties"

export type UseChartReferenceLineOptions = {
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineProps[]
}

type UseChartReferenceLineProps = UseChartReferenceLineOptions & {
  styles: Dict<CSSUIObject>
}

export const useChartReferenceLine = ({
  referenceLineProps = [],
  styles,
}: UseChartReferenceLineProps) => {
  const { theme } = useTheme()
  const styleClassName = getCSS(styles.referenceLine)(theme)
  const propList = useMemo(
    () =>
      referenceLineProps.map((props, index) => {
        const [{ label: labelProp, ...rest }, propClassName] =
          getComponentProps(
            [props, referenceLineProperties],
            styleClassName,
          )(theme)

        const color = getVar(`reference-line-${index}`)(theme)
        const label: Recharts.ReferenceLineProps["label"] = {
          value: labelProp as string,
          fill: color,
          position: "insideBottomLeft",
          ...(isObject(labelProp) ? labelProp : {}),
        }

        return { propClassName, color, label, ...rest }
      }),
    [referenceLineProps, styleClassName, theme],
  )

  const getReferenceLineProps: RequiredChartPropGetter<
    "div",
    {
      index: number
    },
    Omit<Recharts.ReferenceLineProps, "ref">
  > = useCallback(
    ({ index, className, ...props }, ref = null) => {
      const { propClassName, color, label, ...rest } = propList[index]

      return {
        ref,
        className: cx(className, propClassName),
        stroke: color,
        label,
        ...(props as Recharts.ReferenceLineProps),
        ...rest,
      }
    },
    [propList],
  )

  return { getReferenceLineProps }
}
