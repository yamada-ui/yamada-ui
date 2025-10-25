import type { LineProps } from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { Dot } from "./chart.types"
import { useCallback, useMemo } from "react"
import { isFunction, splitObject } from "../../utils"
import { LineActiveDot, LineDot } from "./line"
import { lineProperties } from "./recharts-properties"

export interface UseLineProps
  extends Merge<
    HTMLProps<"svg">,
    Omit<
      LineProps,
      "activeDot" | "color" | "dot" | "fill" | "stroke" | "strokeWidth"
    >
  > {
  /**
   * Props passed down to 'ActiveDot' component or function that returns a React element.
   */
  activeDot?: Dot
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

  const dot = useMemo(() => {
    if (!withDot) {
      return false
    }

    if (isFunction(dotProp)) {
      return dotProp
    }

    return <LineDot {...dotProp} />
  }, [dotProp, withDot])

  const activeDot = useMemo(() => {
    if (!withActiveDot) {
      return false
    }

    if (isFunction(activeDotProp)) {
      return activeDotProp
    }

    return <LineActiveDot {...activeDotProp} />
  }, [activeDotProp, withActiveDot])

  const getLineProps: PropGetter<
    undefined,
    Partial<LineProps>,
    LineProps
  > = useCallback(
    (props) => {
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
    [activeDot, dot, lineProps, type],
  )

  return { getLineProps, lineStyledProps }
}

export type UseLineReturn = ReturnType<typeof useLine>
