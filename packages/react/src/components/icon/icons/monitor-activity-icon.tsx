"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorActivity as OriginalMonitorActivityIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorActivityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorActivityIcon = component(Icon)({
  as: OriginalMonitorActivityIcon,
}) as Component<"svg", IconProps>
