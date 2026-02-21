"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClockArrowUp as OriginalClockArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClockArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClockArrowUpIcon = component(Icon)({
  as: OriginalClockArrowUpIcon,
}) as Component<"svg", IconProps>
