"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Drone as OriginalDroneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DroneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DroneIcon = component(Icon)({
  as: OriginalDroneIcon,
}) as Component<"svg", IconProps>
