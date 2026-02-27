"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WifiSync as OriginalWifiSyncIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WifiSyncIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WifiSyncIcon = component(Icon)({
  as: OriginalWifiSyncIcon,
}) as Component<"svg", IconProps>
