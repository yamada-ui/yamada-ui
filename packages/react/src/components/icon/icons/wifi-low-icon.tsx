"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WifiLow as OriginalWifiLowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WifiLowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WifiLowIcon = component(Icon)({
  as: OriginalWifiLowIcon,
}) as Component<"svg", IconProps>
