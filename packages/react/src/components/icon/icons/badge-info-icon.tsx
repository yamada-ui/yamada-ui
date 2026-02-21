"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeInfo as OriginalBadgeInfoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeInfoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeInfoIcon = component(Icon)({
  as: OriginalBadgeInfoIcon,
}) as Component<"svg", IconProps>
