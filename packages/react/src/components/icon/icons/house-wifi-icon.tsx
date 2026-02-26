"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HouseWifi as OriginalHouseWifiIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HouseWifiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HouseWifiIcon = component(Icon)({
  as: OriginalHouseWifiIcon,
}) as Component<"svg", IconProps>
