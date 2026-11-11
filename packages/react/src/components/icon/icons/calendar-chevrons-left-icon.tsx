"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarChevronsLeft as OriginalCalendarChevronsLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarChevronsLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarChevronsLeftIcon = component(Icon)({
  as: OriginalCalendarChevronsLeftIcon,
}) as Component<"svg", IconProps>
