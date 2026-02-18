"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorPlay as OriginalMonitorPlayIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorPlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorPlayIcon = component(Icon)({
  as: OriginalMonitorPlayIcon,
}) as Component<"svg", IconProps>
