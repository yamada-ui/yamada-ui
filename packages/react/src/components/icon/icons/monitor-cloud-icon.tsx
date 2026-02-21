"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorCloud as OriginalMonitorCloudIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorCloudIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorCloudIcon = component(Icon)({
  as: OriginalMonitorCloudIcon,
}) as Component<"svg", IconProps>
