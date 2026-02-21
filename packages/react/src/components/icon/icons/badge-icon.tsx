"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Badge as OriginalBadgeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeIcon = component(Icon)({
  as: OriginalBadgeIcon,
}) as Component<"svg", IconProps>
