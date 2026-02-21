"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarClock as OriginalCalendarClockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarClockIcon = component(Icon)({
  as: OriginalCalendarClockIcon,
}) as Component<"svg", IconProps>
