"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StarMinus as OriginalStarMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StarMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StarMinusIcon = component(Icon)({
  as: OriginalStarMinusIcon,
}) as Component<"svg", IconProps>
