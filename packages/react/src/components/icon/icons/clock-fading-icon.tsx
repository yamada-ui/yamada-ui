"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClockFading as OriginalClockFadingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClockFadingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClockFadingIcon = component(Icon)({
  as: OriginalClockFadingIcon,
}) as Component<"svg", IconProps>
