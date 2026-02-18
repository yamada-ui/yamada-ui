"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarPlus2 as OriginalCalendarPlus2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarPlus2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarPlus2Icon = component(Icon)({
  as: OriginalCalendarPlus2Icon,
}) as Component<"svg", IconProps>
