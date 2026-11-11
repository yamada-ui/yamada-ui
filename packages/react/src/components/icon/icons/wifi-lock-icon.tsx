"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WifiLock as OriginalWifiLockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WifiLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WifiLockIcon = component(Icon)({
  as: OriginalWifiLockIcon,
}) as Component<"svg", IconProps>
