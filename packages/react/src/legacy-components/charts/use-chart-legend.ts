import type * as Recharts from "recharts"
import type { PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { LegendProps } from "./chart.types"
import { useCallback } from "react"
import { splitObject } from "../../utils"
import { legendProperties } from "./rechart-properties"

export interface UseChartLegendProps {
  /**
   * Props passed down to recharts 'Legend' component.
   */
  legendProps?: LegendProps
}

export const useChartLegend = ({
  legendProps: _legendProps = {},
}: UseChartLegendProps) => {
  const [rest, legendProps] = splitObject<Dict, string>(
    _legendProps,
    legendProperties,
  )

  const getLegendProps: PropGetter<
    Partial<Recharts.LegendProps>,
    Omit<Recharts.LegendProps, "ref">
  > = useCallback(
    (props, ref = null) => {
      return {
        ref,
        verticalAlign: "top",
        ...props,
        ...rest,
      }
    },
    [rest],
  )

  return { getLegendProps, legendProps }
}
