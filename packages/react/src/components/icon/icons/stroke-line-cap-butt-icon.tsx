"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StrokeLineCapButt as OriginalStrokeLineCapButtIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StrokeLineCapButtIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StrokeLineCapButtIcon = component(Icon)({
  as: OriginalStrokeLineCapButtIcon,
}) as Component<"svg", IconProps>
