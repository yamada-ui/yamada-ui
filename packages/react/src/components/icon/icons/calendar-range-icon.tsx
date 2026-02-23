"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarRange as OriginalCalendarRangeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarRangeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarRangeIcon = component(Icon)({
  as: OriginalCalendarRangeIcon,
}) as Component<"svg", IconProps>
