"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZoomIn as OriginalZoomInIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZoomInIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZoomInIcon = component(Icon)({
  as: OriginalZoomInIcon,
}) as Component<"svg", IconProps>
