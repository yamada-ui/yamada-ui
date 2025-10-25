import type { LineProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { Dot } from "./chart.types"
import { useCallback, useMemo } from "react"
import { useSystem, useTheme } from "../../core"
import { isFunction } from "../../utils"
import { LineActiveDot, LineDot } from "./line"
import { lineProperties } from "./recharts-properties"
import { getComponentProps } from "./utils"

export interface UseLineProps
  extends Merge<
    HTMLProps<"svg">,
    Omit<
      LineProps,
      "activeDot" | "color" | "dot" | "fill" | "stroke" | "strokeWidth"
    >
  > {
  css?: CSSObject | CSSObject[]
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
  css,
  activeDot: activeDotProp,
  dot: dotProp,
  withActiveDot = true,
  withDot = true,
  ...rest
}: UseLineProps) => {
  const { theme } = useTheme()
  const system = useSystem()
  const [reChartsProps, propClassName] = getComponentProps<
    Dict,
    keyof LineProps
  >(
    system,
    [rest, lineProperties],
    css,
  )(theme)

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
        className: propClassName,
        activeDot,
        color: "",
        dot,
        fill: "",
        stroke: "",
        strokeWidth: "",
        ...props,
        ...reChartsProps,
      }
    },
    [activeDot, dot, propClassName, reChartsProps, type],
  )

  return { getLineProps }
}

export type UseLineReturn = ReturnType<typeof useLine>
