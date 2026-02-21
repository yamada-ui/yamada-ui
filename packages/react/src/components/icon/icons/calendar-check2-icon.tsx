"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CalendarCheck2 as OriginalCalendarCheck2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarCheck2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarCheck2Icon = component(Icon)({
  as: OriginalCalendarCheck2Icon,
}) as Component<"svg", IconProps>
