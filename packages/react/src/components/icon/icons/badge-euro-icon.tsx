"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeEuro as OriginalBadgeEuroIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeEuroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeEuroIcon = component(Icon)({
  as: OriginalBadgeEuroIcon,
}) as Component<"svg", IconProps>
