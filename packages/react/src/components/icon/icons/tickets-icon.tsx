"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tickets as OriginalTicketsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TicketsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TicketsIcon = component(Icon)({
  as: OriginalTicketsIcon,
}) as Component<"svg", IconProps>
