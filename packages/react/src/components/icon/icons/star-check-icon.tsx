"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StarCheck as OriginalStarCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StarCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StarCheckIcon = component(Icon)({
  as: OriginalStarCheckIcon,
}) as Component<"svg", IconProps>
