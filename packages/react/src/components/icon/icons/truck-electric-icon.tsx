"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TruckElectric as OriginalTruckElectricIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TruckElectricIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TruckElectricIcon = component(Icon)({
  as: OriginalTruckElectricIcon,
}) as Component<"svg", IconProps>
