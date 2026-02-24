"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RefreshCwOff as OriginalRefreshCwOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RefreshCwOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RefreshCwOffIcon = component(Icon)({
  as: OriginalRefreshCwOffIcon,
}) as Component<"svg", IconProps>
