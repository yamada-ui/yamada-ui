"use client"

import type { LegendProps } from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import { useCallback } from "react"
import { splitObject } from "../../utils"
import { legendProperties } from "./recharts-properties"

export interface UseLegendProps extends Merge<HTMLProps, LegendProps> {}

export const useLegend = ({ ...rest }: UseLegendProps) => {
  const [legendProps, legendStyledProps] = splitObject<Dict, string>(
    rest,
    legendProperties,
  )

  const getLegendProps: PropGetter<
    undefined,
    Partial<LegendProps>,
    LegendProps
  > = useCallback(
    (props) => ({
      verticalAlign: "top",
      ...props,
      ...legendProps,
    }),
    [legendProps],
  )

  return {
    getLegendProps,
    legendStyledProps,
  }
}

export type UseLegendReturn = ReturnType<typeof useLegend>
