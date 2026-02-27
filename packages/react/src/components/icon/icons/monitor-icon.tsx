"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Monitor as OriginalMonitorIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorIcon = component(Icon)({
  as: OriginalMonitorIcon,
}) as Component<"svg", IconProps>
