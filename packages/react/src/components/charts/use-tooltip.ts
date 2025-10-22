import type { TooltipProps } from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import { useCallback } from "react"
import { splitObject } from "../../utils"
import { tooltipProperties } from "./recharts-properties"

export interface UseTooltipProps
  extends Merge<HTMLProps, TooltipProps<any, any>> {
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @default 0
   */
  animationDuration?: number
}

export const useTooltip = ({
  animationDuration = 0,
  ...rest
}: UseTooltipProps) => {
  const [tooltipProps, tooltipStyledProps] = splitObject<Dict, string>(
    rest,
    tooltipProperties,
  )

  const getTooltipProps: PropGetter<
    undefined,
    Partial<TooltipProps<any, any>>,
    TooltipProps<any, any>
  > = useCallback(
    (props) => ({
      animationDuration,
      isAnimationActive: (animationDuration || 0) > 0,
      ...props,
      ...tooltipProps,
    }),
    [animationDuration, tooltipProps],
  )

  return {
    getTooltipProps,
    tooltipStyledProps,
  }
}

export type TooltipReturn = ReturnType<typeof useTooltip>
