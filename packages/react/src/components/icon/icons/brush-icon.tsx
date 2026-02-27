"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Brush as OriginalBrushIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BrushIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BrushIcon = component(Icon)({
  as: OriginalBrushIcon,
}) as Component<"svg", IconProps>
