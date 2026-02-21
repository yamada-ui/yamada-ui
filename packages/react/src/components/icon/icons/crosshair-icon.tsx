"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Crosshair as OriginalCrosshairIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CrosshairIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CrosshairIcon = component(Icon)({
  as: OriginalCrosshairIcon,
}) as Component<"svg", IconProps>
