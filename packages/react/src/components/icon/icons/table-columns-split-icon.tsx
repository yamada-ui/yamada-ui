"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TableColumnsSplit as OriginalTableColumnsSplitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TableColumnsSplitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TableColumnsSplitIcon = component(Icon)({
  as: OriginalTableColumnsSplitIcon,
}) as Component<"svg", IconProps>
