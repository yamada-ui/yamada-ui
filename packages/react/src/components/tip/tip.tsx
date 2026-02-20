"use client"

import type { FC } from "react"
import type { WithoutThemeProps } from "../../core"
import type { IconButtonProps } from "../button"
import type { StatusScheme } from "../status"
import type { TooltipProps, TooltipStyle } from "../tooltip"
import { isString } from "../../utils"
import { IconButton } from "../button"
import {
  CircleCheckBigIcon,
  InfoIcon,
  OctagonAlertIcon,
  TriangleAlertIcon,
} from "../icon"
import { Tooltip, useTooltipProps } from "../tooltip"

const icons = {
  error: OctagonAlertIcon,
  info: InfoIcon,
  success: CircleCheckBigIcon,
  warning: TriangleAlertIcon,
} as const

export interface TipProps
  extends
    WithoutThemeProps<TooltipProps, TooltipStyle>,
    Omit<IconButtonProps, "content" | "offset" | "transform"> {
  /**
   * The status of the tip.
   *
   * @default 'info'
   */
  status?: StatusScheme
}

/**
 *  `Tip` is a component that displays supplementary information with a built-in icon trigger.
 *
 * @see https://yamada-ui.com/docs/components/tip
 */
export const Tip: FC<TipProps> = (props) => {
  const [
    tooltipProps,
    {
      animationScheme,
      content,
      duration,
      status = "info",
      contentProps,
      portalProps,
      ...rest
    },
  ] = useTooltipProps(props)
  const Icon = icons[status]

  return (
    <Tooltip
      animationScheme={animationScheme}
      content={content}
      duration={duration}
      contentProps={contentProps}
      portalProps={portalProps}
      {...tooltipProps}
    >
      <IconButton
        size="2xs"
        variant="ghost"
        aria-label={isString(content) ? content : undefined}
        icon={<Icon />}
        {...rest}
      />
    </Tooltip>
  )
}
