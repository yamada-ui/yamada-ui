"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShipCargo as OriginalShipCargoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShipCargoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShipCargoIcon = component(Icon)({
  as: OriginalShipCargoIcon,
}) as Component<"svg", IconProps>
