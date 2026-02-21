"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Eclipse as OriginalEclipseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EclipseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EclipseIcon = component(Icon)({
  as: OriginalEclipseIcon,
}) as Component<"svg", IconProps>
