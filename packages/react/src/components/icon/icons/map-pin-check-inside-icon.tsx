"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinCheckInside as OriginalMapPinCheckInsideIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinCheckInsideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinCheckInsideIcon = component(Icon)({
  as: OriginalMapPinCheckInsideIcon,
}) as Component<"svg", IconProps>
