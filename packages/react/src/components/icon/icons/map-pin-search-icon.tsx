"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinSearch as OriginalMapPinSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinSearchIcon = component(Icon)({
  as: OriginalMapPinSearchIcon,
}) as Component<"svg", IconProps>
