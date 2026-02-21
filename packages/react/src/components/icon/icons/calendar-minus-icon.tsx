"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarMinus as OriginalCalendarMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarMinusIcon = component(Icon)({
  as: OriginalCalendarMinusIcon,
}) as Component<"svg", IconProps>
