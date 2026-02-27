"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClockPlus as OriginalClockPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClockPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClockPlusIcon = component(Icon)({
  as: OriginalClockPlusIcon,
}) as Component<"svg", IconProps>
