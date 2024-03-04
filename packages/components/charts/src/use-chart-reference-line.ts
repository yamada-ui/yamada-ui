import { getCSS, useTheme } from "@yamada-ui/core"
import type { CSSUIObject } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { splitObject, isObject, cx, omitObject } from "@yamada-ui/utils"
import { useCallback } from "react"

import type { ReferenceLineProps } from "recharts"

import type {
  ReferenceLineUIProps,
  RequiredChartPropGetter,
} from "./chart.types"
import { referenceLineProperties } from "./chart.types"

export type UseChartReferenceLineOptions = {
  /**
   * Reference lines that should be displayed on the chart.
   */
  referenceLineProps?: ReferenceLineUIProps[]
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
  const propList = referenceLineProps?.map((props, index) => {
    const [reChartsProps, uiProps] = splitObject(props, referenceLineProperties)
    const propClassName = getCSS(uiProps as CSSUIObject)(theme)
    const color = `var(--ui-reference-line-${index})`
    const label: ReferenceLineProps["label"] = {
      value: reChartsProps.label as string,
      fill: color,
      position: "insideBottomLeft",
      ...(isObject(reChartsProps.label) ? reChartsProps.label : {}),
    }

    return { reChartsProps, propClassName, color, label }
  })

  const getReferenceLineProps: RequiredChartPropGetter<
    "div",
    {
      index: number
    },
    Omit<ReferenceLineProps, "ref">
  > = useCallback(
    ({ index, className, ...props }, ref = null) => {
      const { reChartsProps, propClassName, color, label } = propList[index]

      return {
        ref,
        className: cx(className, propClassName, styleClassName),
        stroke: color,
        label,
        ...(props as ReferenceLineProps),
        ...omitObject(reChartsProps, ["label"]),
      }
    },
    [propList, styleClassName],
  )

  return { getReferenceLineProps }
}
