"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WifiCog as OriginalWifiCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WifiCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WifiCogIcon = component(Icon)({
  as: OriginalWifiCogIcon,
}) as Component<"svg", IconProps>
