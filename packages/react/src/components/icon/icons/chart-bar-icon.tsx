"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartBar as OriginalChartBarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartBarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartBarIcon = component(Icon)({
  as: OriginalChartBarIcon,
}) as Component<"svg", IconProps>
