"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZoomOut as OriginalZoomOutIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZoomOutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZoomOutIcon = component(Icon)({
  as: OriginalZoomOutIcon,
}) as Component<"svg", IconProps>
