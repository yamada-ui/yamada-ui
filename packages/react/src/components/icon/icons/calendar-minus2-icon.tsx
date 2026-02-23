"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarMinus2 as OriginalCalendarMinus2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarMinus2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarMinus2Icon = component(Icon)({
  as: OriginalCalendarMinus2Icon,
}) as Component<"svg", IconProps>
