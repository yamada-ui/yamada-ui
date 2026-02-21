"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Shapes as OriginalShapesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShapesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShapesIcon = component(Icon)({
  as: OriginalShapesIcon,
}) as Component<"svg", IconProps>
