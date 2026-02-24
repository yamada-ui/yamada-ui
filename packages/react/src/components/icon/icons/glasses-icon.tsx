"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Glasses as OriginalGlassesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GlassesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GlassesIcon = component(Icon)({
  as: OriginalGlassesIcon,
}) as Component<"svg", IconProps>
