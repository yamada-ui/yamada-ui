"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TrendingDown as OriginalTrendingDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TrendingDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TrendingDownIcon = component(Icon)({
  as: OriginalTrendingDownIcon,
}) as Component<"svg", IconProps>
