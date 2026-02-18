"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ellipsis as OriginalEllipsisIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EllipsisIcon = component(Icon)({
  as: OriginalEllipsisIcon,
}) as Component<"svg", IconProps>
