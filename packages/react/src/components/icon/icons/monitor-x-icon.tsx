"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorX as OriginalMonitorXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorXIcon = component(Icon)({
  as: OriginalMonitorXIcon,
}) as Component<"svg", IconProps>
