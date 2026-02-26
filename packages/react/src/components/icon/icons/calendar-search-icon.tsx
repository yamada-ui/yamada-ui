"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarSearch as OriginalCalendarSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarSearchIcon = component(Icon)({
  as: OriginalCalendarSearchIcon,
}) as Component<"svg", IconProps>
