"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarX2 as OriginalCalendarX2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarX2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarX2Icon = component(Icon)({
  as: OriginalCalendarX2Icon,
}) as Component<"svg", IconProps>
