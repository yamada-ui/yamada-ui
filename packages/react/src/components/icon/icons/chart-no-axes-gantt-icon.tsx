"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartNoAxesGantt as OriginalChartNoAxesGanttIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartNoAxesGanttIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartNoAxesGanttIcon = component(Icon)({
  as: OriginalChartNoAxesGanttIcon,
}) as Component<"svg", IconProps>
