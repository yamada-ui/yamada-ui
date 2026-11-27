"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeExclamationPoint as OriginalBadgeExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeExclamationPointIcon = component(Icon)({
  as: OriginalBadgeExclamationPointIcon,
}) as Component<"svg", IconProps>
