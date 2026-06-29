"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListSortDescending as OriginalListSortDescendingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListSortDescendingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListSortDescendingIcon = component(Icon)({
  as: OriginalListSortDescendingIcon,
}) as Component<"svg", IconProps>
