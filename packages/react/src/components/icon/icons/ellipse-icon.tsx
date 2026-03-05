"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ellipse as OriginalEllipseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EllipseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EllipseIcon = component(Icon)({
  as: OriginalEllipseIcon,
}) as Component<"svg", IconProps>
