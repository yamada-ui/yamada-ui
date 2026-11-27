"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StrokeLineJoinMiter as OriginalStrokeLineJoinMiterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StrokeLineJoinMiterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StrokeLineJoinMiterIcon = component(Icon)({
  as: OriginalStrokeLineJoinMiterIcon,
}) as Component<"svg", IconProps>
