"use client"

import type { FC, ReactNode } from "react"
import type { IconButtonProps } from "../button"
import type { TooltipProps } from "../tooltip"
import { IconButton } from "../button"
import { InfoIcon } from "../icon"
import { Tooltip } from "../tooltip"

export interface TipProps extends Omit<TooltipProps, "children"> {
  /**
   * Icon shown in the Tip trigger.
   */
  icon?: ReactNode
  /**
   * Props for the icon element.
   */
  iconProps?: IconButtonProps
}

/**
 *  `Tip` is a component that displays supplementary information with a built-in icon trigger.
 *
 * @see https://yamada-ui.com/docs/components/tip
 */
export const Tip: FC<TipProps> = ({ icon, iconProps, ...rest }) => {
  const {
    children: iconChildren,
    icon: iconOverride,
    ...iconButtonProps
  } = iconProps ?? {}

  const resolvedIcon = iconOverride ?? iconChildren ?? icon ?? <InfoIcon />

  return (
    <Tooltip {...rest}>
      <IconButton variant="ghost" icon={resolvedIcon} {...iconButtonProps} />
    </Tooltip>
  )
}
