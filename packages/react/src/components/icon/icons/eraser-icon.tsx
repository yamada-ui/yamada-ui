"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Eraser as OriginalEraserIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EraserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EraserIcon = component(Icon)({
  as: OriginalEraserIcon,
}) as Component<"svg", IconProps>
