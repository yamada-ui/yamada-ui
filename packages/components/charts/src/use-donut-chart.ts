import type { CSSUIObject } from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { useState } from "react"

export type UseDonutChartOptions = {
  /**
   * A function to format values on Y axis and inside the tooltip.
   */
  valueFormatter?: (value: number) => string
}

type UseDonutChartProps = UseDonutChartOptions & {
  styles: Dict<CSSUIObject>
}

export const useDonutChart = ({}: UseDonutChartProps) => {
  //TODO: replace
  const [, setHighlightedArea] = useState<string | null>(null)
  // const [highlightedArea, setHighlightedArea] = useState<string | null>(null)

  return {
    setHighlightedArea,
  }
}
