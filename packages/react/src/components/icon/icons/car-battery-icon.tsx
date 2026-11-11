"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CarBattery as OriginalCarBatteryIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CarBatteryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CarBatteryIcon = component(Icon)({
  as: OriginalCarBatteryIcon,
}) as Component<"svg", IconProps>
