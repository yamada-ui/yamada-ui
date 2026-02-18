"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileChartPie as OriginalFileChartPieIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileChartPieIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileChartPieIcon = component(Icon)({
  as: OriginalFileChartPieIcon,
}) as Component<"svg", IconProps>
