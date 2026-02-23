"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileChartColumnIncreasing as OriginalFileChartColumnIncreasingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileChartColumnIncreasingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileChartColumnIncreasingIcon = component(Icon)({
  as: OriginalFileChartColumnIncreasingIcon,
}) as Component<"svg", IconProps>
