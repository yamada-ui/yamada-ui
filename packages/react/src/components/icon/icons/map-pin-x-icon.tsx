"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinX as OriginalMapPinXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinXIcon = component(Icon)({
  as: OriginalMapPinXIcon,
}) as Component<"svg", IconProps>
