"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeSwissFranc as OriginalBadgeSwissFrancIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeSwissFrancIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeSwissFrancIcon = component(Icon)({
  as: OriginalBadgeSwissFrancIcon,
}) as Component<"svg", IconProps>
