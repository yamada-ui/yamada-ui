"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarArrowRight as OriginalCalendarArrowRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarArrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarArrowRightIcon = component(Icon)({
  as: OriginalCalendarArrowRightIcon,
}) as Component<"svg", IconProps>
