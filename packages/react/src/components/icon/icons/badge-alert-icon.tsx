"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeAlert as OriginalBadgeAlertIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeAlertIcon = component(Icon)({
  as: OriginalBadgeAlertIcon,
}) as Component<"svg", IconProps>
