"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayersArrowDown as OriginalLayersArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayersArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayersArrowDownIcon = component(Icon)({
  as: OriginalLayersArrowDownIcon,
}) as Component<"svg", IconProps>
