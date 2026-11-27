"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartBellCurve as OriginalChartBellCurveIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartBellCurveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartBellCurveIcon = component(Icon)({
  as: OriginalChartBellCurveIcon,
}) as Component<"svg", IconProps>
