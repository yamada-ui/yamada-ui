"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartPie as OriginalChartPieIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartPieIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartPieIcon = component(Icon)({
  as: OriginalChartPieIcon,
}) as Component<"svg", IconProps>
