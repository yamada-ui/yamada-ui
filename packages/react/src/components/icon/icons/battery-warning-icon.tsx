"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BatteryWarning as OriginalBatteryWarningIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BatteryWarningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BatteryWarningIcon = component(Icon)({
  as: OriginalBatteryWarningIcon,
}) as Component<"svg", IconProps>
