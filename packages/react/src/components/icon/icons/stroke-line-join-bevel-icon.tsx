"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StrokeLineJoinBevel as OriginalStrokeLineJoinBevelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StrokeLineJoinBevelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StrokeLineJoinBevelIcon = component(Icon)({
  as: OriginalStrokeLineJoinBevelIcon,
}) as Component<"svg", IconProps>
