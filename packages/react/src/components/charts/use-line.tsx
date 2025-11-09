import type { LineProps } from "recharts"
import type { ActiveDotProps } from "recharts/types/util/types"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { Dot } from "./chart.types"
import { useCallback } from "react"
import { isFunction, splitObject } from "../../utils"
import { LineActiveDot, LineDot } from "./line"
import { lineProperties } from "./recharts-properties"

export interface UseLineProps<
  T extends number | string | symbol = number | string,
> extends Merge<
    HTMLProps<"svg">,
    Omit<
      LineProps,
      | "activeDot"
      | "color"
      | "dataKey"
      | "dot"
      | "fill"
      | "stroke"
      | "strokeWidth"
    >
  > {
  /**
   * Props passed down to 'ActiveDot' component or function that returns a React element.
   */
  activeDot?: Dot
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey?: T
  /**
   * Props passed down to 'Dot' component or function that returns a React element.
   */
  dot?: Dot
  /**
   * If `true`, active dot is visible.
   *
   * @default true
   */
  withActiveDot?: boolean
  /**
   * If `true`, dot is visible.
   *
   * @default true
   */
  withDot?: boolean
}

export const useLine = ({
  type = "monotone",
  activeDot: activeDotProp,
  dot: dotProp,
  withActiveDot = true,
  withDot = true,
  ...rest
}: UseLineProps) => {
  const [lineProps, lineStyledProps] = splitObject<Dict, string>(
    rest,
    lineProperties,
  )

  const getLineProps: PropGetter<
    undefined,
    Partial<LineProps>,
    LineProps
  > = useCallback(
    (props) => {
      const dot = withDot
        ? isFunction(dotProp)
          ? dotProp
          : ({ cx, cy, value }: ActiveDotProps) => (
              <LineDot cx={cx} cy={cy} value={value} {...dotProp} />
            )
        : false

      const activeDot = withActiveDot
        ? isFunction(activeDotProp)
          ? activeDotProp
          : ({ cx, cy }: ActiveDotProps) => (
              <LineActiveDot cx={cx} cy={cy} {...activeDotProp} />
            )
        : false

      return {
        type,
        activeDot,
        color: "",
        dot,
        fill: `var(--${lineProps.dataKey}-line-stroke)`,
        stroke: `var(--${lineProps.dataKey}-line-stroke)`,
        strokeWidth: "",
        ...props,
        ...lineProps,
      }
    },
    [activeDotProp, dotProp, lineProps, type, withActiveDot, withDot],
  )

  return { getLineProps, lineStyledProps }
}

export type UseLineReturn = ReturnType<typeof useLine>
