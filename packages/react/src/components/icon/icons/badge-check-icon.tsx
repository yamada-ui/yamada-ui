"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeCheck as OriginalBadgeCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeCheckIcon = component(Icon)({
  as: OriginalBadgeCheckIcon,
}) as Component<"svg", IconProps>
