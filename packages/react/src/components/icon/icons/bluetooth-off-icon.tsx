"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BluetoothOff as OriginalBluetoothOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BluetoothOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BluetoothOffIcon = component(Icon)({
  as: OriginalBluetoothOffIcon,
}) as Component<"svg", IconProps>
