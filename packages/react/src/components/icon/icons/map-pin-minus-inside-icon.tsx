"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinMinusInside as OriginalMapPinMinusInsideIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinMinusInsideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinMinusInsideIcon = component(Icon)({
  as: OriginalMapPinMinusInsideIcon,
}) as Component<"svg", IconProps>
