"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListSortAscending as OriginalListSortAscendingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListSortAscendingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListSortAscendingIcon = component(Icon)({
  as: OriginalListSortAscendingIcon,
}) as Component<"svg", IconProps>
