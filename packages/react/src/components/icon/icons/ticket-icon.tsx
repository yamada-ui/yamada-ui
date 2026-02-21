"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ticket as OriginalTicketIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TicketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TicketIcon = component(Icon)({
  as: OriginalTicketIcon,
}) as Component<"svg", IconProps>
