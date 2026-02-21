"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarCheck as OriginalCalendarCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarCheckIcon = component(Icon)({
  as: OriginalCalendarCheckIcon,
}) as Component<"svg", IconProps>
