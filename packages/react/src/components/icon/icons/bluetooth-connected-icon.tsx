"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BluetoothConnected as OriginalBluetoothConnectedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BluetoothConnectedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BluetoothConnectedIcon = component(Icon)({
  as: OriginalBluetoothConnectedIcon,
}) as Component<"svg", IconProps>
