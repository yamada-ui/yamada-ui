"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TableRowsSplit as OriginalTableRowsSplitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TableRowsSplitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TableRowsSplitIcon = component(Icon)({
  as: OriginalTableRowsSplitIcon,
}) as Component<"svg", IconProps>
