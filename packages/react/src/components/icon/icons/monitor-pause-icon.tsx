"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorPause as OriginalMonitorPauseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorPauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorPauseIcon = component(Icon)({
  as: OriginalMonitorPauseIcon,
}) as Component<"svg", IconProps>
