"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TimerOff as OriginalTimerOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TimerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TimerOffIcon = component(Icon)({
  as: OriginalTimerOffIcon,
}) as Component<"svg", IconProps>
