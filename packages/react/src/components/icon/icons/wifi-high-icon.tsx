"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WifiHigh as OriginalWifiHighIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WifiHighIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WifiHighIcon = component(Icon)({
  as: OriginalWifiHighIcon,
}) as Component<"svg", IconProps>
