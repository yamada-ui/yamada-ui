import type * as Recharts from "recharts"
import type { CSSUIObject, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { PolarGridProps } from "./chart.types"
import { useCallback, useMemo } from "react"
import { useTheme } from "../../providers/theme-provider"
import { cx } from "../../utils"
import { getComponentProps } from "./chart-utils"
import { polarGridProperties } from "./rechart-properties"

export interface UsePolarGridOptions {
  /**
   * Dash array for the grid lines and cursor. The first number is the length of the solid line section and the second number is the length of the interval.
   */
  strokeDasharray?: number | string
  /**
   * Props passed down to recharts `PolarGrid` component.
   */
  polarGridProps?: PolarGridProps
}

interface UsePolarGridProps extends UsePolarGridOptions {
  styles: Dict<CSSUIObject | undefined>
}

export const usePolarGrid = ({
  strokeDasharray,
  styles,
  ...rest
}: UsePolarGridProps) => {
  const { theme } = useTheme()

  const [polarGridProps, polarGridClassName] = useMemo(
    () =>
      getComponentProps<Dict, string>(
        [rest.polarGridProps ?? {}, polarGridProperties],
        styles.polarGrid,
      )(theme),
    [rest.polarGridProps, styles.polarGrid, theme],
  )

  const getPolarGridProps: PropGetter<
    Recharts.PolarGridProps,
    Recharts.PolarGridProps
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => ({
      ref,
      className: cx(className, polarGridClassName),
      strokeDasharray,
      ...props,
      ...polarGridProps,
    }),
    [polarGridClassName, polarGridProps, strokeDasharray],
  )

  return { getPolarGridProps }
}
