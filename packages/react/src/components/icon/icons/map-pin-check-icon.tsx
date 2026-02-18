"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinCheck as OriginalMapPinCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinCheckIcon = component(Icon)({
  as: OriginalMapPinCheckIcon,
}) as Component<"svg", IconProps>
