"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinPen as OriginalMapPinPenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinPenIcon = component(Icon)({
  as: OriginalMapPinPenIcon,
}) as Component<"svg", IconProps>
