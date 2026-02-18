"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WifiZero as OriginalWifiZeroIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WifiZeroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WifiZeroIcon = component(Icon)({
  as: OriginalWifiZeroIcon,
}) as Component<"svg", IconProps>
