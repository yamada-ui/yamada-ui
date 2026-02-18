"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlarmSmoke as OriginalAlarmSmokeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlarmSmokeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlarmSmokeIcon = component(Icon)({
  as: OriginalAlarmSmokeIcon,
}) as Component<"svg", IconProps>
