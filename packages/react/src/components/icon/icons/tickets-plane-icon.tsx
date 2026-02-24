"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TicketsPlane as OriginalTicketsPlaneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TicketsPlaneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TicketsPlaneIcon = component(Icon)({
  as: OriginalTicketsPlaneIcon,
}) as Component<"svg", IconProps>
