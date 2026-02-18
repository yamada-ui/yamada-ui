"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GlassWater as OriginalGlassWaterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GlassWaterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GlassWaterIcon = component(Icon)({
  as: OriginalGlassWaterIcon,
}) as Component<"svg", IconProps>
