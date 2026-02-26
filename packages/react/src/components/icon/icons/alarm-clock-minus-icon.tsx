"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlarmClockMinus as OriginalAlarmClockMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlarmClockMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlarmClockMinusIcon = component(Icon)({
  as: OriginalAlarmClockMinusIcon,
}) as Component<"svg", IconProps>
