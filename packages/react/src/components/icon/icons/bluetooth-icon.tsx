"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bluetooth as OriginalBluetoothIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BluetoothIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BluetoothIcon = component(Icon)({
  as: OriginalBluetoothIcon,
}) as Component<"svg", IconProps>
