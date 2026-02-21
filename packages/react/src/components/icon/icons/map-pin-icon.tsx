"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPin as OriginalMapPinIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinIcon = component(Icon)({
  as: OriginalMapPinIcon,
}) as Component<"svg", IconProps>
