"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarChevronsRight as OriginalCalendarChevronsRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarChevronsRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarChevronsRightIcon = component(Icon)({
  as: OriginalCalendarChevronsRightIcon,
}) as Component<"svg", IconProps>
