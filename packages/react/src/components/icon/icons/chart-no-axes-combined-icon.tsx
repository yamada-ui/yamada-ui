"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartNoAxesCombined as OriginalChartNoAxesCombinedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartNoAxesCombinedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartNoAxesCombinedIcon = component(Icon)({
  as: OriginalChartNoAxesCombinedIcon,
}) as Component<"svg", IconProps>
