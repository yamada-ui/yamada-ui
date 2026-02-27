"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareChartGantt as OriginalSquareChartGanttIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareChartGanttIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareChartGanttIcon = component(Icon)({
  as: OriginalSquareChartGanttIcon,
}) as Component<"svg", IconProps>
