"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Wifi as OriginalWifiIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WifiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WifiIcon = component(Icon)({ as: OriginalWifiIcon }) as Component<
  "svg",
  IconProps
>
