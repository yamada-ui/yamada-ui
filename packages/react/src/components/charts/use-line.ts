import type { LineProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import { useCallback } from "react"
import { useSystem, useTheme } from "../../core"
import { lineProperties } from "./recharts-properties"
import { getComponentProps } from "./utils"

export interface UseLineProps
  extends Merge<
    HTMLProps<"svg">,
    Omit<LineProps, "color" | "fill" | "stroke">
  > {
  css?: CSSObject | CSSObject[]
}

export const useLine = ({ css, ...rest }: UseLineProps) => {
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

  const getLineProps: PropGetter<
    undefined,
    Partial<LineProps>,
    LineProps
  > = useCallback(
    (props) => {
      return {
        className: propClassName,
        color: "",
        fill: "",
        stroke: "",
        ...reChartsProps,
        ...props,
      }
    },
    [propClassName, reChartsProps],
  )

  return { getLineProps }
}

export type UseLineReturn = ReturnType<typeof useLine>
