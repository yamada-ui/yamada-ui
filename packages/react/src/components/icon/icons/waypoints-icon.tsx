"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Waypoints as OriginalWaypointsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WaypointsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WaypointsIcon = component(Icon)({
  as: OriginalWaypointsIcon,
}) as Component<"svg", IconProps>
