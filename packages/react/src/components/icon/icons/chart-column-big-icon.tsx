"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChartColumnBig as OriginalChartColumnBigIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChartColumnBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChartColumnBigIcon = component(Icon)({
  as: OriginalChartColumnBigIcon,
}) as Component<"svg", IconProps>
