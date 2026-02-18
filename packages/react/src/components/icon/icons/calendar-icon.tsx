"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Calendar as OriginalCalendarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarIcon = component(Icon)({
  as: OriginalCalendarIcon,
}) as Component<"svg", IconProps>
