"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StrokeLineJoinRound as OriginalStrokeLineJoinRoundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StrokeLineJoinRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StrokeLineJoinRoundIcon = component(Icon)({
  as: OriginalStrokeLineJoinRoundIcon,
}) as Component<"svg", IconProps>
