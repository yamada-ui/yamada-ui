"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartColumnDecreasing as OriginalChartColumnDecreasingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartColumnDecreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartColumnDecreasingIcon = component(Icon)({
  as: OriginalChartColumnDecreasingIcon,
}) as Component<"svg", IconProps>
