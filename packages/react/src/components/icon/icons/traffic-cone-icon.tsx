"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TrafficCone as OriginalTrafficConeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TrafficConeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TrafficConeIcon = component(Icon)({
  as: OriginalTrafficConeIcon,
}) as Component<"svg", IconProps>
