"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayersArrowUp as OriginalLayersArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayersArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayersArrowUpIcon = component(Icon)({
  as: OriginalLayersArrowUpIcon,
}) as Component<"svg", IconProps>
