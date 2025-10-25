import type { TooltipProps } from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { TooltipCursorProps } from "./tooltip"
import { useCallback, useMemo } from "react"
import { splitObject } from "../../utils"
import { tooltipProperties } from "./recharts-properties"
import { TooltipCursor } from "./tooltip"

export interface UseTooltipProps
  extends Merge<HTMLProps, Omit<TooltipProps<any, any>, "cursor">> {
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @default 0
   */
  animationDuration?: number
  /**
   * Props passed down to 'Cursor' component.
   */
  cursor?: TooltipCursorProps
  /**
   * If `true`, cursor is visible.
   *
   * @default true
   */
  withCursor?: boolean
}

export const useTooltip = ({
  animationDuration = 0,
  cursor: cursorProp = {},
  withCursor = true,
  ...rest
}: UseTooltipProps) => {
  const [tooltipProps, tooltipStyledProps] = splitObject<Dict, string>(
    rest,
    tooltipProperties,
  )

  const cursor = useMemo(() => {
    if (!withCursor) {
      return false
    }

    return <TooltipCursor {...cursorProp} />
  }, [cursorProp, withCursor])

  const getTooltipProps: PropGetter<
    undefined,
    Partial<TooltipProps<any, any>>,
    TooltipProps<any, any>
  > = useCallback(
    (props) => ({
      animationDuration,
      cursor,
      isAnimationActive: (animationDuration || 0) > 0,
      ...props,
      ...tooltipProps,
    }),
    [animationDuration, cursor, tooltipProps],
  )

  return {
    getTooltipProps,
    tooltipStyledProps,
  }
}

export type TooltipReturn = ReturnType<typeof useTooltip>
