"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartNoAxesColumnIncreasing as OriginalChartNoAxesColumnIncreasingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartNoAxesColumnIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartNoAxesColumnIncreasingIcon = component(Icon)({
  as: OriginalChartNoAxesColumnIncreasingIcon,
}) as Component<"svg", IconProps>
