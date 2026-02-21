"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartSpline as OriginalChartSplineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartSplineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartSplineIcon = component(Icon)({
  as: OriginalChartSplineIcon,
}) as Component<"svg", IconProps>
