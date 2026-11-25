"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StrokeLineCapSquare as OriginalStrokeLineCapSquareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StrokeLineCapSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StrokeLineCapSquareIcon = component(Icon)({
  as: OriginalStrokeLineCapSquareIcon,
}) as Component<"svg", IconProps>
