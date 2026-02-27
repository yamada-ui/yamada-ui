"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartScatter as OriginalChartScatterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartScatterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartScatterIcon = component(Icon)({
  as: OriginalChartScatterIcon,
}) as Component<"svg", IconProps>
