"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { VectorPolygon as OriginalVectorPolygonIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VectorPolygonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VectorPolygonIcon = component(Icon)({
  as: OriginalVectorPolygonIcon,
}) as Component<"svg", IconProps>
