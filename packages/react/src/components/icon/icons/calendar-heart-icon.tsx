"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarHeart as OriginalCalendarHeartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarHeartIcon = component(Icon)({
  as: OriginalCalendarHeartIcon,
}) as Component<"svg", IconProps>
