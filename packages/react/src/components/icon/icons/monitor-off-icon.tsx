"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorOff as OriginalMonitorOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorOffIcon = component(Icon)({
  as: OriginalMonitorOffIcon,
}) as Component<"svg", IconProps>
