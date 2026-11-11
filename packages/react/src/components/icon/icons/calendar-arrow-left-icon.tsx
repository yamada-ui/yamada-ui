"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarArrowLeft as OriginalCalendarArrowLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarArrowLeftIcon = component(Icon)({
  as: OriginalCalendarArrowLeftIcon,
}) as Component<"svg", IconProps>
