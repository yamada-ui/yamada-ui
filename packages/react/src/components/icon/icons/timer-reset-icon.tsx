"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TimerReset as OriginalTimerResetIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TimerResetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TimerResetIcon = component(Icon)({
  as: OriginalTimerResetIcon,
}) as Component<"svg", IconProps>
