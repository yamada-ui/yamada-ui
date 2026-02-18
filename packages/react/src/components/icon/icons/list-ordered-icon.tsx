"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListOrdered as OriginalListOrderedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListOrderedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListOrderedIcon = component(Icon)({
  as: OriginalListOrderedIcon,
}) as Component<"svg", IconProps>
