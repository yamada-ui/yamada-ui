"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListFilterPlus as OriginalListFilterPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListFilterPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListFilterPlusIcon = component(Icon)({
  as: OriginalListFilterPlusIcon,
}) as Component<"svg", IconProps>
