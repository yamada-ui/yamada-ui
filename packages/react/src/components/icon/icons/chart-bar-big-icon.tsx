"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartBarBig as OriginalChartBarBigIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartBarBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartBarBigIcon = component(Icon)({
  as: OriginalChartBarBigIcon,
}) as Component<"svg", IconProps>
