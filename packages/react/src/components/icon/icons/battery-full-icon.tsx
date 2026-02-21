"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BatteryFull as OriginalBatteryFullIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BatteryFullIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BatteryFullIcon = component(Icon)({
  as: OriginalBatteryFullIcon,
}) as Component<"svg", IconProps>
