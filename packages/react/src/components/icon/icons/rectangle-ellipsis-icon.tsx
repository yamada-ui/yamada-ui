"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RectangleEllipsis as OriginalRectangleEllipsisIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RectangleEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RectangleEllipsisIcon = component(Icon)({
  as: OriginalRectangleEllipsisIcon,
}) as Component<"svg", IconProps>
