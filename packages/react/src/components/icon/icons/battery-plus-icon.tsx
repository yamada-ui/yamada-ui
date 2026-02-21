"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BatteryPlus as OriginalBatteryPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BatteryPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BatteryPlusIcon = component(Icon)({
  as: OriginalBatteryPlusIcon,
}) as Component<"svg", IconProps>
