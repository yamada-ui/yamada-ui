"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinMinus as OriginalMapPinMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinMinusIcon = component(Icon)({
  as: OriginalMapPinMinusIcon,
}) as Component<"svg", IconProps>
