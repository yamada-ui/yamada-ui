"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartNoAxesColumnDecreasing as OriginalChartNoAxesColumnDecreasingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartNoAxesColumnDecreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartNoAxesColumnDecreasingIcon = component(Icon)({
  as: OriginalChartNoAxesColumnDecreasingIcon,
}) as Component<"svg", IconProps>
