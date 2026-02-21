"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarArrowDown as OriginalCalendarArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarArrowDownIcon = component(Icon)({
  as: OriginalCalendarArrowDownIcon,
}) as Component<"svg", IconProps>
