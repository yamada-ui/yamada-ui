"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BluetoothSearching as OriginalBluetoothSearchingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BluetoothSearchingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BluetoothSearchingIcon = component(Icon)({
  as: OriginalBluetoothSearchingIcon,
}) as Component<"svg", IconProps>
