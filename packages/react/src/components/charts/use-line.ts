import type { DotProps, LineProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { Dot } from "./chart.types"
import { useCallback, useMemo } from "react"
import { useSystem, useTheme } from "../../core"
import { isObject } from "../../utils"
import { dotProperties, lineProperties } from "./recharts-properties"
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
  activeDot?: Dot
  dot?: Dot
}

export const useLine = ({
  type = "monotone",
  css,
  activeDot: activeDotProp = {},
  dot: dotProp = {},
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

  const dot: Dot = useMemo(() => {
    if (!isObject(dotProp)) {
      return dotProp
    }

    const [reChartsProps, propClassName] = getComponentProps<
      Dict,
      keyof DotProps
    >(system, [dotProp, dotProperties])(theme)

    return {
      className: propClassName,
      color: "",
      fill: "",
      stroke: "",
      strokeWidth: "",
      ...reChartsProps,
    }
  }, [dotProp, system, theme])

  const activeDot: Dot = useMemo(() => {
    if (!isObject(activeDotProp)) {
      return activeDotProp
    }

    const [reChartsProps, propClassName] = getComponentProps<
      Dict,
      keyof DotProps
    >(system, [activeDotProp, dotProperties])(theme)

    return {
      className: propClassName,
      color: "",
      fill: "",
      stroke: "",
      strokeWidth: "",
      ...reChartsProps,
    }
  }, [activeDotProp, system, theme])

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
