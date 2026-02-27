"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorCog as OriginalMonitorCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorCogIcon = component(Icon)({
  as: OriginalMonitorCogIcon,
}) as Component<"svg", IconProps>
