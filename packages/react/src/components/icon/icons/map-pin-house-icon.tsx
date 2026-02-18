"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MapPinHouse as OriginalMapPinHouseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MapPinHouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MapPinHouseIcon = component(Icon)({
  as: OriginalMapPinHouseIcon,
}) as Component<"svg", IconProps>
