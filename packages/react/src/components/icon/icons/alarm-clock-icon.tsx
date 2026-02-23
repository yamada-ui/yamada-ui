"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlarmClock as OriginalAlarmClockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlarmClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlarmClockIcon = component(Icon)({
  as: OriginalAlarmClockIcon,
}) as Component<"svg", IconProps>
