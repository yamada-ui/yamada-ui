"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TableCellsMerge as OriginalTableCellsMergeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TableCellsMergeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TableCellsMergeIcon = component(Icon)({
  as: OriginalTableCellsMergeIcon,
}) as Component<"svg", IconProps>
