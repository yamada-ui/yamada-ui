"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarSync as OriginalCalendarSyncIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarSyncIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarSyncIcon = component(Icon)({
  as: OriginalCalendarSyncIcon,
}) as Component<"svg", IconProps>
