"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WifiPen as OriginalWifiPenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WifiPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WifiPenIcon = component(Icon)({
  as: OriginalWifiPenIcon,
}) as Component<"svg", IconProps>
