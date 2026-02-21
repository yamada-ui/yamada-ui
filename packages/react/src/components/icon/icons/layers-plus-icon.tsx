"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayersPlus as OriginalLayersPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayersPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayersPlusIcon = component(Icon)({
  as: OriginalLayersPlusIcon,
}) as Component<"svg", IconProps>
