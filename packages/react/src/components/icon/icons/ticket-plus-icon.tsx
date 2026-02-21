"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TicketPlus as OriginalTicketPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TicketPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TicketPlusIcon = component(Icon)({
  as: OriginalTicketPlusIcon,
}) as Component<"svg", IconProps>
