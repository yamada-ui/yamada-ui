"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeX as OriginalBadgeXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeXIcon = component(Icon)({
  as: OriginalBadgeXIcon,
}) as Component<"svg", IconProps>
