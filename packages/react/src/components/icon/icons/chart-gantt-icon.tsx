"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartGantt as OriginalChartGanttIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartGanttIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartGanttIcon = component(Icon)({
  as: OriginalChartGanttIcon,
}) as Component<"svg", IconProps>
