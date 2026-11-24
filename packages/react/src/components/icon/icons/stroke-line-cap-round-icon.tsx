"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StrokeLineCapRound as OriginalStrokeLineCapRoundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StrokeLineCapRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StrokeLineCapRoundIcon = component(Icon)({
  as: OriginalStrokeLineCapRoundIcon,
}) as Component<"svg", IconProps>
