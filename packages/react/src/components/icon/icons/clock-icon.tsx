"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock as OriginalClockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClockIcon = component(Icon)({
  as: OriginalClockIcon,
}) as Component<"svg", IconProps>
