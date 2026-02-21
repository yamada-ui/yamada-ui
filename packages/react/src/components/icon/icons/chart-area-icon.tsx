"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartArea as OriginalChartAreaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartAreaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartAreaIcon = component(Icon)({
  as: OriginalChartAreaIcon,
}) as Component<"svg", IconProps>
