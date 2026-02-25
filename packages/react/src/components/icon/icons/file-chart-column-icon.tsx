"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileChartColumn as OriginalFileChartColumnIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileChartColumnIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileChartColumnIcon = component(Icon)({
  as: OriginalFileChartColumnIcon,
}) as Component<"svg", IconProps>
