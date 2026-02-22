"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorUp as OriginalMonitorUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorUpIcon = component(Icon)({
  as: OriginalMonitorUpIcon,
}) as Component<"svg", IconProps>
