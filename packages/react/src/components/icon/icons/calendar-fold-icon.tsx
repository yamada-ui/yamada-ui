"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarFold as OriginalCalendarFoldIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarFoldIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarFoldIcon = component(Icon)({
  as: OriginalCalendarFoldIcon,
}) as Component<"svg", IconProps>
