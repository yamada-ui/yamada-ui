"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorDot as OriginalMonitorDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorDotIcon = component(Icon)({
  as: OriginalMonitorDotIcon,
}) as Component<"svg", IconProps>
