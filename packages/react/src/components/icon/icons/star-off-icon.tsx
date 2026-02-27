"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StarOff as OriginalStarOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StarOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StarOffIcon = component(Icon)({
  as: OriginalStarOffIcon,
}) as Component<"svg", IconProps>
