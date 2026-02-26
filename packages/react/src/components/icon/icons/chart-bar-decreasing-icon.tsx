"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartBarDecreasing as OriginalChartBarDecreasingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartBarDecreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartBarDecreasingIcon = component(Icon)({
  as: OriginalChartBarDecreasingIcon,
}) as Component<"svg", IconProps>
