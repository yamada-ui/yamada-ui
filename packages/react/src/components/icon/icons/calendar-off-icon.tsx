"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarOff as OriginalCalendarOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarOffIcon = component(Icon)({
  as: OriginalCalendarOffIcon,
}) as Component<"svg", IconProps>
