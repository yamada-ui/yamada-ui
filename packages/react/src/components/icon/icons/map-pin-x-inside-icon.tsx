"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinXInside as OriginalMapPinXInsideIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinXInsideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinXInsideIcon = component(Icon)({
  as: OriginalMapPinXInsideIcon,
}) as Component<"svg", IconProps>
