"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BatteryExclamationPoint as OriginalBatteryExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BatteryExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BatteryExclamationPointIcon = component(Icon)({
  as: OriginalBatteryExclamationPointIcon,
}) as Component<"svg", IconProps>
