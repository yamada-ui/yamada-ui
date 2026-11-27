"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartRadar as OriginalChartRadarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartRadarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartRadarIcon = component(Icon)({
  as: OriginalChartRadarIcon,
}) as Component<"svg", IconProps>
