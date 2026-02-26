"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TicketMinus as OriginalTicketMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TicketMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TicketMinusIcon = component(Icon)({
  as: OriginalTicketMinusIcon,
}) as Component<"svg", IconProps>
