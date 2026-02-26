"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Truck as OriginalTruckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TruckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TruckIcon = component(Icon)({
  as: OriginalTruckIcon,
}) as Component<"svg", IconProps>
