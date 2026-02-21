"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClockCheck as OriginalClockCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClockCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClockCheckIcon = component(Icon)({
  as: OriginalClockCheckIcon,
}) as Component<"svg", IconProps>
