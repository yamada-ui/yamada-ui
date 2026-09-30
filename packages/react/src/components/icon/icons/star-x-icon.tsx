"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StarX as OriginalStarXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StarXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StarXIcon = component(Icon)({
  as: OriginalStarXIcon,
}) as Component<"svg", IconProps>
