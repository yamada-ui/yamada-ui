"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BatteryLow as OriginalBatteryLowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BatteryLowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BatteryLowIcon = component(Icon)({
  as: OriginalBatteryLowIcon,
}) as Component<"svg", IconProps>
