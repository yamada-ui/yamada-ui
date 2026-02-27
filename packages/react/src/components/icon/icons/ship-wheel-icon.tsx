"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShipWheel as OriginalShipWheelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShipWheelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShipWheelIcon = component(Icon)({
  as: OriginalShipWheelIcon,
}) as Component<"svg", IconProps>
