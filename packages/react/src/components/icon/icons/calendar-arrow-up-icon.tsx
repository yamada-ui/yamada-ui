"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarArrowUp as OriginalCalendarArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarArrowUpIcon = component(Icon)({
  as: OriginalCalendarArrowUpIcon,
}) as Component<"svg", IconProps>
