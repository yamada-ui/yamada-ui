"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Calendars as OriginalCalendarsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CalendarsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CalendarsIcon = component(Icon)({
  as: OriginalCalendarsIcon,
}) as Component<"svg", IconProps>
