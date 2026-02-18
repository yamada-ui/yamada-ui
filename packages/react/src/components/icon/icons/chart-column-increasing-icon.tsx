"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartColumnIncreasing as OriginalChartColumnIncreasingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartColumnIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartColumnIncreasingIcon = component(Icon)({
  as: OriginalChartColumnIncreasingIcon,
}) as Component<"svg", IconProps>
