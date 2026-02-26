"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartNetwork as OriginalChartNetworkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartNetworkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartNetworkIcon = component(Icon)({
  as: OriginalChartNetworkIcon,
}) as Component<"svg", IconProps>
