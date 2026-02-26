"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorDown as OriginalMonitorDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorDownIcon = component(Icon)({
  as: OriginalMonitorDownIcon,
}) as Component<"svg", IconProps>
