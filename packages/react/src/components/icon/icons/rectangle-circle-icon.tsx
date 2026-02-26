"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RectangleCircle as OriginalRectangleCircleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RectangleCircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RectangleCircleIcon = component(Icon)({
  as: OriginalRectangleCircleIcon,
}) as Component<"svg", IconProps>
