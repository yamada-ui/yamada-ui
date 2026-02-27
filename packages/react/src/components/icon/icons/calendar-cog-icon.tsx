"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarCog as OriginalCalendarCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarCogIcon = component(Icon)({
  as: OriginalCalendarCogIcon,
}) as Component<"svg", IconProps>
