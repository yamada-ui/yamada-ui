"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BatteryMedium as OriginalBatteryMediumIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BatteryMediumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BatteryMediumIcon = component(Icon)({
  as: OriginalBatteryMediumIcon,
}) as Component<"svg", IconProps>
