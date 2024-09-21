import { useTheme } from "@yamada-ui/core"
import type { CSSUIObject, PropGetter } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { Dict } from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"
import type * as Recharts from "recharts"
import { getComponentProps } from "./chart-utils"
import type { PolarGridProps } from "./chart.types"
import { polarGridProperties } from "./rechart-properties"

export interface UsePolarGridOptions {
  /**
   * Props passed down to recharts `PolarGrid` component.
   */
  polarGridProps?: PolarGridProps
  /**
   * Dash array for the grid lines and cursor. The first number is the length of the solid line section and the second number is the length of the interval.
   */
  strokeDasharray?: string | number
}

interface UsePolarGridProps extends UsePolarGridOptions {
  styles: Dict<CSSUIObject>
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
