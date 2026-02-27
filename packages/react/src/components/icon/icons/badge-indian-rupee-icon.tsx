"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeIndianRupee as OriginalBadgeIndianRupeeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeIndianRupeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeIndianRupeeIcon = component(Icon)({
  as: OriginalBadgeIndianRupeeIcon,
}) as Component<"svg", IconProps>
