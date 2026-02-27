"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StarHalf as OriginalStarHalfIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StarHalfIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StarHalfIcon = component(Icon)({
  as: OriginalStarHalfIcon,
}) as Component<"svg", IconProps>
