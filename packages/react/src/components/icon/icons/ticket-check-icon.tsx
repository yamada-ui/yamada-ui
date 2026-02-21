"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TicketCheck as OriginalTicketCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TicketCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TicketCheckIcon = component(Icon)({
  as: OriginalTicketCheckIcon,
}) as Component<"svg", IconProps>
