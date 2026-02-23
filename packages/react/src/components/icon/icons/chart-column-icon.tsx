"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartColumn as OriginalChartColumnIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartColumnIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartColumnIcon = component(Icon)({
  as: OriginalChartColumnIcon,
}) as Component<"svg", IconProps>
