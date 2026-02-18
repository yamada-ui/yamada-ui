"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartColumnStacked as OriginalChartColumnStackedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartColumnStackedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartColumnStackedIcon = component(Icon)({
  as: OriginalChartColumnStackedIcon,
}) as Component<"svg", IconProps>
