"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartLine as OriginalChartLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartLineIcon = component(Icon)({
  as: OriginalChartLineIcon,
}) as Component<"svg", IconProps>
