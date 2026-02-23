"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Timer as OriginalTimerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TimerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TimerIcon = component(Icon)({
  as: OriginalTimerIcon,
}) as Component<"svg", IconProps>
