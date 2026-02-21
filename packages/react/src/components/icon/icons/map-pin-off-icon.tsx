"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinOff as OriginalMapPinOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinOffIcon = component(Icon)({
  as: OriginalMapPinOffIcon,
}) as Component<"svg", IconProps>
