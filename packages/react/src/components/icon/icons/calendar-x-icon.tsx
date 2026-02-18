"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarX as OriginalCalendarXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarXIcon = component(Icon)({
  as: OriginalCalendarXIcon,
}) as Component<"svg", IconProps>
