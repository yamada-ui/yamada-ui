"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarPlus as OriginalCalendarPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarPlusIcon = component(Icon)({
  as: OriginalCalendarPlusIcon,
}) as Component<"svg", IconProps>
