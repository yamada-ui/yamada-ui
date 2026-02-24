"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlarmClockCheck as OriginalAlarmClockCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlarmClockCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlarmClockCheckIcon = component(Icon)({
  as: OriginalAlarmClockCheckIcon,
}) as Component<"svg", IconProps>
