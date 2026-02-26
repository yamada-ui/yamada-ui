"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TrendingUp as OriginalTrendingUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TrendingUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TrendingUpIcon = component(Icon)({
  as: OriginalTrendingUpIcon,
}) as Component<"svg", IconProps>
