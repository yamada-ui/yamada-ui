"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Calendar1 as OriginalCalendar1Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Calendar1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Calendar1Icon = component(Icon)({
  as: OriginalCalendar1Icon,
}) as Component<"svg", IconProps>
