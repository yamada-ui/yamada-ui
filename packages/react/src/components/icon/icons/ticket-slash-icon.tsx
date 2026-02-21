"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TicketSlash as OriginalTicketSlashIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TicketSlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TicketSlashIcon = component(Icon)({
  as: OriginalTicketSlashIcon,
}) as Component<"svg", IconProps>
