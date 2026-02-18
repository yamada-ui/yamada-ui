"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClockAlert as OriginalClockAlertIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClockAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClockAlertIcon = component(Icon)({
  as: OriginalClockAlertIcon,
}) as Component<"svg", IconProps>
