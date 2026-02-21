"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlarmClockPlus as OriginalAlarmClockPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlarmClockPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlarmClockPlusIcon = component(Icon)({
  as: OriginalAlarmClockPlusIcon,
}) as Component<"svg", IconProps>
