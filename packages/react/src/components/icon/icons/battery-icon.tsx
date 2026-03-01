"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Battery as OriginalBatteryIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BatteryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BatteryIcon = component(Icon)({
  as: OriginalBatteryIcon,
}) as Component<"svg", IconProps>
