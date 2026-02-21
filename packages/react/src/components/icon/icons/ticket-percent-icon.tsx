"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TicketPercent as OriginalTicketPercentIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TicketPercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TicketPercentIcon = component(Icon)({
  as: OriginalTicketPercentIcon,
}) as Component<"svg", IconProps>
