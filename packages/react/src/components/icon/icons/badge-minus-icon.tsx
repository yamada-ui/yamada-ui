"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeMinus as OriginalBadgeMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeMinusIcon = component(Icon)({
  as: OriginalBadgeMinusIcon,
}) as Component<"svg", IconProps>
