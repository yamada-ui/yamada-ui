"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartNoAxesColumn as OriginalChartNoAxesColumnIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartNoAxesColumnIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartNoAxesColumnIcon = component(Icon)({
  as: OriginalChartNoAxesColumnIcon,
}) as Component<"svg", IconProps>
