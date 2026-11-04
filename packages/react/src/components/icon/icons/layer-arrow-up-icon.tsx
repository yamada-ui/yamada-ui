"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayerArrowUp as OriginalLayerArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayerArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayerArrowUpIcon = component(Icon)({
  as: OriginalLayerArrowUpIcon,
}) as Component<"svg", IconProps>
