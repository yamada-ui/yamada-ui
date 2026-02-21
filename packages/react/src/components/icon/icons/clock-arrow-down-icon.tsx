"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClockArrowDown as OriginalClockArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClockArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClockArrowDownIcon = component(Icon)({
  as: OriginalClockArrowDownIcon,
}) as Component<"svg", IconProps>
