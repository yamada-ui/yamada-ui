import type { CSSUIObject, RequiredPropGetter } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import type * as Recharts from "recharts"
import type { ReferenceLineProps } from "./chart.types"
import { getCSS, getVar, useTheme } from "@yamada-ui/core"
import { cx, isObject } from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"
import { getComponentProps } from "./chart-utils"
import { referenceLineProperties } from "./rechart-properties"

export interface UseChartReferenceLineOptions {
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineProps[]
}

interface UseChartReferenceLineProps extends UseChartReferenceLineOptions {
  styles: Dict<CSSUIObject | undefined>
}

export const useChartReferenceLine = ({
  styles,
  referenceLineProps = [],
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
          fill: color,
          position: "insideBottomLeft",
          value: labelProp as string,
          ...(isObject(labelProp) ? labelProp : {}),
        }

        return { color, label, propClassName, ...rest }
      }),
    [referenceLineProps, styleClassName, theme],
  )

  const getReferenceLineProps: RequiredPropGetter<
    { index: number } & Partial<Recharts.ReferenceLineProps>,
    Omit<Recharts.ReferenceLineProps, "ref">
  > = useCallback(
    ({ className, index, ...props }, ref = null) => {
      const { color, label, propClassName, ...rest } = propList[index] ?? {}

      return {
        ref,
        className: cx(className, propClassName),
        label,
        stroke: color,
        ...(props as Recharts.ReferenceLineProps),
        ...rest,
      }
    },
    [propList],
  )

  return { getReferenceLineProps }
}
