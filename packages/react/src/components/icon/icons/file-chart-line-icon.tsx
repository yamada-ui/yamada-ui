"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileChartLine as OriginalFileChartLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileChartLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileChartLineIcon = component(Icon)({
  as: OriginalFileChartLineIcon,
}) as Component<"svg", IconProps>
