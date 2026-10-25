"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GraphStar as OriginalGraphStarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GraphStarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GraphStarIcon = component(Icon)({
  as: OriginalGraphStarIcon,
}) as Component<"svg", IconProps>
