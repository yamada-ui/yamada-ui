"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartBarIncreasing as OriginalChartBarIncreasingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartBarIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartBarIncreasingIcon = component(Icon)({
  as: OriginalChartBarIncreasingIcon,
}) as Component<"svg", IconProps>
