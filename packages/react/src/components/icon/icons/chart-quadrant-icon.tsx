"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartQuadrant as OriginalChartQuadrantIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartQuadrantIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartQuadrantIcon = component(Icon)({
  as: OriginalChartQuadrantIcon,
}) as Component<"svg", IconProps>
