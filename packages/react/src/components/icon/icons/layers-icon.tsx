"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Layers as OriginalLayersIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayersIcon = component(Icon)({
  as: OriginalLayersIcon,
}) as Component<"svg", IconProps>
