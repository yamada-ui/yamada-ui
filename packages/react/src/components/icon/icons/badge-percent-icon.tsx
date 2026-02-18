"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgePercent as OriginalBadgePercentIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgePercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgePercentIcon = component(Icon)({
  as: OriginalBadgePercentIcon,
}) as Component<"svg", IconProps>
