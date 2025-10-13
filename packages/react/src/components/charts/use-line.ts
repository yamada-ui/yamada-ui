import type { DotProps, LineProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { ActiveDotType } from "./chart.types"
import { useCallback, useMemo } from "react"
import { useSystem, useTheme } from "../../core"
import { isObject } from "../../utils"
import { dotProperties, lineProperties } from "./recharts-properties"
import { getComponentProps } from "./utils"

export interface UseLineProps
  extends Merge<
    HTMLProps<"svg">,
    Omit<LineProps, "activeDot" | "color" | "fill" | "stroke" | "strokeWidth">
  > {
  css?: CSSObject | CSSObject[]
  activeDot?: ActiveDotType
}

export const useLine = ({
  css,
  activeDot: activeDotProp = {},
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

  const activeDot: ActiveDotType = useMemo(() => {
    if (isObject(activeDotProp)) {
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
    }

    return activeDotProp
  }, [activeDotProp, system, theme])

  const getLineProps: PropGetter<
    undefined,
    Partial<LineProps>,
    LineProps
  > = useCallback(
    (props) => {
      return {
        className: propClassName,
        activeDot,
        color: "",
        fill: "",
        stroke: "",
        strokeWidth: "",
        ...reChartsProps,
        ...props,
      }
    },
    [activeDot, propClassName, reChartsProps],
  )

  return { getLineProps }
}

export type UseLineReturn = ReturnType<typeof useLine>
