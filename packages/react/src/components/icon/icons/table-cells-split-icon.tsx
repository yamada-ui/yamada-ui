"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TableCellsSplit as OriginalTableCellsSplitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TableCellsSplitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TableCellsSplitIcon = component(Icon)({
  as: OriginalTableCellsSplitIcon,
}) as Component<"svg", IconProps>
