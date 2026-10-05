"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorPc as OriginalMonitorPcIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorPcIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorPcIcon = component(Icon)({
  as: OriginalMonitorPcIcon,
}) as Component<"svg", IconProps>
