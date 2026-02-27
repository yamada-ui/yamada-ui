"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Watch as OriginalWatchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WatchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WatchIcon = component(Icon)({
  as: OriginalWatchIcon,
}) as Component<"svg", IconProps>
