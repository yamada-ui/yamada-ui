"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartBarStacked as OriginalChartBarStackedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartBarStackedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartBarStackedIcon = component(Icon)({
  as: OriginalChartBarStackedIcon,
}) as Component<"svg", IconProps>
