import type * as Recharts from "recharts"
import type { CSSObject, RequiredPropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { ReferenceLineProps } from "./chart.types"
import { useCallback, useMemo } from "react"
import { getCSS, getVar } from "../../core"
import { useTheme } from "../../providers/theme-provider"
import { cx, isObject } from "../../utils"
import { getComponentProps } from "./chart-utils"
import { referenceLineProperties } from "./rechart-properties"

export interface UseChartReferenceLineOptions {
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineProps[]
}

interface UseChartReferenceLineProps extends UseChartReferenceLineOptions {
  styles: Dict<CSSObject | undefined>
}

export const useChartReferenceLine = ({
  styles,
  referenceLineProps = [],
}: UseChartReferenceLineProps) => {
  const { theme } = useTheme()
  const styleClassName = getCSS(theme)(styles.referenceLine)
  const propList = useMemo(
    () =>
      referenceLineProps.map((props, index) => {
        const [{ label: labelProp, ...rest }, propClassName] =
          getComponentProps(
            [props, referenceLineProperties],
            styleClassName,
          )(theme)

        const color = getVar(theme)(`reference-line-${index}`)
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
    Partial<Recharts.ReferenceLineProps> & { index: number },
    undefined,
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
