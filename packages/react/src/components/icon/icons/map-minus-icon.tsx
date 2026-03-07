"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapMinus as OriginalMapMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapMinusIcon = component(Icon)({
  as: OriginalMapMinusIcon,
}) as Component<"svg", IconProps>
