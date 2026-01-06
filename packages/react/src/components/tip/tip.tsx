"use client"

import type { FC, ReactNode } from "react"
import type { IconButtonProps } from "../button"
import type { TooltipProps } from "../tooltip"
import { useI18n } from "../../providers/i18n-provider"
import { IconButton } from "../button"
import { InfoIcon } from "../icon"
import { Tooltip } from "../tooltip"

export interface TipProps extends Omit<TooltipProps, "children"> {
  /**
   * Icon shown in the Tip trigger.
   * @default <InfoIcon />
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
export const Tip: FC<TipProps> = ({
  icon = <InfoIcon />,
  iconProps,
  ...rest
}) => {
  const { t } = useI18n("tip")
  const {
    "aria-label": iconAriaLabel,
    children: iconChildren,
    icon: iconOverride,
    ...iconButtonProps
  } = iconProps ?? {}
  const resolvedIcon = iconOverride ?? iconChildren ?? icon

  return (
    <Tooltip {...rest}>
      <IconButton
        variant="ghost"
        aria-label={iconAriaLabel ?? t("More information")}
        icon={resolvedIcon}
        {...iconButtonProps}
      />
    </Tooltip>
  )
}
