"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TicketX as OriginalTicketXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TicketXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TicketXIcon = component(Icon)({
  as: OriginalTicketXIcon,
}) as Component<"svg", IconProps>
