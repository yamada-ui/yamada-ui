"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListCollapse as OriginalListCollapseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListCollapseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListCollapseIcon = component(Icon)({
  as: OriginalListCollapseIcon,
}) as Component<"svg", IconProps>
