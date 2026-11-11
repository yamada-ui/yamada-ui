"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayerArrowDown as OriginalLayerArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayerArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayerArrowDownIcon = component(Icon)({
  as: OriginalLayerArrowDownIcon,
}) as Component<"svg", IconProps>
