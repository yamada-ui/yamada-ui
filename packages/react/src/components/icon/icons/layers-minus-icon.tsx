"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayersMinus as OriginalLayersMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayersMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayersMinusIcon = component(Icon)({
  as: OriginalLayersMinusIcon,
}) as Component<"svg", IconProps>
