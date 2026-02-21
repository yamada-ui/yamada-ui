"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartCandlestick as OriginalChartCandlestickIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartCandlestickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartCandlestickIcon = component(Icon)({
  as: OriginalChartCandlestickIcon,
}) as Component<"svg", IconProps>
