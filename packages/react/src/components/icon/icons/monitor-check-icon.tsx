"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorCheck as OriginalMonitorCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorCheckIcon = component(Icon)({
  as: OriginalMonitorCheckIcon,
}) as Component<"svg", IconProps>
