"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlarmClockOff as OriginalAlarmClockOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlarmClockOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlarmClockOffIcon = component(Icon)({
  as: OriginalAlarmClockOffIcon,
}) as Component<"svg", IconProps>
