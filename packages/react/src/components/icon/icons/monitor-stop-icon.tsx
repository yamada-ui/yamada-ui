"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorStop as OriginalMonitorStopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorStopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorStopIcon = component(Icon)({
  as: OriginalMonitorStopIcon,
}) as Component<"svg", IconProps>
