"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarDays as OriginalCalendarDaysIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarDaysIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarDaysIcon = component(Icon)({
  as: OriginalCalendarDaysIcon,
}) as Component<"svg", IconProps>
