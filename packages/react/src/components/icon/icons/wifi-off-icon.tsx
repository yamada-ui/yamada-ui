"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WifiOff as OriginalWifiOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WifiOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WifiOffIcon = component(Icon)({
  as: OriginalWifiOffIcon,
}) as Component<"svg", IconProps>
