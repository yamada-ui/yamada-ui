"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MonitorSmartphone as OriginalMonitorSmartphoneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MonitorSmartphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MonitorSmartphoneIcon = component(Icon)({
  as: OriginalMonitorSmartphoneIcon,
}) as Component<"svg", IconProps>
